import React from 'react';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  logo: string;
}

interface BrandCategory {
  title: string;
  brands: Brand[];
}

const brandCategories: BrandCategory[] = [
  {
    title: "Laptops, PCs & All In One",
    brands: [
      { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
      { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
      { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
      { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
      { name: "Asus", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
      { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg" },
    ]
  },
  {
    title: "Servers, Data Center and Work Station",
    brands: [
      { name: "HPE", logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg" },
      { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
      { name: "Dell EMC", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dell_EMC_logo.svg" },
    ]
  },
  {
    title: "Networking & Security",
    brands: [
      { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
      { name: "Juniper", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Juniper_Networks_logo.svg" },
      { name: "D-Link", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/D-Link_wordmark.svg" },
      { name: "Ubiquiti", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ubiquiti_Logo_Horizontal.png" },
      { name: "Fortinet", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Fortinet_Logo.png" },
    ]
  },
  {
    title: "Printers & Imaging",
    brands: [
      { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
      { name: "Canon", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Canon_logo.svg" },
      { name: "Epson", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/EPSON-Logo.svg" },
      { name: "Brother", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Brother_logo.svg" },
      { name: "Xerox", logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Xerox_2008_Logo.png" },
    ]
  },
  {
    title: "Storage & Accessories",
    brands: [
      { name: "Western Digital", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Western_Digital_logo_2004.svg" },
      { name: "Seagate", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Seagate_logo.svg" },
      { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Samsung_old_logo_before_year_2015.svg" },
      { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg" },
      { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    ]
  }
];

const Brands: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Our Partners</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-3 mb-6">
            Brands We Deal In
          </h2>
          <p className="text-slate-600 text-lg">
            We partner with the world's leading technology manufacturers to bring you best-in-class solutions.
          </p>
        </div>

        <div className="space-y-16">
          {brandCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-8 border-l-4 border-primary-500 pl-4">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.brands.map((brand, bIdx) => (
                  <div 
                    key={bIdx}
                    className="group bg-slate-50 border border-slate-100 rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md hover:border-primary-100 transition-all duration-300"
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      title={brand.name}
                      className="max-h-12 w-auto max-w-full object-contain filter grayscale-0 group-hover:grayscale transition-all duration-300 opacity-90 group-hover:opacity-100 transform group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;