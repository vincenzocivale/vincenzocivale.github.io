export interface Experience {
  company: string;
  title: string;
  duration: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    company: 'University of Siena',
    title: 'PhD Student',
    duration: '09/2025 - Present',
    details: [
      'Researching machine learning methods for biomedical data, with a focus on multimodal representation learning across imaging and omics.',
      'Developing and evaluating models for genomics, single-cell data, and computational pathology.',
      'Working on efficient and reproducible pipelines for biomedical representation learning and model evaluation.',
    ],
  },
  {
    company: 'University of Florence',
    title: 'Research Fellow',
    duration: '09/2023 - 06/2025',
    details: [
      'Developed deep learning pipelines for medical image segmentation, with performance evaluated in collaboration with radiologists.',
      'Conducted research on neurological behavioral differences between digital natives and immigrants as part of a PRIN project.',
      'Contributed to medical image volume visualization and interoperability tools for HoloLens 2.',
    ],
  },
];
