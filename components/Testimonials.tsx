import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Rajesh Malhotra',
    role: 'CTO',
    company: 'TechVision India',
    content: 'Esar Info has been our hardware partner for over 5 years. Their prompt service and genuine products have significantly reduced our downtime. Highly recommended for enterprise needs.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Williams',
    role: 'Operations Head',
    company: 'Global Logistics',
    content: 'We revamped our entire server room with their help. The consulting team was knowledgeable and the execution was flawless. A reliable partner for critical infrastructure.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Director',
    company: 'Creative Solutions',
    content: 'Their AMC services are top-notch. Whenever we have an issue, their technician is onsite within hours. It gives us peace of mind to focus on our core business.',
    rating: 4,
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Director',
    company: 'Creative Solutions',
    content: 'Their AMC services are top-notch. Whenever we have an issue, their technician is onsite within hours. It gives us peace of mind to focus on our core business.',
    rating: 4,
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Director',
    company: 'Creative Solutions',
    content: 'Their AMC services are top-notch. Whenever we have an issue, their technician is onsite within hours. It gives us peace of mind to focus on our core business.',
    rating: 4,
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Director',
    company: 'Creative Solutions',
    content: 'Their AMC services are top-notch. Whenever we have an issue, their technician is onsite within hours. It gives us peace of mind to focus on our core business.',
    rating: 4,
  },
  {
    id: '3',
    name: 'Amit Verma',
    role: 'Director',
    company: 'Creative Solutions',
    content: 'Their AMC services are top-notch. Whenever we have an issue, their technician is onsite within hours. It gives us peace of mind to focus on our core business.',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setAtStart(scrollLeft <= 5);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    };

    handleScroll();
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-600 rounded-full blur-[128px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary-600 rounded-full blur-[128px] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-400 font-semibold tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-400 text-lg">
            See what our clients have to say about our commitment to quality and service.
          </p>
        </div>

        <div className="relative">
          {/* LEFT TRANSPARENT FADE */}
          {!atStart && (
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24
                            bg-gradient-to-r from-slate-900 to-transparent
                            transition-opacity duration-300" />
          )}

          {/* RIGHT TRANSPARENT FADE */}
          {!atEnd && (
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24
                            bg-gradient-to-l from-slate-900 to-transparent
                            transition-opacity duration-300" />
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="snap-start min-w-[85%] sm:min-w-[60%] md:min-w-[33%]
                           bg-slate-800/60
                           p-8 rounded-2xl border border-slate-700
                           hover:border-primary-500/50 transition-all
                           hover:-translate-y-1"
              >
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-primary-500 opacity-50" />
                </div>

                <p className="text-slate-300 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>

                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                        className={i < testimonial.rating ? '' : 'text-slate-600'}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;