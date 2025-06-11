import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  ShoppingBag, 
  Wallet, 
  Gamepad2, 
  VoteIcon, 
  Music,
  ArrowUpCircle,
  ArrowDownCircle,
  Bot,
  X,
  Heart,
  Megaphone,
  Brush,
  Building2,
  Briefcase
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  spendOptions: string[];
  earnOptions: string[];
  link?: string;
  onEarnClick?: () => void;
  onSpendClick?: () => void;
}

const EarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Social</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>📸 Post an original photo</span><span>+10 $AIRE</span></p>
          <p className="flex justify-between"><span>🎥 Upload a video with high retention</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>✍️ Write a viral "whisper" (tweet-like)</span><span>+5 $AIRE</span></p>
          <p className="flex justify-between"><span>❤️ Get likes from verified users</span><span>+0.5 $AIRE</span></p>
          <p className="flex justify-between"><span>💬 Comment that adds value (validated by AIRE)</span><span>+2 $AIRE</span></p>
          <p className="flex justify-between"><span>🔁 Share your post on other networks</span><span>+1 $AIRE</span></p>
          <p className="flex justify-between"><span>👥 Refer a new user</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🎯 Post with +5% engagement</span><span>+250 $AIRE</span></p>
          <p className="flex justify-between"><span>👑 Reach Top Creator of the day</span><span>+1000 $AIRE</span></p>
          <p className="flex justify-between"><span>📢 Provide useful feedback (Voted by DAO)</span><span>+10 $AIRE</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">At AIRE Social, every post is an investment.</p>
          <p className="text-gray-300">Every view is an income.</p>
          <p className="text-gray-300">What was once vanity is now capital.</p>
          <p className="text-blue-400 font-medium mt-2">Welcome to the new standard: earn by being yourself!</p>
        </div>
      </div>
    </div>
  </div>
);

const MarketplaceEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Marketplace</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>📦 Sell physical or digital products</span><span>+100 $AIRE/Sale</span></p>
          <p className="flex justify-between"><span>💸 Authorized dropshipping</span><span>+% over automatic sales</span></p>
          <p className="flex justify-between"><span>🛍️ Load your entire store</span><span>+10 $AIRE per 5 stars</span></p>
          <p className="flex justify-between"><span>🧾 Receive positive feedback</span><span>+10% commissions on $AIRE</span></p>
          <p className="flex justify-between"><span>🤝 Affiliate with creators</span><span>+0.1 $AIRE per interaction</span></p>
          <p className="flex justify-between"><span>🎯 Featured products with clicks</span><span>+15 $AIRE per conversion</span></p>
          <p className="flex justify-between"><span>📲 Sale with referral links</span><span>+0.5 $AIRE per view</span></p>
          <p className="flex justify-between"><span>📢 Promote on external networks</span><span>+5% extra revenue in $AIRE</span></p>
          <p className="flex justify-between"><span>🧠 Activate smart selling</span><span>+25 $AIRE per unit (DAO approved)</span></p>
          <p className="flex justify-between"><span>🌱 Sell sustainable products</span><span>—</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">At AIRE Marketplace, every sale isn't just revenue; it's reputation, community, and automatic growth.</p>
        </div>
      </div>
    </div>
  </div>
);

const SpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend on AIRE Social</h3>
      
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
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">You don't spend. You reinject.</p>
          <p className="text-gray-300">Your $AIR boosts your voice, multiplies your impact, and puts you in front of more eyes.</p>
          <p className="text-gray-300">Here, your investment is your exposure.</p>
        </div>
      </div>
    </div>
  </div>
);

const MarketplaceSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend AIRE on Marketplace</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">🛒 Buy products with AIRE discount</p>
          <p className="flex items-center gap-2">📢 Promote via AIRE Ads</p>
          <p className="flex items-center gap-2">🎨 Professional AI store design</p>
          <p className="flex items-center gap-2">🔐 Premium seller subscription</p>
          <p className="flex items-center gap-2">🚚 Logistics and shipping payments</p>
          <p className="flex items-center gap-2">🏷️ NFT certificates of authenticity</p>
          <p className="flex items-center gap-2">🧑‍🏫 Hire creator ambassadors</p>
          <p className="flex items-center gap-2">📊 Access DAO market research</p>
          <p className="flex items-center gap-2">🌍 Expand to new countries</p>
          <p className="flex items-center gap-2">💬 AI-assisted customer service</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">At AIRE Marketplace, every sale isn't just revenue: it's reputation, community, and automatic growth.</p>
        </div>
      </div>
    </div>
  </div>
);

// — New: AIRE Studio overlays with paired action/revenue lines —
const StudioEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Studio Creator</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>✂️ Edit video with AI and upload it</span><span>+50 AIRE</span></p>
          <p className="flex justify-between"><span>🧠 Create an AI Avatar that others can use</span><span>+250 AIRE</span></p>
          <p className="flex justify-between"><span>🎬 Create viral reels from templates</span><span>+20 AIRE</span></p>
          <p className="flex justify-between"><span>🧏 Subtitle videos with AI</span><span>+5 AIRE</span></p>
          <p className="flex justify-between"><span>🎧 Upload original music or sounds</span><span>+10 AIRE</span></p>
          <p className="flex justify-between"><span>🤳 Produce your own AI content</span><span>+100 AIRE</span></p>
          <p className="flex justify-between"><span>📲 Share directly to other networks</span><span>+15 AIRE</span></p>
          <p className="flex justify-between"><span>👥 Co-create with another user</span><span>+50 AIRE</span></p>
          <p className="flex justify-between"><span>🔄 Create viral loops or mashups</span><span>+25 AIRE</span></p>
          <p className="flex justify-between"><span>👑 Become Top Editor of the Month</span><span>+1500 AIRE</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">You don't need Hollywood. Just AIRE Studio and a killer idea.</p>
        </div>
      </div>
    </div>
  </div>
);

const StudioSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend AIRE on AIRE Studio Creator</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to spend $AIRE:</p>
          <p>🤖 Use AI Premium video editor</p>
          <p>🎙️ Synthesize custom voice</p>
          <p>🎥 Buy viral templates</p>
          <p>🧙 Access cinematic effects</p>
          <p>👯 Collaborations with elite creators</p>
          <p>📁 Save media in high quality</p>
          <p>💡 AI that suggests viral content</p>
          <p>🎚️ Automate post-production</p>
          <p>🔁 Publish multiple formats instantly</p>
          <p>🌍 Multi-platform distribution in 1 click</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">You don't need a team. Just your idea and AIRE Studio. Create, launch, and monetize while you sleep.</p>
        </div>
      </div>
    </div>
  </div>
);

