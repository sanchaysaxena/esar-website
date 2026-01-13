import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-heading font-bold text-2xl text-white">Esar Info International</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
            A premier provider of IT hardware, infrastructure, and enterprise solutions with over{" "} {new Date().getFullYear() - 1999} years of excellence. ISO 9001:2015 Certified.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Hardware Supply</li>
              <li>Network Solutions</li>
              <li>IT AMC Services</li>
              <li>Cloud & Backup</li>
              <li>Data Center Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <p>
                <span className="block text-slate-500 mb-1">General Queries:</span>
                <a href="mailto:info@esarinfo.co.in" className="hover:text-white">info@esarinfo.co.in</a>
              </p>
              <p>
                <span className="block text-slate-500 mb-1">Sales & Support:</span>
                +91-9899971176<br/>
                +91-9999020333
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} Esar Info International. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-slate-500">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;