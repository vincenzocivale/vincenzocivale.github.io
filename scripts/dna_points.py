"""Turns the flat DNA drawing into 3D points for the rotating helix of the hero.

One-off: run again only if public/assets/images/dna.svg changes (needs numpy).

    python3 scripts/dna_points.py

The drawing is a double helix seen from the side, so each dot only lacks its depth.
A helix model fitted to the dots supplies it: at angle 0 every drawn dot stays exactly
where the drawing has it, and the model decides where it goes as the helix turns.
"""

import json
import math
import re
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parent.parent
SVG = ROOT / 'public/assets/images/dna.svg'
OUT = ROOT / 'src/data/dna-points.json'
SIZE = 940  # square that holds the helix at every angle; the drawing itself is 755 wide
NUMBER = r'-?\d+\.?\d*'

svg = SVG.read_text()

# ---- the dots: small dumbbells, each with its own centre and rotation in the inline style
centres, halves = [], []
for d, style in re.findall(r'<path d="([^"]+)" fill="#5980de" style="([^"]+)">', svg):
    cx, cy = map(float, re.search(r'transform-origin: ([\d.]+)px ([\d.]+)px', style).groups())
    turn = math.radians(float(re.search(r'rotate\((-?[\d.]+)deg\)', style).group(1)))
    points = np.array(re.findall(NUMBER, d), float).reshape(-1, 2)
    gaps = np.linalg.norm(points[:, None] - points[None], axis=2)
    a, b = np.unravel_index(gaps.argmax(), gaps.shape)  # the two ends of the dumbbell
    hx, hy = (points[a] - points[b]) / 2
    centres.append((cx, cy))
    halves.append((hx * math.cos(turn) - hy * math.sin(turn), hx * math.sin(turn) + hy * math.cos(turn)))
centres, halves = np.array(centres), np.array(halves)

# ---- helix axis = main direction of the cloud; t runs along it, d across it
origin = centres.mean(0)
along = np.linalg.eigh(np.cov((centres - origin).T))[1][:, 1]
along = along if along[0] > 0 else -along
across = np.array([-along[1], along[0]])
t, d = (centres - origin) @ along, (centres - origin) @ across

# ---- the two strands cross where the cloud is thinnest: half a turn lies between the crossings
grid = np.arange(t.min() + 40, t.max() - 40, 2.0)
spread = [np.percentile(np.abs(d[np.abs(t - g) < 12]), 90) for g in grid]
crossings = []
for g in grid[np.argsort(spread)]:
    if all(abs(g - c) > 150 for c in crossings):
        crossings.append(g)
    if len(crossings) == 2:
        break
t1, t2 = sorted(crossings)
lobes = [np.percentile(np.abs(d[(t >= lo) & (t <= hi)]), 97) for lo, hi in ((t.min(), t1), (t1, t2), (t2, t.max()))]


def phase(tt):
    return math.pi / 2 + math.pi * (tt - t1) / (t2 - t1)


def radius(tt):
    knots = [t.min(), (t.min() + t1) / 2, (t1 + t2) / 2, (t2 + t.max()) / 2, t.max()]
    return np.interp(tt, knots, [lobes[0], lobes[0], lobes[1], lobes[2], lobes[2]])


# ---- depth: a dot at fraction s of the radius sits at (d, z) = s * R * (cos, sin) of the phase
cos = np.cos(phase(t))
ratio = d / (radius(t) * np.where(np.abs(cos) < 1e-6, 1e-6, cos))
rung = (np.abs(cos) >= 0.3) & (np.abs(ratio) < 0.74)  # inside the cylinder = a rung of the ladder
side = np.sign(d * cos)
side = np.where(side == 0, np.where(np.arange(len(t)) % 2 == 0, 1.0, -1.0), side)
s = np.where(rung, ratio, np.where(np.abs(cos) >= 0.3, np.clip(ratio, -1.08, 1.08), side))

