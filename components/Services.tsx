import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, Network, Wrench, Server, CalendarClock, Briefcase, 
  Headphones, MousePointer2, Printer, ShieldCheck, Cloud, 
  BarChart4, Recycle, Settings 
} from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { id: '1', title: 'IT Hardware Supply', description: 'Enterprise-grade laptops, desktops, servers & peripherals for scalable workforce needs.', icon: Laptop },
  { id: '2', title: 'Network & Infrastructure', description: 'Secure, high-speed, and scalable networking solutions designed for modern businesses.', icon: Network },
  { id: '3', title: 'IT AMC & Maintenance', description: 'Comprehensive Annual Maintenance Contracts ensuring zero downtime and optimal performance.', icon: Wrench },
  { id: '4', title: 'Server & Data Center', description: 'End-to-end design, supply, and management of robust server infrastructure.', icon: Server },
  { id: '5', title: 'IT Rentals & Leasing', description: 'Flexible short-term and long-term IT rental plans to manage capital expenditure.', icon: CalendarClock },
  { id: '6', title: 'IT Consulting & Advisory', description: 'Strategic technology planning to align IT infrastructure with business goals.', icon: Briefcase },
  { id: '7', title: 'Remote & On-Site Support', description: 'Fast, reliable technical troubleshooting and support whenever you need it.', icon: Headphones },
  { id: '8', title: 'Hardware & Accessories', description: 'Supply of genuine IT components, peripherals, and workstation accessories.', icon: MousePointer2 },
  { id: '9', title: 'Printer & Cartridge Services', description: 'Managed print services, printer sales, maintenance, and cartridge refilling.', icon: Printer },
  { id: '10', title: 'Software Licensing', description: 'Authorized reseller for major enterprise software and operating system licenses.', icon: ShieldCheck },
  { id: '11', title: 'Cloud & Backup Solutions', description: 'Secure cloud migration, storage solutions, and automated data backup systems.', icon: Cloud },
  { id: '12', title: 'IT Asset Management', description: 'Lifecycle tracking, auditing, and optimization of your organization’s IT assets.', icon: BarChart4 },
  { id: '13', title: 'E-Waste Disposal', description: 'Certified, eco-friendly disposal and recycling of outdated electronic equipment.', icon: Recycle },
  { id: '14', title: 'Office IT Repairs', description: 'Professional repair services for desktops, laptops, and office IT equipment.', icon: Settings },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-3 mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            From hardware procurement to managed infrastructure, we provide the backbone for your business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-primary-100 transition-all group"
            >
              <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;