export interface Project {
  label: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  technologies: string[];
}

export const projects: Project[] = [
  {
    label: 'Machine Learning',
    title: 'Single Cell Annotation Tool',
    description:
      'An automated single-cell annotation tool designed to identify and classify cell populations from high-dimensional datasets. By decoding biological heterogeneity, the system simplifies data interpretation, allowing researchers to swiftly identify latent patterns and distinct cellular phenotypes.',
    image: {
      src: '/assets/images/cell_classification_cover.png',
      alt: 'A screenshot of Single Cell Classification Tool',
    },
    technologies: ['Pytorch', 'Scanpy', 'Transformers'],
  },
  {
    label: 'Medical XR',
    title: 'AR Medical Imaging Plugin',
    description:
      'A custom Unity plugin designed for real-time medical interoperability. It uses the OpenIGTLink protocol to establish a seamless bridge between surgical planning software and AR environments, enabling the low-latency streaming and visualisation of complex 3D volumes.',
    image: {
      src: '/assets/images/igtlink_cover.png',
      alt: 'Cover image Plugin',
    },
    technologies: ['Unity', 'Hololens2', 'IGTLink'],
  },
  {
    label: 'Research Project',
    title: 'HistoFocus',
    description:
      'An optimised Vision Transformer (ViT) framework for histopathological tumour diagnosis, which uses Upper Confidence Bound (UCB) scores to dynamically prune redundant tokens. This approach accelerates cancer detection workflows by 5x while maintaining state-of-the-art accuracy',
    image: {
      src: '/assets/images/histological_image_pruning_cover.png',
      alt: 'Cover image',
    },
    technologies: ['Pytorch', 'Transformers', 'Reinforcement Learning'],
  },
];
