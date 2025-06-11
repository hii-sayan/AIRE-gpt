import React from 'react';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Send,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const email = "support@airegpt.com";
  const linkedinUrl = "https://www.linkedin.com/company/aire-gpt/posts/?feedView=all";
  const xUrl = "https://x.com/AIREgpt";

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-[10%] left-[50%] transform -translate-x-1/2 w-[80%] h-[40%] bg-blue-600 rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img 
                src="/aire-logo.jpeg" 
                alt="AIRE GPT Logo" 
                className="w-10 h-10 object-contain rounded-full"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                AIRE GPT
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6">
              Building the future of web4 technology with blockchain innovation, decentralized applications, and AI integration.
            </p>
            
            <div className="flex space-x-4">
              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Github"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-colors duration-300"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Home',
                'Features',
                'Whitepaper',
                'Team',
                'Roadmap',
                'FAQ'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              AIRE Ecosystem
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'AIRE Social',
                'AIRE Marketplace',
                'AIRE Wallet',
                'AIRE Games',
                'AIRE DAO',
                'AIRE Music'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Subscribe to Updates
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and announcements from AIRE GPT.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-r-md flex items-center justify-center">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} AIRE GPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;