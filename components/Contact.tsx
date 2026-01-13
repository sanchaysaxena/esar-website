import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2, Import } from 'lucide-react';
import { ContactInfo } from '../types';
import emailjs from '@emailjs/browser';

const contactDetails: ContactInfo[] = [
  {
    office: 'Noida Office',
    address: ['111, 1st Floor, Ocean Plaza P-5', 'Sector 18, Noida – 201301', 'Uttar Pradesh'],
    email: 'esaritinfo@gmail.com',
    phone: ['+91-9899971176', '+91-8860216006', '0120-4219989'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2409.956233037673!2d77.3241451302463!3d28.56949606135297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44bf81ea1cf%3A0xb937b955d059093c!2sEsar%20Info%20International!5e0!3m2!1sen!2sin!4v1767705787072!5m2!1sen!2sin'
  },
  {
    office: 'Delhi Office',
    address: ['402, Red Rose Building 49/50, Nehru Place', 'South Delhi', 'New Delhi – 110019'],
    email: 'esaritdelhi@gmail.com',
    phone: ['+91-9999020333', '+91-9811115268'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.683402082823!2d77.2514475!3d28.549234400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf784fffb7%3A0xda2394fb356c8290!2sEsar%20Info%20International!5e0!3m2!1sen!2sin!4v1767706054351!5m2!1sen!2sin'
  },
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
  
      setFormState('success');
  
      // clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
  
      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Something went wrong. Please try again.');
      setFormState('idle');
    }
  };  
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setFormState('loading');
  //   // Simulate API call
  //   setTimeout(() => {
  //     setFormState('success');
  //     // Reset after 3 seconds
  //     setTimeout(() => setFormState('idle'), 3000);
  //   }, 1500);
  // };
  

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-3 mb-6">
            We'd Love To Hear From You
          </h2>
          <p className="text-slate-600 text-lg">
            Have a project in mind or need urgent support? Reach out to our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info & Maps (Takes 3 cols on large screens) */}
          <div className="lg:col-span-3 space-y-12">
            {contactDetails.map((info, index) => (
              <motion.div
                key={info.office}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4 flex items-center">
                    <MapPin className="mr-3 text-primary-600" /> {info.office}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="font-semibold text-slate-900">Address</h4>
                            <div>
                                {info.address.map((line, i) => (
                                    <p key={i} className="text-slate-600">{line}</p>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                             <div>
                                <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                                <a href={`mailto:${info.email}`} className="text-slate-600 hover:text-primary-600 transition-colors flex items-center">
                                    <Mail size={16} className="mr-2" /> {info.email}
                                </a>
                             </div>
                             <div>
                                <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                                <div className="flex flex-col space-y-1">
                                    {info.phone.map((ph, i) => (
                                        <a key={i} href={`tel:${ph.replace(/\s+/g, '')}`} className="text-slate-600 hover:text-primary-600 transition-colors flex items-center">
                                            <Phone size={16} className="mr-2" /> {ph}
                                        </a>
                                    ))}
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
                
                {/* Embedded Map */}
                <div className="h-64 w-full bg-slate-100 border-t border-slate-100 relative">
                     <iframe 
                        title={`${info.office} Map`}
                        src={info.mapEmbedUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy"
                        className="absolute inset-0"
                    ></iframe>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form (Takes 2 cols on large screens and sticks) */}
          <div className="lg:col-span-2">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 sticky top-28"
            >
                <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Send us a Message</h3>
                <p className="text-sm text-slate-600 mb-6 text-center">
                  Prefer email? Write to us at{' '}
                  <a
                    href="mailto:info@esarinfo.co.in"
                    className="font-semibold text-primary-600 hover:underline"
                  >
                    info@esarinfo.co.in
                  </a>
                </p>

                <p className="text-slate-500 mb-8 text-center">Fill out the form below and we will get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                {/* <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                    />
                </div> */}
                
                {/* <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="john@company.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    ></textarea>
                </div> */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button 
                    type="submit" 
                    disabled={formState === 'loading' || formState === 'success'}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all flex justify-center items-center space-x-2 ${
                    formState === 'success' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-slate-900 hover:bg-primary-600'
                    }`}
                >
                    {formState === 'idle' && (
                    <>
                        <span>Send Message</span>
                        <Send size={18} />
                    </>
                    )}
                    {formState === 'loading' && (
                    <Loader2 size={20} className="animate-spin" />
                    )}
                    {formState === 'success' && (
                    <>
                        <span>Message Sent!</span>
                        <CheckCircle2 size={20} />
                    </>
                    )}
                </button>
                </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;