# ---- the drawing shows few dots on the rungs it sees end-on; give every rung the same number,
#      or the helix looks hollow once those rungs turn to face the viewer
rng = np.random.default_rng(7)
rung_t = np.sort(t[rung])
clusters = [c for c in np.split(rung_t, np.where(np.diff(rung_t) > 9)[0] + 1) if len(c) >= 4]
found = np.array([c.mean() for c in clusters])
count = np.array([len(c) for c in clusters])
step = float(np.median(np.diff(found)))
full = int(np.median(count[np.abs(np.cos(phase(found))) > 0.85]))
ladder = np.arange(found.min() - step * round((found.min() - t.min()) / step), t.max(), step)
extra_t, extra_s, extra_half = [], [], []
for position in ladder[(ladder > t.min() + 8) & (ladder < t.max() - 8)]:
    nearest = np.abs(found - position).argmin()
    have, at = (count[nearest], found[nearest]) if abs(found[nearest] - position) < step / 2 else (0, position)
    missing = max(0, full - have)
    extra_t += list(at + rng.normal(0, 2.0, missing))
    extra_s += list(rng.uniform(-0.74, 0.74, missing))
    extra_half += list(halves[rung][rng.integers(0, rung.sum(), missing)])
extra_t, extra_s = np.array(extra_t), np.array(extra_s)

all_t = np.concatenate([t, extra_t])
all_d = np.concatenate([d, extra_s * radius(extra_t) * np.cos(phase(extra_t))])
all_z = np.concatenate([s, extra_s]) * radius(all_t) * np.sin(phase(all_t))
all_half = np.concatenate([halves, np.array(extra_half).reshape(-1, 2)])
is_rung = np.concatenate([rung, np.ones(len(extra_t), bool)])

# ---- the coloured strand: one cubic path that follows a backbone
path = re.search(r'<path stroke="url\(#b\)"[^>]* d="([^"]+)"', svg).group(1)
numbers = list(map(float, re.findall(NUMBER, path)))
cursor, samples = np.array(numbers[:2]), []
for k in range(2, len(numbers), 6):  # relative cubic segments
    c1, c2, end = cursor + numbers[k:k + 2], cursor + numbers[k + 2:k + 4], cursor + numbers[k + 4:k + 6]
    for q in np.linspace(0, 1, 24, endpoint=False):
        samples.append((1 - q) ** 3 * cursor + 3 * (1 - q) ** 2 * q * c1 + 3 * (1 - q) * q * q * c2 + q ** 3 * end)
    cursor = end
samples = np.array(samples + [cursor])
strand_t, strand_d = (samples - origin) @ along, (samples - origin) @ across
strand_cos = np.cos(phase(strand_t))
on_strand = np.abs(strand_cos) > 0.3
strand_side = np.sign(np.median(strand_d[on_strand] / (radius(strand_t) * strand_cos)[on_strand]))
strand_z = strand_side * radius(strand_t) * np.sin(phase(strand_t))
gold, blue = np.array([173.137, 554.807]), np.array([83.626, 331.796])  # the SVG's linearGradient
mix = np.clip(((samples - gold) @ (blue - gold)) / ((blue - gold) @ (blue - gold)), 0, 1)

# ---- screen coordinates: the SVG is shown flipped vertically, so y changes sign
dots = []
for i in range(len(all_t)):
    dots += [
        round(all_t[i] * along[0], 1), round(-all_t[i] * along[1], 1),  # point on the axis
        round(all_d[i], 1), round(all_z[i], 1),  # across the axis, and depth
        round(all_half[i][0], 1), round(-all_half[i][1], 1),  # half of the dumbbell
        round(float(phase(all_t[i])), 2) if is_rung[i] else None,  # rungs fade when seen end-on
    ]
strand = []
for i in range(len(samples)):
    strand += [
        round(strand_t[i] * along[0], 1), round(-strand_t[i] * along[1], 1),
        round(strand_d[i], 1), round(strand_z[i], 1), round(float(mix[i]), 2),
    ]

OUT.write_text(json.dumps({
    'size': SIZE,
    'radius': round(float(np.mean(lobes))),
    'across': [round(across[0], 4), round(-across[1], 4)],
    'dots': dots,  # 7 numbers per dot
    'strand': strand,  # 5 numbers per point
}, separators=(',', ':')) + '\n')
print(f'{len(all_t)} dots ({len(extra_t)} added on {len(found)} rungs), {len(samples)} strand points -> {OUT}')
