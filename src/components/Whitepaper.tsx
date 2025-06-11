import React, { useState, useRef, useEffect } from 'react';
import { DownloadCloud, Coins } from 'lucide-react';
import { ScrollAnimatedElement } from './ScrollAnimations';

const Whitepaper = () => {
  return (
    <section id="whitepaper" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimatedElement animation="slideRight" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AIRE Token Whitepaper</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Our comprehensive whitepaper details the tokenomics, utility, and technological foundations of the AIRE ecosystem.
              Discover how our token powers the future of decentralized applications.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Token distribution and vesting schedule',
                'Utility across all AIRE platforms',
                'Staking rewards and governance power',
                'Deflationary mechanisms and supply control',
                'Technical architecture and security measures'
              ].map((item, index) => (
                <ScrollAnimatedElement 
                  key={index}
                  className="flex items-start"
                  animation="fadeUp"
                  delay={400 + (index * 100)}
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </ScrollAnimatedElement>
              ))}
            </div>
            
            <ScrollAnimatedElement animation="fadeUp" delay={900}>
              <a 
                href="/AIRE Whitepaper 4.0 June 2025.pdf" 
                download 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-white font-medium flex items-center hover:scale-105"
              >
                <DownloadCloud className="mr-2" size={20} />
                Download Whitepaper
              </a>
            </ScrollAnimatedElement>
          </ScrollAnimatedElement>
          
          <ScrollAnimatedElement 
            className="backdrop-blur-md bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            animation="slideLeft"
            delay={300}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img 
                  src="/WhatsApp Image 2025-05-20 at 7.46.43 PM.jpeg" 
                  alt="AIRE Token" 
                  className="w-10 h-10 object-contain rounded-full mr-3" 
                />
                <h3 className="text-xl font-semibold">Token Details</h3>
              </div>
              <div className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full">
                <span className="text-blue-400 text-sm font-medium">ERC-20</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Token Name', value: 'AIRE Token' },
                { label: 'Token Symbol', value: 'AIRE' },
                { label: 'Total Supply', value: '1,000,000,000 AIRE' },
                { label: 'Initial Market Cap', value: '$5,000,000' },
                { label: 'Initial Token Price', value: '$0.10' },
                { label: 'Standard', value: 'ERC-20 and native on AIRE Chain' }
              ].map((item, index) => (
                <ScrollAnimatedElement 
                  key={index}
                  className="flex justify-between py-3 border-b border-gray-700"
                  animation="fadeUp"
                  delay={500 + (index * 50)}
                >
                  <span className="text-gray-400">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </ScrollAnimatedElement>
              ))}
            </div>
            
            <ScrollAnimatedElement className="mt-8" animation="fadeUp" delay={800}>
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <Coins className="mr-2 text-blue-400" size={20} />
                Token Allocation
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Public Sale', value: '30%', color: 'bg-blue-500' },
                  { label: 'Team & Advisors', value: '15%', color: 'bg-purple-500' },
                  { label: 'Ecosystem Growth', value: '25%', color: 'bg-cyan-500' },
                  { label: 'Liquidity', value: '10%', color: 'bg-green-500' },
                  { label: 'Marketing', value: '10%', color: 'bg-yellow-500' },
                  { label: 'Reserve', value: '10%', color: 'bg-pink-500' }
                ].map((item, index) => (
                  <ScrollAnimatedElement 
                    key={index}
                    className="flex items-center"
                    animation="fadeUp"
                    delay={900 + (index * 50)}
                  >
                    <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                    <div>
                      <span className="block text-sm">{item.label}</span>
                      <span className="block text-lg font-medium">{item.value}</span>
                    </div>
                  </ScrollAnimatedElement>
                ))}
              </div>
            </ScrollAnimatedElement>
          </ScrollAnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;