export type RoutePath =
  | '/'
  | '/products'
  | '/technology'
  | '/design-services'
  | '/engineering'
  | '/about'
  | '/contact'
  | '/latest'
  | '/applications';

export interface NavItem {
  label: string;
  href: RoutePath;
}

export interface ProductSpec {
  id: string;
  name: string;
  category: 'antennas' | 'routers' | 'embedded' | 'trackers';
  categoryLabel: string;
  subtitle: string;
  description: string;
  image: string;
  frequencyRange: string;
  peakGain: string;
  polarization: string;
  impedance: string;
  vswr: string;
  efficiency: string;
  dimensions: string;
  connector: string;
  operatingTemp: string;
  certifications: string[];
  keyApplications: string[];
  datasheetAvailable: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  category: 'executive' | 'advisory';
}
