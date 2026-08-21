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
  authors: PublicationAuthor[];
  venue: string;
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    year: '2026',
    title:
      'Intermediate Layers Encode Optimal Biological Representations in Single-Cell Foundation Models',
    authors: [
      { name: 'Vincenzo Yuto Civale', self: true },
      { name: 'Roberto Semeraro' },
      { name: 'Andrew David Bagdanov' },
      { name: 'Alberto Magi' },
    ],
    venue:
      'ICLR 2026 Workshop on Learning Meaningful Representations of Life (LMRL) · Poster',
    links: [
      { label: 'Paper', url: 'https://openreview.net/pdf?id=f78LvPsY5A' },
      {
        label: 'Code',
        url: 'https://github.com/vincenzocivale/scfm-mid-layer-analysis',
      },
    ],
  },
  {
    year: '2024',
    title:
      'Realistic Texture Mapping of 3D Medical Models Using RGBD Camera for Mixed Reality Applications',
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
    venue: 'Applied Sciences · 14(10), 4133',
    links: [{ label: 'Paper', url: 'https://doi.org/10.3390/app14104133' }],
  },
];
