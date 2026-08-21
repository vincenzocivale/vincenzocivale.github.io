export interface NavigationItem {
  label: string;
  target: string;
}

export const navigationItems: NavigationItem[] = [
  { label: 'Work', target: 'projects' },
  { label: 'Publications', target: 'publications' },
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experiences' },
  { label: 'Contact', target: 'contact' },
];
