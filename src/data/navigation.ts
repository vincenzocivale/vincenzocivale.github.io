export interface NavigationItem {
  label: string;
  target: string;
}

export const navigationItems: NavigationItem[] = [
  { label: 'Publications', target: 'publications' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
];
