import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Office Team" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-2xl">ISO 9001:2015</p>
                  <p className="text-white/80">Certified Company</p>
                </div>
              </div>
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
               <div className="flex items-center space-x-4">
                 <div className="bg-primary-100 p-3 rounded-full">
                   <Award className="h-8 w-8 text-primary-600" />
                 </div>
                 <div>
                   <p className="text-3xl font-bold text-slate-900">{new Date().getFullYear() - 1999}+</p>
                   <p className="text-sm text-slate-500 font-medium">Years of Experience</p>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-3 mb-6">
              Your Trusted Partner for Enterprise IT Growth
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Esar Info International has been at the forefront of the IT industry for over two decades. We specialize in empowering businesses with robust infrastructure, cutting-edge hardware, and strategic consulting.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              With strategic offices in Noida and Delhi, we serve a diverse clientele across India and international markets, building long-term partnerships based on trust, reliability, and technical excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Strategic Locations</h4>
                  <p className="text-slate-500 text-sm">Operating from Delhi & Noida hubs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Global Reach</h4>
                  <p className="text-slate-500 text-sm">Serving clients across India & beyond.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Client Focused</h4>
                  <p className="text-slate-500 text-sm">Dedicated account managers & support.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Quality Certified</h4>
                  <p className="text-slate-500 text-sm">ISO 9001:2015 standards compliant.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;