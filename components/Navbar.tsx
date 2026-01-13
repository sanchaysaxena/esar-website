import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/images/Office logo.svg'


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <img 
            src={logo} 
            alt="Esar Info Logo" 
            className="h-16 w-16 md:h-20 md:w-20 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className={`font-heading font-bold text-xl md:text-2xl leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              ESAR INFO
            </span>
            <span className={`text-xl font-medium tracking-wider ${isScrolled ? 'text-slate-500' : 'text-slate-600 md:text-slate-200'}`}>
              INTERNATIONAL
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-sm tracking-wide transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-slate-700' : 'text-slate-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white text-primary-900 hover:bg-slate-100'
            }`}
          >
            <Phone size={16} />
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className={isScrolled ? 'text-slate-900' : 'text-slate-900'} /> : <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-fadeIn">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 font-medium hover:text-primary-600 px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary-600 text-white text-center py-3 rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;