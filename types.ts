import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface ContactInfo {
  office: string;
  address: string[];
  email: string;
  phone: string[];
  mapEmbedUrl: string;
}