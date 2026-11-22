export interface PublicationAuthor {
  name: string;
  self?: boolean;
}

export interface PublicationLink {
  label: string;
  url: string;
}

export interface Publication {
  year: string;
  title: string;
  keyword: string; // the part of the title to highlight; it must appear in the title exactly
  authors: PublicationAuthor[];
  venue: string; // the conference or journal, shown as a tag
  venueDetail?: string; // track, volume, pages
  summary?: string;
  links: PublicationLink[];
}

// Shown in this order. Keep here only the papers to feature: the full list is on Google Scholar.
export const publications: Publication[] = [
  {
    year: '2026',
    title: 'What DNA Foundation Models Learn Beyond Sequence Composition',
    keyword: 'DNA Foundation Models',
    authors: [
      { name: 'Vincenzo Yuto Civale', self: true },
      { name: 'Andrew D. Bagdanov' },
      { name: 'Alberto Magi' },
    ],
    venue: 'NeurIPS 2026',
    venueDetail: 'Evaluations and Datasets Track · Poster',
    summary:
      'On 57 genomic classification datasets, plain 6-mer frequencies match or exceed the frozen embeddings of four out of five DNA foundation models.',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2610.15711' },
      {
        label: 'Code',
        url: 'https://github.com/vincenzocivale/genome-cgr-embedding',
      },
    ],
  },
  {
    year: '2026',
    title:
      'Intermediate Layers Encode Optimal Biological Representations in Single-Cell Foundation Models',
    keyword: 'Single-Cell Foundation Models',
    authors: [
      { name: 'Vincenzo Yuto Civale', self: true },
      { name: 'Roberto Semeraro' },
      { name: 'Andrew David Bagdanov' },
      { name: 'Alberto Magi' },
    ],
    venue: 'ICLR 2026 Workshop',
    venueDetail: 'Learning Meaningful Representations of Life (LMRL) · Poster',
    summary:
      'A layer-by-layer evaluation on cell type classification, pseudotime inference and perturbation response: the best biological representations come from intermediate layers.',
    links: [
      { label: 'Paper', url: 'https://openreview.net/pdf?id=f78LvPsY5A' },
      {
        label: 'Code',
        url: 'https://github.com/vincenzocivale/scfm-mid-layer-analysis',
      },
    ],
  },
  {
    year: '2026',
    title:
      'Pediatric Large Cell/Anaplastic Medulloblastomas: Diagnostic Concordance and Multi-Classifier DNA Methylation Profiling, Including the In-House MAGIBU Framework',
    keyword: 'DNA Methylation Profiling',
    authors: [
      { name: 'Laura Giunti' },
      { name: 'Gianluca Mattei' },
      { name: 'Chiara Caporalini' },
      { name: 'Mirko Scagnet' },
      { name: 'Federico Mussa' },
      { name: 'Rina Agushi' },
      { name: 'Milena Guidi' },
      { name: 'Debora Vergani' },
      { name: 'Daniela Balasco' },
      { name: 'Vincenzo Yuto Civale', self: true },
      { name: 'Chiara Carnevali' },
      { name: 'Lorenzo Genitori' },
      { name: 'Alberto Magi' },
      { name: 'Iacopo Sardi' },
      { name: 'Anna Maria Buccoliero' },
    ],
    venue: 'Neuropathology',
    venueDetail: '46(5), e70080',
    links: [{ label: 'Paper', url: 'https://doi.org/10.1111/neup.70080' }],
  },
  {
    year: '2026',
    title:
      'A MAGIBU-based model for pediatric and juvenile CNS tumors: an in-house epigenetic decision-support framework compared with online DNA methylation classifiers',
    keyword: 'DNA methylation classifiers',
    authors: [
      { name: 'Gianluca Mattei' },
      { name: 'Laura Giunti' },
      { name: 'Mirko Scagnet' },
      { name: 'Rina Agushi' },
      { name: 'Federico Mussa' },
      { name: 'Chiara Caporalini' },
      { name: 'Iacopo Sardi' },
      { name: 'Vincenzo Yuto Civale', self: true },
      { name: 'Alberto Magi' },
      { name: 'Lorenzo Genitori' },
      { name: 'Anna Maria Buccoliero' },
    ],
    venue: 'Free Neuropathology',
    venueDetail: '7, 21',
    links: [
      {
        label: 'Paper',
        url: 'https://doi.org/10.17879/freeneuropathology-2026-9648',
      },
    ],
  },
  {
    year: '2024',
    title:
      'Realistic Texture Mapping of 3D Medical Models Using RGBD Camera for Mixed Reality Applications',
    keyword: 'Mixed Reality',
    authors: [
      { name: 'Cosimo Aliani' },
      { name: 'Alberto Morelli' },
      { name: 'Eva Rossi' },
      { name: 'Sara Lombardi' },
      { name: 'Vincenzo Yuto Civale', self: true },
      { name: 'Vittoria Sardini' },
      { name: 'Flavio Verdino' },
      { name: 'Leonardo Bocchi' },
    ],
    venue: 'Applied Sciences',
    venueDetail: '14(10), 4133',
    links: [{ label: 'Paper', url: 'https://doi.org/10.3390/app14104133' }],
  },
];