// New overlays for AIRE Gamers
const GamersEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Gamers</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>🕹️ Play games integrated into AIRE for 1 hour/day</span><span>+10 $AIRE</span></p>
          <p className="flex justify-between"><span>🔄 Play, win, and stake rewards</span><span>+50 $AIRE per achievement</span></p>
          <p className="flex justify-between"><span>🏆 Complete achievements, missions, or tournaments</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>🎥 Stream your game + 100 views</span><span>+25 $AIRE per active gamer</span></p>
          <p className="flex justify-between"><span>🎁 Refer new gamers</span><span>+20 $AIRE</span></p>
          <p className="flex justify-between"><span>🎮 Link your Steam, Xbox, or PS account</span><span>+15 $AIRE</span></p>
          <p className="flex justify-between"><span>💬 Create viral gamer content (clips, memes)</span><span>+300 $AIRE/month</span></p>
          <p className="flex justify-between"><span>🧩 Be part of guilds or featured teams</span><span>+10 $AIRE/post</span></p>
          <p className="flex justify-between"><span>🎙️ Participate in gamer forums and discussions</span><span>+100 AIRE</span></p>
          <p className="flex justify-between"><span>👾 Early testing of AIRE Labs games</span><span>+% extra monthly</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Your hours in front of the screen are no longer wasted... they're transformed into digital power with AIRE GAMERS</p>
        </div>
      </div>
    </div>
  </div>
);

const GamersSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend AIRE on AIRE Gamers</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">🧠 Aesthetic improvements in games (skins, packs, etc.)</p>
          <p className="flex items-center gap-2">🎮 NFT items: weapons, maps, special access points</p>
          <p className="flex items-center gap-2">🛠️ Customize your gamer streaming space</p>
          <p className="flex items-center gap-2">🎟️ Tickets to tournaments, challenges, and AIRE Leagues</p>
          <p className="flex items-center gap-2">📢 Promoting your channel or clan</p>
          <p className="flex items-center gap-2">📊 Pro + comparative statistics with AI</p>
          <p className="flex items-center gap-2">🕵️ Strategic analysis of your games via AI</p>
          <p className="flex items-center gap-2">🧑‍🏫 Gamer mentorships</p>
          <p className="flex items-center gap-2">🖥️ Space rental for clans and tournaments</p>
          <p className="flex items-center gap-2">🔒 Guild Access NFTs: Exclusive Content</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Your hours in front of the screen are no longer wasted... they're transformed into digital power with AIRE GAMERS</p>
        </div>
      </div>
    </div>
  </div>
);

// New overlays for AIRE Wallet
const WalletEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn with AIRE Wallet</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>🎁 Daily activity rewards</span><span>+10 $AIRE</span></p>
          <p className="flex justify-between"><span>📥 Receive tips or donations</span><span>+varies</span></p>
          <p className="flex justify-between"><span>🤝 Complete DAO missions</span><span>+50-500 $AIRE</span></p>
          <p className="flex justify-between"><span>🧠 Participate in learning programs</span><span>+25 $AIRE</span></p>
          <p className="flex justify-between"><span>🪙 Staking = passive income</span><span>+% monthly</span></p>
          <p className="flex justify-between"><span>🫂 Receive AIRE for active referrals</span><span>+20 $AIRE</span></p>
          <p className="flex justify-between"><span>💼 Manage active communities</span><span>+100 $AIRE/month</span></p>
          <p className="flex justify-between"><span>📤 Participate in Airdrops</span><span>+varies</span></p>
          <p className="flex justify-between"><span>📦 Be a supplier in the marketplace</span><span>+% on sales</span></p>
          <p className="flex justify-between"><span>🧾 You earn cashback with every transaction</span><span>+2-5% back</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Your AIRE wallet doesn't hold crypto... it holds possibilities.</p>
        </div>
      </div>
    </div>
  </div>
);

const WalletSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend with AIRE Wallet</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">💳 Swap to USDT, BNB or other</p>
          <p className="flex items-center gap-2">🛍️ Buy products on Marketplace</p>
          <p className="flex items-center gap-2">🧠 Buy courses or mentoring</p>
          <p className="flex items-center gap-2">🎁 Give gifts to other creators</p>
          <p className="flex items-center gap-2">🔄 Stake to participate in DAO</p>
          <p className="flex items-center gap-2">💹 Invest in AIRE Life projects</p>
          <p className="flex items-center gap-2">📲 Acquire exclusive IA Tools</p>
          <p className="flex items-center gap-2">🛡️ Activate Web3 insurance or protections</p>
          <p className="flex items-center gap-2">🎫 Buy tickets to events</p>
          <p className="flex items-center gap-2">🔐 Access exclusive content</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Your AIRE wallet doesn't hold crypto... it holds possibilities.</p>
        </div>
      </div>
    </div>
  </div>
);

// Add these new overlay components after the existing overlays
const LifeEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Life</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>🌱 Propose projects with real impact</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>💡 Donate validated ideas and solutions</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🧠 Participate in community mentoring</span><span>+75 $AIRE</span></p>
          <p className="flex justify-between"><span>💬 Spread solidarity campaigns</span><span>+10 $AIRE</span></p>
          <p className="flex justify-between"><span>🤝 Refer real NGOs or foundations</span><span>+25 $AIRE</span></p>
          <p className="flex justify-between"><span>🔍 Audit project execution</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>📹 Create impactful content</span><span>+20 $AIRE</span></p>
          <p className="flex justify-between"><span>📈 Achieving project objectives</span><span>+500 $AIRE</span></p>
          <p className="flex justify-between"><span>🏆 Vote for causes that are funded</span><span>+5 $AIRE</span></p>
          <p className="flex justify-between"><span>👑 Be the catalyst of the month</span><span>+1,500 $AIRE</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">AIRE LIFE transforms every $AIRE into oxygen for those who need it most.</p>
        </div>
      </div>
    </div>
  </div>
);

const LifeSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend on AIRE Life</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">💳 Swap to USDT, BNB or other</p>
          <p className="flex items-center gap-2">🛍️ Buy products on Marketplace</p>
          <p className="flex items-center gap-2">🧠 Buy courses or mentoring</p>
          <p className="flex items-center gap-2">🎁 Give gifts to other creators</p>
          <p className="flex items-center gap-2">🔄 Stake to participate in DAO</p>
          <p className="flex items-center gap-2">💹 Invest in AIRE Life projects</p>
          <p className="flex items-center gap-2">📲 Acquire exclusive IA Tools</p>
          <p className="flex items-center gap-2">🛡️ Activate Web3 insurance or protections</p>
          <p className="flex items-center gap-2">🎫 Buy tickets to events</p>
          <p className="flex items-center gap-2">🔐 Access exclusive content</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Your AIRE wallet doesn't hold crypto... it holds possibilities.</p>
        </div>
      </div>
    </div>
  </div>
);

const DaoEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE DAO</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>🗳️ Vote on a DAO proposal</span><span>+5 AIRE</span></p>
          <p className="flex justify-between"><span>💬 Propose improvements to the ecosystem</span><span>+50 $AIRE (if approved)</span></p>
          <p className="flex justify-between"><span>📣 Start discussions with high engagement</span><span>+25 $AIRE</span></p>
          <p className="flex justify-between"><span>🧠 Participate in committees or working groups</span><span>+75 $AIRE</span></p>
          <p className="flex justify-between"><span>🛠️ Develop DAO tools</span><span>+500 $AIRE</span></p>
          <p className="flex justify-between"><span>👥 Refer new active members to the DAO</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🔍 Audit initiatives and report bugs</span><span>+30 $AIRE</span></p>
          <p className="flex justify-between"><span>📊 Create proposals with impact analysis</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>🤝 Create DAO-approved strategic alliances</span><span>+250 $AIRE</span></p>
          <p className="flex justify-between"><span>🏆 Become the top contributor of the month</span><span>+1,000 $AIRE</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Don't wait for someone to decide for you. With AIRE DAO, you are the architect of change.</p>
        </div>
      </div>
    </div>
  </div>
);

const DaoSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend on AIRE DAO</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">🎟️ Participate in exclusive votes</p>
          <p className="flex items-center gap-2">📚 Access DAO resources and workshops</p>
          <p className="flex items-center gap-2">🧠 Join PRO strategic groups</p>
          <p className="flex items-center gap-2">💼 Apply to DAO investment funds</p>
          <p className="flex items-center gap-2">🛡️ Reputation insurance (anti-penalty)</p>
          <p className="flex items-center gap-2">💬 Promote your DAO proposal</p>
          <p className="flex items-center gap-2">🔍 View advanced governance analytics</p>
          <p className="flex items-center gap-2">🤝 Stake to gain more voting power</p>
          <p className="flex items-center gap-2">🔓 Unlock advanced DAO features</p>
          <p className="flex items-center gap-2">🌍 Collaborate on global ecosystem missions</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Don't wait for someone to decide for you. With AIRE DAO, you are the architect of change.</p>
        </div>
      </div>
    </div>
  </div>
);

const MusicEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Music</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>🎶 Listen 1h/day with AI that validates real listening</span><span>+5 $AIRE</span></p>
          <p className="flex justify-between"><span>📈 Top 5 artists of the month you listen to</span><span>listener bonus</span></p>
          <p className="flex justify-between"><span>🔁 You share your playlist and it has +100 plays</span><span>+25 $AIRE</span></p>
          <p className="flex justify-between"><span>🧠 Curation: Create playlists highlighted by AI</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🛠️ Produce a song with AIRE's AI tools</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>🧬 You link music with NFT and it sells</span><span>royalties in $AIRE</span></p>
          <p className="flex justify-between"><span>👑 Be the most active listener of the week</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>🎧 Activate "audio explorer" mode and discover artists</span><span>+5 $AIRE</span></p>
          <p className="flex justify-between"><span>👑 Top stream artist of the month</span><span>+2,000 $AIRE</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">At AIRE Music you earn, produce, invest and live your musical passion.</p>
        </div>
      </div>
    </div>
  </div>
);

const MusicSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend on AIRE Music</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">🧠 Use AIRE Music PRO (mixing, mastering)</p>
          <p className="flex items-center gap-2">🛍️ Buy exclusive beats or samples</p>
          <p className="flex items-center gap-2">📢 Promote musical releases</p>
          <p className="flex items-center gap-2">🎤 Rent musical avatars</p>
          <p className="flex items-center gap-2">🎧 Create unique musical NFTs</p>
          <p className="flex items-center gap-2">📊 View your music metrics in real time</p>
          <p className="flex items-center gap-2">🧬 Participate in virtual concerts</p>
          <p className="flex items-center gap-2">📥 Buy song rights</p>
          <p className="flex items-center gap-2">🧱 Create sound space in AIRE Sonic</p>
          <p className="flex items-center gap-2">🎶 Join exclusive fan communities</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Your music isn't just heard. It's mined. It's shared. It becomes freedom.</p>
        </div>
      </div>
    </div>
  </div>
);

const PlayEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Play</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>🧠 Complete a course</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>🎓 Teach or upload your own course</span><span>+250 $AIRE</span></p>
          <p className="flex justify-between"><span>📜 AI-validated certifications</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🗣️ Participate in educational debates and forums</span><span>+10 $AIRE</span></p>
          <p className="flex justify-between"><span>📈 Upload your progress and views</span><span>+0.1 $AIRE/engagement</span></p>
          <p className="flex justify-between"><span>🎯 Recommend training</span><span>+20 $AIRE</span></p>
          <p className="flex justify-between"><span>🔄 Translate, adapt, or improve existing courses</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🎤 Live Mentorships</span><span>+500 $AIRE/Mentor</span></p>
          <p className="flex justify-between"><span>🧪 Real projects or solutions with social impact</span><span>+1000 $AIRE</span></p>
          <p className="flex justify-between"><span>🎮 Gamification: completing educational quests</span><span>+50 $AIRE/quest</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">At AIRE PLAY, learning isn't an expense. It's an investment that pays off every day.</p>
        </div>
      </div>
    </div>
  </div>
);

const PlaySpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend on AIRE Play</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">📘 Access to premium courses</p>
          <p className="flex items-center gap-2">📢 Promoting your course as a creator</p>
          <p className="flex items-center gap-2">🤖 Personalized AI for learning and feedback</p>
          <p className="flex items-center gap-2">🎓 Individual mentoring</p>
          <p className="flex items-center gap-2">🌐 AI translation of content into other languages</p>
          <p className="flex items-center gap-2">💼 Certifications + NFT badges</p>
          <p className="flex items-center gap-2">🔐 Private DAO knowledge clubs</p>
          <p className="flex items-center gap-2">🎙️ Organization of AIRE bootcamps</p>
          <p className="flex items-center gap-2">🏫 Spaces for DAO training</p>
          <p className="flex items-center gap-2">🎁 Micro-scholarships for students</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">At AIRE PLAY, learning isn't an expense. It's an investment that pays off every day.</p>
        </div>
      </div>
    </div>
  </div>
);

const BusinessEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Business</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>💼 Create a verified business profile</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🧩 Upload approved investment pitch</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>🎯 Achieving goals on the roadmap</span><span>+250 $AIRE</span></p>
          <p className="flex justify-between"><span>🧠 Sharing knowledge in Business DAO</span><span>+75 $AIRE</span></p>
          <p className="flex justify-between"><span>🤝 Match with another entrepreneur</span><span>+25 $AIRE</span></p>
          <p className="flex justify-between"><span>📢 Present at Demo Day</span><span>+500 $AIRE</span></p>
          <p className="flex justify-between"><span>👥 Refer active investors</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>📈 Publish growth metrics</span><span>+25 $AIRE</span></p>
          <p className="flex justify-between"><span>💬 Be validated by the PRO community</span><span>+75 $AIRE</span></p>
          <p className="flex justify-between"><span>🏆 Top Startup of the Month</span><span>+2,000 $AIRE</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Businesses that breathe air, breathe the future. Scale, connect, and transform.</p>
        </div>
      </div>
    </div>
  </div>
);

const BusinessSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend on AIRE Business</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">🧠 Access Business Hub premium</p>
          <p className="flex items-center gap-2">📊 Upload pitch to DAO investors</p>
          <p className="flex items-center gap-2">🎟️ Participate in networking events</p>
          <p className="flex items-center gap-2">🧠 Buy business mentoring</p>
          <p className="flex items-center gap-2">🏛️ Apply for DAO investment funds</p>
          <p className="flex items-center gap-2">🔁 Automate financial reporting</p>
          <p className="flex items-center gap-2">📈 Buy impact metrics analysis</p>
          <p className="flex items-center gap-2">📚 Access PRO scaling courses</p>
          <p className="flex items-center gap-2">💬 Advertise your business to the community</p>
          <p className="flex items-center gap-2">🤝 Get KYC and business certification</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Businesses that breathe air, breathe the future. Scale, connect, and transform.</p>
        </div>
      </div>
    </div>
  </div>
);

// Add these new overlay components after the existing overlays
const AdsEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Ads Engine</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>👀 View opt-in ads</span><span>+1 AIRE per full ad</span></p>
          <p className="flex justify-between"><span>🧠 Recommend brands</span><span>+20 AIRE per validated action</span></p>
          <p className="flex justify-between"><span>📝 Create sponsored content (IA approved)</span><span>+100 AIRE</span></p>
          <p className="flex justify-between"><span>📈 Your quality data is used</span><span>+25 AIRE/week</span></p>
          <p className="flex justify-between"><span>🧩 Gamification: completing interactive campaigns</span><span>+50 AIRE</span></p>
          <p className="flex justify-between"><span>🔁 Share external campaigns with your code</span><span>+% reward</span></p>
          <p className="flex justify-between"><span>📢 Product testing</span><span>+100 AIRE per feedback</span></p>
          <p className="flex justify-between"><span>🧑‍💻 AI Micro-Ad Creation</span><span>+25 AIRE/copy approved</span></p>
          <p className="flex justify-between"><span>🎥 Sponsored UGC Production</span><span>+150 AIRE/video</span></p>
          <p className="flex justify-between"><span>📣 Vote on which brands can advertise</span><span>+10 AIRE/vote</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Boost your brands, choose AIRE and earn every time more and more with your ADS.</p>
        </div>
      </div>
    </div>
  </div>
);

const AdsSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend on AIRE Ads Engine</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">📢 Create your advertising campaigns</p>
          <p className="flex items-center gap-2">🎯 Targeting by interests, region, and DAO network</p>
          <p className="flex items-center gap-2">🧠 Real-time AI optimization</p>
          <p className="flex items-center gap-2">📈 Advanced ROI metrics</p>
          <p className="flex items-center gap-2">🎥 Creative production via Studio IA</p>
          <p className="flex items-center gap-2">🛒 Cross-promotion on the Marketplace</p>
          <p className="flex items-center gap-2">👤 DAO reputation targeting</p>
          <p className="flex items-center gap-2">🔐 Exclusive campaigns for holders</p>
          <p className="flex items-center gap-2">📲 Interactive cross-platform ads</p>
          <p className="flex items-center gap-2">📚 Access to market and behavioral data</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">Advertising is no longer an expense. At AIRE Ads, it's a shared investment between brands and the community.</p>
        </div>
      </div>
    </div>
  </div>
);

// Add these new overlay components after the existing overlays
const SalesEarningsOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Earn on AIRE Sales</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-medium">How to earn $AIRE:</p>
          <p className="flex justify-between"><span>🤖 Crear un flujo de ventas con IA</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🎯 Close a sale using AIRE Closer</span><span>+100 $AIRE</span></p>
          <p className="flex justify-between"><span>📈 Send a personalized proposal</span><span>+25 $AIRE</span></p>
          <p className="flex justify-between"><span>👂 Use AI Listener to understand your customer</span><span>+15 $AIRE</span></p>
          <p className="flex justify-between"><span>📞 Have a call with IA Coach</span><span>+10 $AIRE</span></p>
          <p className="flex justify-between"><span>👥 Create a community of active leads</span><span>+100 AIRE</span></p>
          <p className="flex justify-between"><span>✉️ Create a converting email sequence</span><span>+50 $AIRE</span></p>
          <p className="flex justify-between"><span>🤝 Refer another closer</span><span>+250 $AIRE</span></p>
          <p className="flex justify-between"><span>🧠 Integrate external tools</span><span>+30 AIRE</span></p>
          <p className="flex justify-between"><span>🏆 Be the top seller of the month</span><span>+2.000 AIRE</span></p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">If you sell, you win. If you listen, you close. If you use AIRE, you multiply.</p>
        </div>
      </div>
    </div>
  </div>
);

const SalesSpendOverlay = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative border border-gray-700">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <X size={24} />
      </button>
      
      <h3 className="text-2xl font-bold mb-6">Spend on AIRE Sales</h3>
      
      <div className="space-y-4">
        <div className="grid gap-4">
          <p className="text-blue-400 font-medium mb-2">Uses:</p>
          <p className="flex items-center gap-2">🤖 Activate AIRE Closer Premium</p>
          <p className="flex items-center gap-2">🎤 Listen to calls and get AI feedback</p>
          <p className="flex items-center gap-2">🧠 Train your own pitch with AI Coach</p>
          <p className="flex items-center gap-2">🧩 Buy PRO funnel templates</p>
          <p className="flex items-center gap-2">📈 1-on-1 consulting with a top mentor</p>
          <p className="flex items-center gap-2">🔁 Automate lead follow-up</p>
          <p className="flex items-center gap-2">🔒 Access to high-value prospects</p>
          <p className="flex items-center gap-2">💡 Create funnels with one click</p>
          <p className="flex items-center gap-2">📊 Access predictive analytics</p>
          <p className="flex items-center gap-2">🛒 Buy smart traffic</p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-300 font-medium">If you sell, you win. If you listen, you close. If you use AIR, you multiply.</p>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradient,
  spendOptions,
  earnOptions,
  link,
  onEarnClick,
  onSpendClick
}) => {
  const [activeTab, setActiveTab] = useState<'spend' | 'earn' | null>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div 
      className={`group relative backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 bg-gray-800 bg-opacity-30 hover:bg-opacity-40 overflow-hidden ${link ? 'cursor-pointer' : ''} h-full flex flex-col`}
      onClick={handleClick}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${gradient}`}></div>
      
      <div className="relative z-10 flex-1 flex flex-col items-center text-center">
        <div className={`w-14 h-14 mb-6 flex items-center justify-center rounded-xl ${gradient}`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        <div className="flex space-x-2 mt-auto">
          { (onSpendClick || spendOptions.length > 0) && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onSpendClick) {
                  onSpendClick();
                } else {
                  setActiveTab(activeTab === 'spend' ? null : 'spend');
                }
              }}
              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                activeTab === 'spend'
                  ? 'bg-red-500 bg-opacity-20 text-red-400 border-red-500'
                  : 'bg-gray-700 bg-opacity-50 hover:bg-opacity-70 text-gray-300 hover:text-white'
              } border`}
            >
              <ArrowUpCircle size={16} className="mr-2" />
              Spend AIRE
            </button>
          )}

          { (onEarnClick || earnOptions.length > 0) && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onEarnClick) {
                  onEarnClick();
                } else {
                  setActiveTab(activeTab === 'earn' ? null : 'earn');
                }
              }}
              className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                activeTab === 'earn'
                  ? 'bg-green-500 bg-opacity-20 text-green-400 border-green-500'
                  : 'bg-gray-700 bg-opacity-50 hover:bg-opacity-70 text-gray-300 hover:text-white'
              } border`}
            >
              <ArrowDownCircle size={16} className="mr-2" />
              Earn AIRE
            </button>
          )}

          {link && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(link);
              }}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white transition-all duration-300 ml-2"
            >
              Explore Marketplace
            </button>
          )}
        </div>

        {activeTab && !onEarnClick && !onSpendClick && (
          <div className="mt-4 p-4 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-700">
            <ul className="space-y-2">
              {(activeTab === 'spend' ? spendOptions : earnOptions).map((option, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 rounded-full mr-2 bg-blue-500"></div>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const [showEarningsOverlay, setShowEarningsOverlay] = useState(false);
  const [showSpendOverlay, setShowSpendOverlay] = useState(false);
  const [showMarketplaceEarningsOverlay, setShowMarketplaceEarningsOverlay] = useState(false);
  const [showMarketplaceSpendOverlay, setShowMarketplaceSpendOverlay] = useState(false);
  const [showStudioEarningsOverlay, setShowStudioEarningsOverlay] = useState(false);
  const [showStudioSpendOverlay, setShowStudioSpendOverlay] = useState(false);
  const [showGamersEarningsOverlay, setShowGamersEarningsOverlay] = useState(false);
  const [showGamersSpendOverlay, setShowGamersSpendOverlay] = useState(false);
  const [showWalletEarningsOverlay, setShowWalletEarningsOverlay] = useState(false);
  const [showWalletSpendOverlay, setShowWalletSpendOverlay] = useState(false);
  const [showLifeEarningsOverlay, setShowLifeEarningsOverlay] = useState(false);
  const [showLifeSpendOverlay, setShowLifeSpendOverlay] = useState(false);
  const [showDaoEarningsOverlay, setShowDaoEarningsOverlay] = useState(false);
  const [showDaoSpendOverlay, setShowDaoSpendOverlay] = useState(false);
  const [showMusicEarningsOverlay, setShowMusicEarningsOverlay] = useState(false);
  const [showMusicSpendOverlay, setShowMusicSpendOverlay] = useState(false);
  const [showPlayEarningsOverlay, setShowPlayEarningsOverlay] = useState(false);
  const [showPlaySpendOverlay, setShowPlaySpendOverlay] = useState(false);
  const [showBusinessEarningsOverlay, setShowBusinessEarningsOverlay] = useState(false);
  const [showBusinessSpendOverlay, setShowBusinessSpendOverlay] = useState(false);
  const [showAdsEarningsOverlay, setShowAdsEarningsOverlay] = useState(false);
  const [showAdsSpendOverlay, setShowAdsSpendOverlay] = useState(false);
  const [showSalesEarningsOverlay, setShowSalesEarningsOverlay] = useState(false);
  const [showSalesSpendOverlay, setShowSalesSpendOverlay] = useState(false);

  const aireSales = {
    icon: <Bot size={24} color="white" />,
    title: "AIRE Sales",
    description: "Discover and integrate powerful AI agents for your business needs. Access a marketplace of specialized AI solutions built on the AIRE platform.",
    gradient: "bg-gradient-to-br from-indigo-500 to-violet-600",
    spendOptions: [
      "🤖 Activate AIRE Closer Premium",
      "🎤 Listen to calls and get AI feedback",
      "🧠 Train your own pitch with AI Coach",
      "🧩 Buy PRO funnel templates",
      "📈 1-on-1 consulting with a top mentor",
      "🔁 Automate lead follow-up",
      "🔒 Access to high-value prospects",
      "💡 Create funnels with one click",
      "📊 Access predictive analytics",
      "🛒 Buy smart traffic"
    ],
    earnOptions: [
      "🤖 Crear un flujo de ventas con IA — +50 $AIRE",
      "🎯 Close a sale using AIRE Closer — +100 $AIRE",
      "📈 Send a personalized proposal — +25 $AIRE",
      "👂 Use AI Listener to understand your customer — +15 $AIRE",
      "📞 Have a call with IA Coach — +10 $AIRE",
      "👥 Create a community of active leads — +100 AIRE",
      "✉️ Create a converting email sequence — +50 $AIRE",
      "🤝 Refer another closer — +250 $AIRE",
      "🧠 Integrate external tools — +30 AIRE",
      "🏆 Be the top seller of the month — +2.000 AIRE"
    ],
    onEarnClick: () => setShowSalesEarningsOverlay(true),
    onSpendClick: () => setShowSalesSpendOverlay(true),
    link: "/ai-marketplace"
  };

  const features = [
    {
      icon: <Users size={24} color="white" />,
      title: "AIRE Social",
      description: "A decentralized social platform where users own their data and content, rewarded with tokens for engagement and quality contributions.",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      spendOptions: [
        "🚀 Promote content to more users",
        "🧬 Access to premium features (AI, AI Studio)",
        "📊 View advanced analytics for your posts",
        "👥 Targeted advertising type AIRE Ads",
        "🛠️ Post Automation",
        "💡 Participate in DAO creative challenges",
        "🎁 Gifts or Tips for other creators",
        "👑 Buy PRO profile",
        "🎨 Access to exclusive filters and effects",
        "🛡️ AI content review and protection"
      ],
      earnOptions: [
        "📸 Post an original photo — +10 $AIRE",
        "🎥 Upload a video with high retention — +100 $AIRE",
        "✍️ Write a viral \"whisper\" (tweet-like) — +5 $AIRE",
        "❤️ Get likes from verified users — +0.5 $AIRE",
        "💬 Comment that adds value (validated by AIRE) — +2 $AIRE",
        "🔁 Share your post on other networks — +1 $AIRE",
        "👥 Refer a new user — +50 $AIRE",
        "🎯 Post with +5% engagement — +250 $AIRE",
        "👑 Reach Top Creator of the day — +1000 $AIRE",
        "📢 Provide useful feedback (Voted by DAO) — +10 $AIRE"
      ],
      onEarnClick: () => setShowEarningsOverlay(true),
      onSpendClick: () => setShowSpendOverlay(true),
    },
    {
      icon: <Heart size={24} color="white" />,
      title: "AIRE Life",
      description: "Transform your lifestyle with AI-powered health tracking, personalized wellness recommendations, and social fitness challenges.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600",
      spendOptions: [
        "💳 Swap to USDT, BNB or other",
        "🛍️ Buy products on Marketplace",
        "🧠 Buy courses or mentoring",
        "🎁 Give gifts to other creators",
        "🔄 Stake to participate in DAO",
        "💹 Invest in AIRE Life projects",
        "📲 Acquire exclusive IA Tools",
        "🛡️ Activate Web3 insurance or protections",
        "🎫 Buy tickets to events",
        "🔐 Access exclusive content"
      ],
      earnOptions: [
        "🌱 Propose projects with real impact — +100 $AIRE",
        "💡 Donate validated ideas and solutions — +50 $AIRE",
        "🧠 Participate in community mentoring — +75 $AIRE",
        "💬 Spread solidarity campaigns — +10 $AIRE",
        "🤝 Refer real NGOs or foundations — +25 $AIRE",
        "🔍 Audit project execution — +50 $AIRE",
        "📹 Create impactful content — +20 $AIRE",
        "📈 Achieving project objectives — +500 $AIRE",
        "🏆 Vote for causes that are funded — +5 $AIRE",
        "👑 Be the catalyst of the month — +1,500 $AIRE"
      ],
      onEarnClick: () => setShowLifeEarningsOverlay(true),
      onSpendClick: () => setShowLifeSpendOverlay(true)
    },
    {
      icon: <Megaphone size={24} color="white" />,
      title: "AIRE Ads Engine",
      description: "Revolutionary AI-driven advertising platform that optimizes campaign performance and targets the right audience with precision.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      spendOptions: [
        "📢 Create your advertising campaigns",
        "🎯 Targeting by interests, region, and DAO network",
        "🧠 Real-time AI optimization",
        "📈 Advanced ROI metrics",
        "🎥 Creative production via Studio IA",
        "🛒 Cross-promotion on the Marketplace",
        "👤 DAO reputation targeting",
        "🔐 Exclusive campaigns for holders",
        "📲 Interactive cross-platform ads",
        "📚 Access to market and behavioral data"
      ],
      earnOptions: [
        "👀 View opt-in ads — +1 AIRE per full ad",
        "🧠 Recommend brands — +20 AIRE per validated action",
        "📝 Create sponsored content (IA approved) — +100 AIRE",
        "📈 Your quality data is used — +25 AIRE/week",
        "🧩 Gamification: completing interactive campaigns — +50 AIRE",
        "🔁 Share external campaigns with your code — +% reward",
        "📢 Product testing — +100 AIRE per feedback",
        "🧑‍💻 AI Micro-Ad Creation — +25 AIRE/copy approved",
        "🎥 Sponsored UGC Production — +150 AIRE/video",
        "📣 Vote on which brands can advertise — +10 AIRE/vote"
      ],
      onEarnClick: () => setShowAdsEarningsOverlay(true),
      onSpendClick: () => setShowAdsSpendOverlay(true)
    },
    {
      icon: <Brush size={24} color="white" />,
      title: "AIRE Studio Creator",
      description: "Advanced creative suite powered by AI for content creators, designers, and artists to produce stunning digital content.",
      gradient: "bg-gradient-to-br from-pink-500 to-purple-600",
      spendOptions: [
        "🤖 Use AI Premium video editor",
        "🎙️ Synthesize custom voice",
        "🎥 Buy viral templates",
        "🧙 Access cinematic effects",
        "👯 Collaborations with elite creators",
        "📁 Save media in high quality",
        "💡 AI that suggests viral content",
        "🎚️ Automate post-production",
        "🔁 Publish multiple formats instantly",
        "🌍 Multi-platform distribution in 1 click"
      ],
      earnOptions: [
        "✂️ Edit video with AI and upload it — +50 AIRE",
        "🧠 Create an AI Avatar that others can use — +250 AIRE",
        "🎬 Create viral reels from templates — +20 AIRE",
        "🧏 Subtitle videos with AI — +5 AIRE",
        "🎧 Upload original music or sounds — +10 AIRE",
        "🤳 Produce your own AI content — +100 AIRE",
        "📲 Share directly to other networks — +15 AIRE",
        "👥 Co-create with another user — +50 AIRE",
        "🔄 Create viral loops or mashups — +25 AIRE",
        "👑 Become Top Editor of the Month — +1500 AIRE"
      ],
      onEarnClick: () => setShowStudioEarningsOverlay(true),
      onSpendClick: () => setShowStudioSpendOverlay(true)
    },
    {
      icon: <Building2 size={24} color="white" />,
      title: "AIRE Business",
      description: "Complete business solution integrating AI-powered tools for management, analytics, and customer engagement.",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      spendOptions: [
        "🧠 Access Business Hub premium",
        "📊 Upload pitch to DAO investors",
        "🎟️ Participate in networking events",
        "🧠 Buy business mentoring",
        "🏛️ Apply for DAO investment funds",
        "🔁 Automate financial reporting",
        "📈 Buy impact metrics analysis",
        "📚 Access PRO scaling courses",
        "💬 Advertise your business to the community",
        "🤝 Get KYC and business certification"
      ],
      earnOptions: [
        "💼 Create a verified business profile — +50 $AIRE",
        "🧩 Upload approved investment pitch — +100 $AIRE",
        "🎯 Achieving goals on the roadmap — +250 $AIRE",
        "🧠 Sharing knowledge in Business DAO — +75 $AIRE",
        "🤝 Match with another entrepreneur — +25 $AIRE",
        "📢 Present at Demo Day — +500 $AIRE",
        "👥 Refer active investors — +100 $AIRE",
        "📈 Publish growth metrics — +25 $AIRE",
        "💬 Be validated by the PRO community — +75 $AIRE",
        "🏆 Top Startup of the Month — +2,000 $AIRE"
      ],
      onEarnClick: () => setShowBusinessEarningsOverlay(true),
      onSpendClick: () => setShowBusinessSpendOverlay(true)
    },
    {
      icon: <ShoppingBag size={24} color="white" />,
      title: "AIRE Marketplace",
      description: "Buy, sell, and trade digital assets with no intermediaries. Featuring NFTs, virtual goods, and services with minimal fees.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      spendOptions: [
        "Purchase digital assets",
        "List premium items",
        "Access VIP auctions"
      ],
      earnOptions: [
        "Sell digital creations — +100 $AIRE",
        "Trade NFTs — +% over automatic sales",
        "Refer new users — +10 $AIRE per 5 stars"
      ],
      onEarnClick: () => setShowMarketplaceEarningsOverlay(true),
      onSpendClick: () => setShowMarketplaceSpendOverlay(true)
    },
    {
      icon: <Wallet size={24} color="white" />,
      title: "AIRE Wallet",
      description: "Secure, non-custodial wallet for storing, sending, and receiving AIRE tokens and other digital assets with multi-chain support.",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      spendOptions: [
        "💳 Swap to USDT, BNB or other",
        "🛍️ Buy products on Marketplace",
        "🧠 Buy courses or mentoring",
        "🎁 Give gifts to other creators",
        "🔄 Stake to participate in DAO",
        "💹 Invest in AIRE Life projects",
        "📲 Acquire exclusive IA Tools",
        "🛡️ Activate Web3 insurance or protections",
        "🎫 Buy tickets to events",
        "🔐 Access exclusive content"
      ],
      earnOptions: [
        "🎁 Daily activity rewards — +10 $AIRE",
        "📥 Receive tips or donations — +varies",
        "🤝 Complete DAO missions — +50-500 $AIRE",
        "🧠 Participate in learning programs — +25 $AIRE",
        "🪙 Staking = passive income — +% monthly",
        "🫂 Receive AIRE for active referrals — +20 $AIRE",
        "💼 Manage active communities — +100 $AIRE/month",
        "📤 Participate in Airdrops — +varies",
        "📦 Be a supplier in the marketplace — +% on sales",
        "🧾 You earn cashback with every transaction — +2-5% back"
      ],
      onEarnClick: () => setShowWalletEarningsOverlay(true),
      onSpendClick: () => setShowWalletSpendOverlay(true)
    },
    {
      icon: <Gamepad2 size={24} color="white" />,
      title: "AIRE Games",
      description: "Play-to-earn games built on blockchain technology where players can earn AIRE tokens while enjoying immersive gaming experiences.",
      gradient: "bg-gradient-to-br from-green-500 to-cyan-600",
      spendOptions: [
        "🧠 Aesthetic improvements in games (skins, packs, etc.)",
        "🎮 NFT items: weapons, maps, special access points",
        "🛠️ Customize your gamer streaming space",
        "🎟️ Tickets to tournaments, challenges, and AIRE Leagues",
        "📢 Promoting your channel or clan",
        "📊 Pro + comparative statistics with AI",
        "🕵️ Strategic analysis of your games via AI",
        "🧑‍🏫 Gamer mentorships",
        "🖥️ Space rental for clans and tournaments",
        "🔒 Guild Access NFTs: Exclusive Content"
      ],
      earnOptions: [
        "🕹️ Play games integrated into AIRE for 1 hour/day — +10 $AIRE",
        "🔄 Play, win, and stake rewards — +50 $AIRE per achievement",
        "🏆 Complete achievements, missions, or tournaments — +100 $AIRE",
        "🎥 Stream your game + 100 views — +25 $AIRE per active gamer",
        "🎁 Refer new gamers — +20 $AIRE",
        "🎮 Link your Steam, Xbox, or PS account — +15 $AIRE",
        "💬 Create viral gamer content (clips, memes) — +300 $AIRE/month",
        "🧩 Be part of guilds or featured teams — +10 $AIRE/post",
        "🎙️ Participate in gamer forums and discussions — +100 AIRE",
        "👾 Early testing of AIRE Labs games — +% extra monthly"
      ],
      onEarnClick: () => setShowGamersEarningsOverlay(true),
      onSpendClick: () => setShowGamersSpendOverlay(true)
    },
    {
      icon: <VoteIcon size={24} color="white" />,
      title: "AIRE DAO",
      description: "Decentralized governance system where token holders vote on platform changes, fund allocation, and future development directions.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
      spendOptions: [
        "🎟️ Participate in exclusive votes",
        "📚 Access DAO resources and workshops",
        "🧠 Join PRO strategic groups",
        "💼 Apply to DAO investment funds",
        "🛡️ Reputation insurance (anti-penalty)",
        "💬 Promote your DAO proposal",
        "🔍 View advanced governance analytics",
        "🤝 Stake to gain more voting power",
        "🔓 Unlock advanced DAO features",
        "🌍 Collaborate on global ecosystem missions"
      ],
      earnOptions: [
        "🗳️ Vote on a DAO proposal — +5 AIRE",
        "💬 Propose improvements to the ecosystem — +50 $AIRE (if approved)",
        "📣 Start discussions with high engagement — +25 $AIRE",
        "🧠 Participate in committees or working groups — +75 $AIRE",
        "🛠️ Develop DAO tools — +500 $AIRE",
        "👥 Refer new active members to the DAO — +50 $AIRE",
        "🔍 Audit initiatives and report bugs — +30 $AIRE",
        "📊 Create proposals with impact analysis — +100 $AIRE",
        "🤝 Create DAO-approved strategic alliances — +250 $AIRE",
        "🏆 Become the top contributor of the month — +1,000 $AIRE"
      ],
      onEarnClick: () => setShowDaoEarningsOverlay(true),
      onSpendClick: () => setShowDaoSpendOverlay(true)
    },
    {
      icon: <Music size={24} color="white" />,
      title: "AIRE Music",
      description: "Decentralized music platform connecting artists directly with fans, eliminating middlemen and enabling fair royalty distribution.",
      gradient: "bg-gradient-to-br from-pink-500 to-red-600",
      spendOptions: [
        "🧠 Use AIRE Music PRO (mixing, mastering)",
        "🛍️ Buy exclusive beats or samples",
        "📢 Promote musical releases",
        "🎤 Rent musical avatars",
        "🎧 Create unique musical NFTs",
        "📊 View your music metrics in real time",
        "🧬 Participate in virtual concerts",
        "📥 Buy song rights",
        "🧱 Create sound space in AIRE Sonic",
        "🎶 Join exclusive fan communities"
      ],
      earnOptions: [
        "🎶 Listen 1h/day with AI that validates real listening — +5 $AIRE",
        "📈 Top 5 artists of the month you listen to — listener bonus",
        "🔁 You share your playlist and it has +100 plays — +25 $AIRE",
        "🧠 Curation: Create playlists highlighted by AI — +50 $AIRE",
        "🛠️ Produce a song with AIRE's AI tools — +100 $AIRE",
        "🧬 You link music with NFT and it sells — royalties in $AIRE",
        "👑 Be the most active listener of the week — +100 $AIRE",
        "🎧 Activate \"audio explorer\" mode and discover artists — +5 $AIRE",
        "👑 Top stream artist of the month — +2,000 $AIRE"
      ],
      onEarnClick: () => setShowMusicEarningsOverlay(true),
      onSpendClick: () => setShowMusicSpendOverlay(true)
    },
    {
      icon: <Briefcase size={24} color="white" />,
      title: "AIRE Play",
      description: "Transform your daily life with AI-powered lifestyle management, personal development tracking, and social challenges.",
      gradient: "bg-gradient-to-br from-teal-500 to-emerald-600",
      spendOptions: [
        "📘 Access to premium courses",
        "📢 Promoting your course as a creator",
        "🤖 Personalized AI for learning and feedback",
        "🎓 Individual mentoring",
        "🌐 AI translation of content into other languages",
        "💼 Certifications + NFT badges",
        "🔐 Private DAO knowledge clubs",
        "🎙️ Organization of AIRE bootcamps",
        "🏫 Spaces for DAO training",
        "🎁 Micro-scholarships for students"
      ],
      earnOptions: [
        "🧠 Complete a course — +100 $AIRE",
        "🎓 Teach or upload your own course — +250 $AIRE",
        "📜 AI-validated certifications — +50 $AIRE",
        "🗣️ Participate in educational debates and forums — +10 $AIRE",
        "📈 Upload your progress and views — +0.1 $AIRE/engagement",
        "🎯 Recommend training — +20 $AIRE",
        "🔄 Translate, adapt, or improve existing courses — +50 $AIRE",
        "�� Live Mentorships — +500 $AIRE/Mentor",
        "🧪 Real projects or solutions with social impact — +1000 $AIRE",
        "🎮 Gamification: completing educational quests — +50 $AIRE/quest"
      ],
      onEarnClick: () => setShowPlayEarningsOverlay(true),
      onSpendClick: () => setShowPlaySpendOverlay(true)
    }
  ];
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {showEarningsOverlay && (
        <EarningsOverlay onClose={() => setShowEarningsOverlay(false)} />
      )}
      {showSpendOverlay && (
        <SpendOverlay onClose={() => setShowSpendOverlay(false)} />
      )}
      {showMarketplaceEarningsOverlay && (
        <MarketplaceEarningsOverlay onClose={() => setShowMarketplaceEarningsOverlay(false)} />
      )}
      {showMarketplaceSpendOverlay && (
        <MarketplaceSpendOverlay onClose={() => setShowMarketplaceSpendOverlay(false)} />
      )}
      {showStudioEarningsOverlay && (
        <StudioEarningsOverlay onClose={() => setShowStudioEarningsOverlay(false)} />
      )}
      {showStudioSpendOverlay && (
        <StudioSpendOverlay onClose={() => setShowStudioSpendOverlay(false)} />
      )}
      {showGamersEarningsOverlay && (
        <GamersEarningsOverlay onClose={() => setShowGamersEarningsOverlay(false)} />
      )}
      {showGamersSpendOverlay && (
        <GamersSpendOverlay onClose={() => setShowGamersSpendOverlay(false)} />
      )}
      {showWalletEarningsOverlay && (
        <WalletEarningsOverlay onClose={() => setShowWalletEarningsOverlay(false)} />
      )}
      {showWalletSpendOverlay && (
        <WalletSpendOverlay onClose={() => setShowWalletSpendOverlay(false)} />
      )}
      {showLifeEarningsOverlay && (
        <LifeEarningsOverlay onClose={() => setShowLifeEarningsOverlay(false)} />
      )}
      {showLifeSpendOverlay && (
        <LifeSpendOverlay onClose={() => setShowLifeSpendOverlay(false)} />
      )}
      {showDaoEarningsOverlay && (
        <DaoEarningsOverlay onClose={() => setShowDaoEarningsOverlay(false)} />
      )}
      {showDaoSpendOverlay && (
        <DaoSpendOverlay onClose={() => setShowDaoSpendOverlay(false)} />
      )}
      {showMusicEarningsOverlay && (
        <MusicEarningsOverlay onClose={() => setShowMusicEarningsOverlay(false)} />
      )}
      {showMusicSpendOverlay && (
        <MusicSpendOverlay onClose={() => setShowMusicSpendOverlay(false)} />
      )}
      {showPlayEarningsOverlay && (
        <PlayEarningsOverlay onClose={() => setShowPlayEarningsOverlay(false)} />
      )}
      {showPlaySpendOverlay && (
        <PlaySpendOverlay onClose={() => setShowPlaySpendOverlay(false)} />
      )}
      {showBusinessEarningsOverlay && (
        <BusinessEarningsOverlay onClose={() => setShowBusinessEarningsOverlay(false)} />
      )}
      {showBusinessSpendOverlay && (
        <BusinessSpendOverlay onClose={() => setShowBusinessSpendOverlay(false)} />
      )}
      {showAdsEarningsOverlay && (
        <AdsEarningsOverlay onClose={() => setShowAdsEarningsOverlay(false)} />
      )}
      {showAdsSpendOverlay && (
        <AdsSpendOverlay onClose={() => setShowAdsSpendOverlay(false)} />
      )}
      {showSalesEarningsOverlay && (
        <SalesEarningsOverlay onClose={() => setShowSalesEarningsOverlay(false)} />
      )}
      {showSalesSpendOverlay && (
        <SalesSpendOverlay onClose={() => setShowSalesSpendOverlay(false)} />
      )}
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[70%] bg-blue-900 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[70%] bg-purple-900 rounded-full filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the AIRE Ecosystem</h2>
          <p className="text-gray-400 text-lg">
            Our integrated suite of web4 products creates a complete digital ecosystem 
            powered by blockchain technology and the AIRE token.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard {...aireSales} />
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;