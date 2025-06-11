import React from 'react';
import { DownloadCloud, Coins } from 'lucide-react';

const Whitepaper = () => {
  return (
    <section id="whitepaper" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-10 animate-pulse" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            
            <a href="/AIRE Whitepaper 4.0 June 2025.pdf" download className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-white font-medium flex items-center">
              <DownloadCloud className="mr-2" size={20} />
              Download Whitepaper
            </a>
          </div>
          
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
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
                <div key={index} className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
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
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                    <div>
                      <span className="block text-sm">{item.label}</span>
                      <span className="block text-lg font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-400">AIRE Social: How to Earn $AIRE</h3>
            <p className="mb-4 text-gray-300">Physical + digital products + experiences = complete economy.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-blue-400 font-medium">Action:</p>
                <p className="flex items-center gap-2">📸 Post an original photo</p>
                <p className="flex items-center gap-2">🎥 Upload a video with high retention</p>
                <p className="flex items-center gap-2">✍️ Write a viral "whisper" (tweet-like)</p>
                <p className="flex items-center gap-2">❤️ Get likes from verified users</p>
                <p className="flex items-center gap-2">💬 Comment that adds value</p>
                <p className="flex items-center gap-2">🔁 Share your post on other networks</p>
                <p className="flex items-center gap-2">👥 Refer a new user</p>
                <p className="flex items-center gap-2">🎯 Post with +5% engagement</p>
                <p className="flex items-center gap-2">👑 Reach Top Creator of the day</p>
                <p className="flex items-center gap-2">📢 Provide useful feedback</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-blue-400 font-medium">Estimated revenue:</p>
                <p>+10 $AIRE</p>
                <p>+100 $AIRE</p>
                <p>+5 $AIRE</p>
                <p>+0.5 $AIRE</p>
                <p>+2 $AIRE</p>
                <p>+1 $AIRE</p>
                <p>+50 $AIRE</p>
                <p>+250 $AIRE</p>
                <p>+1000 $AIRE</p>
                <p>+10 $AIRE</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-300 font-medium">At AIRE Social, every post is an investment.</p>
              <p className="text-gray-300">Every view is an income.</p>
              <p className="text-gray-300">What was once vanity is now capital.</p>
              <p className="text-blue-400 font-medium mt-2">Welcome to the new standard: earn by being yourself!</p>
            </div>
          </div>

          <div className="backdrop-blur-md bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-400">AIRE Social: How to Spend $AIRE</h3>
            
            <div className="space-y-4">
              <div className="grid gap-4">
                <p className="text-blue-400 font-medium mb-2">Uses:</p>
                <p className="flex items-center gap-2">🚀 Promote content to more users</p>
                <p className="flex items-center gap-2">🧬 Access to premium features (AI, AI Studio)</p>
                <p className="flex items-center gap-2">📊 View advanced analytics for your posts</p>
                <p className="flex items-center gap-2">👥 Targeted advertising type AIRE Ads</p>
                <p className="flex items-center gap-2">🛠️ Post Automation</p>
                <p className="flex items-center gap-2">💡 Participate in DAO creative challenges</p>
                <p className="flex items-center gap-2">🎁 Gifts or Tips for other creators</p>
                <p className="flex items-center gap-2">👑 Buy PRO profile</p>
                <p className="flex items-center gap-2">🎨 Access to exclusive filters and effects</p>
                <p className="flex items-center gap-2">🛡️ AI content review and protection</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-400">AIRE Marketplace: How to Earn $AIRE</h3>
            <p className="mb-4 text-gray-300">Physical + digital products + experiences = complete economy.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-blue-400 font-medium">Action:</p>
                <p className="flex items-center gap-2">📦 Sell physical or digital products on the Marketplace</p>
                <p className="flex items-center gap-2">💸 Authorized dropshipping (with verified stock)</p>
                <p className="flex items-center gap-2">🛍️ Load your entire store and receive +1 AIRE for each active product (max. 100)</p>
                <p className="flex items-center gap-2">🧾 Receive positive feedback</p>
                <p className="flex items-center gap-2">🤝 Affiliate with creators to sell their products in your store</p>
                <p className="flex items-center gap-2">🎯 Your products are featured and receive clicks</p>
                <p className="flex items-center gap-2">📲 Sale with referral links</p>
                <p className="flex items-center gap-2">📢 Promote your products on external networks and get confirmed views</p>
                <p className="flex items-center gap-2">🧠 Activate smart selling (with AI recommendations)</p>
                <p className="flex items-center gap-2">🌱 Sell sustainable or socially impactful products</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-blue-400 font-medium">Estimated Revenue:</p>
                <p>+100 $AIRE/Sale</p>
                <p>+% over automatic sales</p>
                <p>+10 $AIRE per each 5 stars</p>
                <p>+10% commissions on $AIRE</p>
                <p>+0.1 $AIRE per interaction</p>
                <p>+15 $AIRE for each verified conversion</p>
                <p>+0.5 $AIRE per view</p>
                <p>+5% extra revenue in $AIRE</p>
                <p>+25 $AIRE per unit (DAO approved)</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-300 font-medium">At AIRE Marketplace, every sale isn't just revenue; it's reputation, community, and automatic growth.</p>
            </div>
          </div>

          <div className="backdrop-blur-md bg-gray-800 bg-opacity-30 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-400">AIRE Marketplace: How to Spend $AIRE</h3>
            <p className="mb-4 text-gray-300">Physical + digital products + experiences = complete economy.</p>
            
            <div className="space-y-4">
              <div className="grid gap-4">
                <p className="text-blue-400 font-medium mb-2">Uses:</p>
                <p className="flex items-center gap-2">🛒 Buy physical or digital products (with a discount for paying in AIRE)</p>
                <p className="flex items-center gap-2">📢 Promote your products via AIRE Ads (guaranteed clicks)</p>
                <p className="flex items-center gap-2">🎨 Professional design of your store customized by AI</p>
                <p className="flex items-center gap-2">🔐 Premium subscription for advanced statistics and top seller tags</p>
                <p className="flex items-center gap-2">🚚 Payment for logistics, shipping, and fulfillment with external integrations</p>
                <p className="flex items-center gap-2">🏷️ Creating NFTs as certificates of authenticity for physical products</p>
                <p className="flex items-center gap-2">🧑‍🏫 Hire other creators as ambassadors for your store</p>
                <p className="flex items-center gap-2">📊 Access to DAO market research on purchasing trends</p>
                <p className="flex items-center gap-2">🌍 Expand to new countries with local rates on AIRE</p>
                <p className="flex items-center gap-2">💬 AI-assisted customer service to answer queries in real time</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-300 font-medium">At AIRE Marketplace, every sale isn't just revenue: it's reputation, community, and automatic growth.</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Whitepaper;