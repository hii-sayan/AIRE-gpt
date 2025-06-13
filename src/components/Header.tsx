import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Whitepaper', href: '#whitepaper' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'py-2' 
            : 'py-4'
        }`}
      >
        {/* Floating Container */}
        <div className={`container mx-auto px-4 sm:px-6 transition-all duration-500 ease-out ${
          isScrolled ? 'max-w-6xl' : 'max-w-7xl'
        }`}>
          <div className={`relative backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 ease-out ${
            isScrolled 
              ? 'bg-gray-900/80 shadow-2xl shadow-blue-500/10 border-blue-500/20' 
              : 'bg-gray-900/40 shadow-lg shadow-black/20'
          }`}>
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-100' 
                : 'opacity-0'
            }`}></div>
            
            {/* Content */}
            <div className="relative flex justify-between items-center px-6 py-3">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src="/aire-logo.jpeg" 
                    alt="AIRE GPT Logo" 
                    className="w-10 h-10 object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 transition-all duration-300 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300">
                  AIRE GPT
                </span>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    {/* Hover background */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                    {/* Hover border */}
                    <div className="absolute inset-0 rounded-lg border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></div>
                  </a>
                ))}
                
                {/* CTA Button */}
                <button className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:from-blue-500 hover:to-purple-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 text-white font-medium text-sm backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 hover:scale-105 active:scale-95">
                  Launch App
                </button>
              </nav>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
                >
                  <div className="relative z-10">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </div>
                  {/* Button glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        mobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`absolute top-20 left-4 right-4 transition-all duration-300 ${
          mobileMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-4 opacity-0'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
            
            <div className="relative p-6 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/20 border border-transparent font-medium"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-white/10 mt-4">
                <button 
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:from-blue-500 hover:to-purple-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 text-white font-medium backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 active:scale-95"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Launch App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;