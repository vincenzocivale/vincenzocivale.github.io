export interface Experience {
  company: string;
  title: string;
  duration: string;
  details: string[];
}

// Positions and degrees together, most recent first.
export const experiences: Experience[] = [
  {
    company: 'University of Siena',
    title: 'PhD Student',
    duration: '2025 – Present',
    details: [
      'Evaluating what foundation models for DNA, single-cell and histopathology data learn, with first-author papers at NeurIPS 2026 and the ICLR 2026 LMRL workshop.',
    ],
  },
  {
    company: 'Bioimaging Lab, University of Florence',
    title: 'Research Fellow',
    duration: '2023 – 2025',
    details: [
      'Developed deep learning pipelines for medical image segmentation, with performance evaluated in collaboration with radiologists.',
      'Conducted research on neurological behavioral differences between digital natives and immigrants as part of a PRIN project.',
      'Contributed to medical image volume visualization and interoperability tools for HoloLens 2.',
      'Supervised thesis students.',
    ],
  },
  {
    company: 'University of Florence',
    title: 'MSc in Biomedical Engineering',
    duration: '2023 – 2025',
    details: [],
  },
  {
    company: 'University of Florence',
    title: 'BSc in Biomedical Engineering',
    duration: '2020 – 2023',
    details: [],
  },
];
