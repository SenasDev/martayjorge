export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  title: string;
  time: string;
  location: string;
  address: string;
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: string; // class for grid spanning
}
