import React, { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  Coins, 
  Users, 
  Gamepad2,
  Music,
  ShoppingBag,
  MessageSquare,
  Wallet,
  Bot,
  TrendingUp,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
  buttonText?: string;
  buttonAction?: () => void;
  isEcosystem?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradient, 
  delay = 0, 
  buttonText,
  buttonAction,
  isEcosystem = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative backdrop-blur-sm bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 transition-all duration-500 ease-out hover:border-blue-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${isEcosystem ? 'min-h-[280px]' : ''}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${gradient} rounded-xl`}></div>
      
      <div className="relative z-10 h-full flex flex-col">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">{description}</p>
        
        {buttonText && buttonAction && (
          <button
            onClick={buttonAction}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 text-white font-medium flex items-center justify-center group/btn hover:scale-105"
          >
            {buttonText}
            <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ecosystemFeatures = [
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: 'AIRE Social',
      description: 'Decentralized social platform where content creation meets blockchain rewards. Earn AIRE tokens for engagement and quality content.',
      gradient: 'from-blue-500 to-cyan-600',
      buttonText: 'Launch Social',
      buttonAction: () => window.open('https://airesocial.com', '_blank')
    },
    {
      icon: <ShoppingBag className="text-white" size={24} />,
      title: 'AIRE Marketplace',
      description: 'Revolutionary e-commerce platform enabling seamless transactions with cryptocurrency integration and AI-powered recommendations.',
      gradient: 'from-purple-500 to-pink-600',
      buttonText: 'Visit Marketplace',
      buttonAction: () => window.open('/ai-marketplace', '_self')
    },
    {
      icon: <Wallet className="text-white" size={24} />,
      title: 'AIRE Wallet',
      description: 'Secure, user-friendly wallet supporting multiple cryptocurrencies with advanced DeFi features and cross-chain compatibility.',
      gradient: 'from-green-500 to-emerald-600',
      buttonText: 'Get Wallet',
      buttonAction: () => window.open('https://airewallet.com', '_blank')
    },
    {
      icon: <Gamepad2 className="text-white" size={24} />,
      title: 'AIRE Games',
      description: 'Play-to-earn gaming ecosystem with NFT integration, competitive tournaments, and blockchain-based asset ownership.',
      gradient: 'from-orange-500 to-red-600',
      buttonText: 'Play Games',
      buttonAction: () => window.open('https://airegames.com', '_blank')
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: 'AIRE DAO',
      description: 'Community-driven governance platform where token holders participate in ecosystem decisions and protocol upgrades.',
      gradient: 'from-indigo-500 to-purple-600',
      buttonText: 'Join DAO',
      buttonAction: () => window.open('https://airedao.com', '_blank')
    },
    {
      icon: <Music className="text-white" size={24} />,
      title: 'AIRE Music',
      description: 'Decentralized music streaming platform empowering artists with direct monetization and fan engagement through NFTs.',
      gradient: 'from-pink-500 to-rose-600',
      buttonText: 'Stream Music',
      buttonAction: () => window.open('https://airemusic.com', '_blank')
    },
    {
      icon: <Bot className="text-white" size={24} />,
      title: 'AIRE AI Studio',
      description: 'Advanced AI creation platform for building custom AI agents, chatbots, and automated workflows for businesses.',
      gradient: 'from-cyan-500 to-blue-600',
      buttonText: 'Create AI',
      buttonAction: () => window.open('https://aireai.com', '_blank')
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: 'AIRE Analytics',
      description: 'Comprehensive analytics dashboard providing insights across all AIRE platforms with real-time data visualization.',
      gradient: 'from-yellow-500 to-orange-600',
      buttonText: 'View Analytics',
      buttonAction: () => window.open('https://aireanalytics.com', '_blank')
    },
    {
      icon: <Globe className="text-white" size={24} />,
      title: 'AIRE Network',
      description: 'High-performance blockchain network optimized for DeFi, NFTs, and decentralized applications with low fees.',
      gradient: 'from-teal-500 to-green-600',
      buttonText: 'Explore Network',
      buttonAction: () => window.open('https://airenetwork.com', '_blank')
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'AIRE Security',
      description: 'Enterprise-grade security solutions including smart contract auditing, vulnerability assessment, and threat monitoring.',
      gradient: 'from-red-500 to-pink-600',
      buttonText: 'Security Suite',
      buttonAction: () => window.open('https://airesecurity.com', '_blank')
    },
    {
      icon: <Coins className="text-white" size={24} />,
      title: 'AIRE DeFi',
      description: 'Complete DeFi ecosystem with yield farming, liquidity pools, lending protocols, and automated market makers.',
      gradient: 'from-emerald-500 to-teal-600',
      buttonText: 'Enter DeFi',
      buttonAction: () => window.open('https://airedefi.com', '_blank')
    },
    {
      icon: <ExternalLink className="text-white" size={24} />,
      title: 'AIRE Bridge',
      description: 'Cross-chain bridge enabling seamless asset transfers between different blockchain networks with minimal fees.',
      gradient: 'from-violet-500 to-purple-600',
      buttonText: 'Use Bridge',
      buttonAction: () => window.open('https://airebridge.com', '_blank')
    }
  ];

  const coreFeatures = [
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'Lightning Fast',
      description: 'Built on cutting-edge blockchain technology for instant transactions and seamless user experience.',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: 'Ultra Secure',
      description: 'Military-grade encryption and advanced security protocols protect your assets and personal data.',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: <Globe className="text-white" size={24} />,
      title: 'Global Access',
      description: 'Accessible worldwide with multi-language support and compliance with international regulations.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Coins className="text-white" size={24} />,
      title: 'Token Economy',
      description: 'Comprehensive tokenomics with staking rewards, governance rights, and deflationary mechanisms.',
      gradient: 'from-green-500 to-cyan-600'
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-[30%] right-[15%] w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">AIRE Ecosystem</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Twelve interconnected platforms working together to create the most comprehensive web4 experience, 
            powered by blockchain technology and AI innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {ecosystemFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 100}
              buttonText={feature.buttonText}
              buttonAction={feature.buttonAction}
              isEcosystem={true}
            />
          ))}
        </div>

        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Technology</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Built on a foundation of cutting-edge technology, security, and user-centric design principles 
            that ensure reliability and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={1200 + (index * 100)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;