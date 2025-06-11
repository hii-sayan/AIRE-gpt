import React, { useState, useRef, useEffect } from 'react';
import { Search, Filter, Star, Download } from 'lucide-react';
import { ScrollAnimatedElement } from './ScrollAnimations';

interface AIAgent {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  downloads: number;
  category: string;
  tags: string[];
  gradient: string;
}

const AIMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All',
    'Productivity',
    'Analytics',
    'Customer Service',
    'Content Creation',
    'Development',
    'Social Media'
  ];

  const agents: AIAgent[] = [
    {
      id: '1',
      name: 'Social Media Assist Agent',
      description: 'Intelligent AI assistant that helps manage social media presence, schedule posts, analyze engagement metrics, and generate trending content ideas.',
      price: 30,
      rating: 4.9,
      downloads: 1500,
      category: 'Social Media',
      tags: ['Social Media', 'Content Management', 'Analytics'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: '2',
      name: 'CodeAssist Pro',
      description: 'AI-powered coding assistant that helps developers write better code faster with real-time suggestions and code analysis.',
      price: 50,
      rating: 4.8,
      downloads: 1200,
      category: 'Development',
      tags: ['Coding', 'Development', 'AI Assistant'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: '3',
      name: 'ContentGenius',
      description: 'Advanced content creation AI that generates engaging blog posts, social media content, and marketing copy.',
      price: 35,
      rating: 4.6,
      downloads: 850,
      category: 'Content Creation',
      tags: ['Content', 'Marketing', 'Writing'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: '4',
      name: 'DataInsight AI',
      description: 'Powerful analytics agent that transforms complex data into actionable insights with beautiful visualizations.',
      price: 75,
      rating: 4.9,
      downloads: 650,
      category: 'Analytics',
      tags: ['Analytics', 'Data Science', 'Business Intelligence'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: '5',
      name: 'TaskMaster',
      description: 'Personal productivity assistant that helps organize tasks, schedule meetings, and manage projects efficiently.',
      price: 25,
      rating: 4.7,
      downloads: 2100,
      category: 'Productivity',
      tags: ['Productivity', 'Task Management', 'Organization'],
      gradient: 'from-green-500 to-cyan-600'
    }
  ];

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory.toLowerCase() === 'all' || 
                          agent.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <ScrollAnimatedElement className="text-center mb-12" animation="fadeUp">
          <h1 className="text-4xl font-bold mb-4">AIRE Solutions Marketplace</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover powerful AI agents built to enhance your business capabilities. 
            Each agent is powered by cutting-edge AI technology.
          </p>
        </ScrollAnimatedElement>

        <ScrollAnimatedElement 
          className="flex flex-col md:flex-row gap-6 mb-8"
          animation="fadeUp"
          delay={200}
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search AI agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-opacity-70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, index) => (
            <ScrollAnimatedElement
              key={agent.id}
              animation="fadeUp"
              delay={300 + (index * 100)}
            >
              <div className="group relative backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${agent.gradient}`}></div>
                
                <div className="relative p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">{agent.name}</h3>
                    <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-blue-400 text-sm">
                      ${agent.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">{agent.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-800 bg-opacity-50 rounded-md text-sm text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Star className="text-yellow-500" size={16} />
                      <span>{agent.rating}</span>
                      <span className="text-gray-400">|</span>
                      <Download size={16} className="text-gray-400" />
                      <span>{agent.downloads}</span>
                    </div>
                    
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 hover:scale-105">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimatedElement>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIMarketplace;