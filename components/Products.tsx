
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, ChevronDown, ShoppingCart, Eye, Star, X } from 'lucide-react';
import { Product } from '../types';

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Dell XPS 15 Enterprise Edition',
    category: 'Laptops',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1593642632823-8f7856677741?q=80&w=1000&auto=format&fit=crop',
    description: 'High-performance laptop for business professionals with 4K display and i9 processor.',
    inStock: true,
    popularity: 95,
    rating: 4.8
  },
  {
    id: '2',
    name: 'HP ProLiant DL380 Gen10',
    category: 'Servers',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    description: 'Secure 2U rack server capable of handling demanding workloads and virtualization.',
    inStock: true,
    popularity: 88,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Cisco Catalyst 9200 Switch',
    category: 'Networking',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=1000&auto=format&fit=crop',
    description: 'Enterprise-class access switch with advanced security and resiliency features.',
    inStock: true,
    popularity: 92,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'Laptops',
    price: 165000,
    image: 'https://images.unsplash.com/photo-1588872657578-a83f044cdb02?q=80&w=1000&auto=format&fit=crop',
    description: 'Ultralight business laptop with legendary durability and keyboard comfort.',
    inStock: false,
    popularity: 90,
    rating: 4.6
  },
  {
    id: '5',
    name: 'Ubiquiti UniFi Dream Machine',
    category: 'Networking',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1563770095-5158c30e296b?q=80&w=1000&auto=format&fit=crop',
    description: 'All-in-one security gateway and network appliance for small to medium businesses.',
    inStock: true,
    popularity: 85,
    rating: 4.5
  },
  {
    id: '6',
    name: 'Apple MacBook Pro M3',
    category: 'Laptops',
    price: 240000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=1000&auto=format&fit=crop',
    description: 'The most powerful MacBook ever tailored for creative professionals.',
    inStock: true,
    popularity: 98,
    rating: 4.9
  },
  {
    id: '7',
    name: 'Epson WorkForce Pro',
    category: 'Printers',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1000&auto=format&fit=crop',
    description: 'Heavy-duty multifunction printer for high-volume office environments.',
    inStock: true,
    popularity: 75,
    rating: 4.3
  },
  {
    id: '8',
    name: 'Synology DiskStation DS923+',
    category: 'Storage',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1531297461136-82lw9z1a?q=80&w=1000&auto=format&fit=crop',
    description: 'Flexible storage platform for small businesses and home offices.',
    inStock: true,
    popularity: 82,
    rating: 4.8
  }
];

const CATEGORIES = ['All', 'Laptops', 'Servers', 'Networking', 'Printers', 'Storage'];
const SORT_OPTIONS = [
  { label: 'Popularity', value: 'popularity' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
];

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('popularity');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      switch (selectedSort) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'popularity': return b.popularity - a.popularity;
        default: return 0;
      }
    });
  }, [searchQuery, selectedCategory, selectedSort, priceRange]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-12 mb-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Products</h1>
          <p className="text-slate-300 max-w-2xl">
            Explore our comprehensive range of enterprise IT hardware. From workstations to data centers, we supply top-tier equipment to power your business.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center space-x-2 bg-white p-3 rounded-lg border border-slate-200 shadow-sm text-slate-700 font-medium"
            onClick={() => setShowMobileFilters(true)}
          >
            <SlidersHorizontal size={20} />
            <span>Filters & Sort</span>
          </button>

          {/* Sidebar Filters */}
          <aside className={`
            fixed inset-0 z-50 bg-white p-6 transform transition-transform duration-300 overflow-y-auto lg:translate-x-0 lg:static lg:w-64 lg:h-auto lg:bg-transparent lg:p-0 lg:block lg:shadow-none
            ${showMobileFilters ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="flex justify-between items-center lg:hidden mb-6">
              <h2 className="text-xl font-bold text-slate-900">Filters</h2>
              <button onClick={() => setShowMobileFilters(false)} className="p-2 text-slate-500">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                  <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {CATEGORIES.map(category => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`
                        w-5 h-5 rounded border flex items-center justify-center transition-colors
                        ${selectedCategory === category ? 'bg-primary-600 border-primary-600' : 'border-slate-300 group-hover:border-primary-500'}
                      `}>
                        {selectedCategory === category && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <input 
                        type="radio" 
                        name="category" 
                        className="hidden"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                      />
                      <span className={`text-sm ${selectedCategory === category ? 'text-primary-600 font-medium' : 'text-slate-600'}`}>
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range (Simplified for UI demo) */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input 
                    type="range" 
                    min="0" 
                    max="500000" 
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>₹0</span>
                    <span className="font-medium text-slate-900">Max: ₹{priceRange[1].toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="lg:hidden w-full mt-8 bg-primary-600 text-white py-3 rounded-lg font-bold"
              onClick={() => setShowMobileFilters(false)}
            >
              Show {filteredProducts.length} Results
            </button>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-slate-600 text-sm mb-4 sm:mb-0">
                Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> results
              </p>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm text-slate-500">Sort by:</span>
                <div className="relative">
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer text-sm font-medium"
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all flex flex-col h-full"
                  >
                    <div className="relative h-48 overflow-hidden group">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Out of Stock</span>
                        </div>
                      )}
                      {product.inStock && (
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white p-2 rounded-full shadow-md hover:bg-primary-50 transition-colors text-primary-600">
                            <Eye size={20} />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-2 py-1 rounded">
                          {product.category}
                        </span>
                        <div className="flex items-center text-yellow-400 text-xs font-bold">
                          <Star size={14} fill="currentColor" className="mr-1" />
                          {product.rating}
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-1">
                        {product.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-slate-400 block">Price</span>
                          <span className="text-lg font-bold text-slate-900">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <button 
                          disabled={!product.inStock}
                          className={`
                            px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center space-x-2
                            ${product.inStock 
                              ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-primary-600/30' 
                              : 'bg-slate-100 text-slate-400 cursor-not-allowed'}
                          `}
                        >
                          <ShoppingCart size={16} />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-slate-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-500">Try adjusting your filters or search query.</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange([0, 500000]);
                  }}
                  className="mt-4 text-primary-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
