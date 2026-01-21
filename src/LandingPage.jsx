import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  EyeOff, 
  Zap, 
  ArrowRight, 
  Ghost, 
  Globe, 
  Cpu, 
  ChevronRight 
} from 'lucide-react';

const LandingPage = ({ onLaunch }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-white/5 backdrop-blur-md bg-zinc-950/50 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-zinc-100 to-zinc-400 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <Ghost size={20} className="text-zinc-900" />
            </div>
            <span className="font-bold text-xl tracking-tight">Ghost Protocol</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
            <a href="#governance" className="hover:text-white transition-colors">Governance</a>
          </div>

          <button 
            onClick={onLaunch}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-all active:scale-95"
          >
            <span>Launch App</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-32 max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            V2.4 LIVE ON MAINNET
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            Wealth without <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500">whispers.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
            The first institutional-grade privacy protocol for DeFi. Shield assets, earn yield, and automate inheritance—all without revealing your identity on-chain.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onLaunch}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2"
            >
              Enter Protocol <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2">
              View Documentation
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
        >
          {[
            { label: 'Total Value Shielded', value: '$420M+' },
            { label: 'Active Anonymity Set', value: '14,203' },
            { label: 'Zero-Knowledge Proofs', value: '1.2M' },
            { label: 'Audits Passed', value: '100%' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-3xl text-white font-light">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Features Grid */}
      <div id="features" className="relative z-10 py-32 bg-zinc-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-light mb-6">Complete Financial <span className="text-emerald-500">Invisibility</span></h2>
            <p className="text-zinc-400 max-w-xl text-lg">Our ZK-SNARK architecture ensures that your transaction history remains yours alone. No links. No traces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Shield}
              title="Shielded Vaults"
              desc="Deposit assets into the anonymity set. Break the on-chain link between your source wallet and your funds."
            />
            <FeatureCard 
              icon={Zap}
              title="Private Yield"
              desc="Earn 4-12% APY on your shielded assets through aggregated DeFi strategies, completely anonymously."
            />
            <FeatureCard 
              icon={EyeOff}
              title="Ghost Inheritance"
              desc="Set a 'Dead Man's Switch'. If you go inactive, your assets are cryptographically transferred to your heir."
            />
          </div>
        </div>
      </div>

      {/* Code Snippet / Tech Section */}
      <div className="py-32 relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono mb-6">
            <Cpu size={12} /> OPEN SOURCE INFRASTRUCTURE
          </div>
          <h2 className="text-4xl font-light mb-6">Trust No One. <br />Verify Everything.</h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Ghost Protocol is built on immutable smart contracts. The coordinator is decentralized, and the ZK-circuits are public.
          </p>
          <ul className="space-y-4">
            {['Non-custodial by design', 'Client-side proof generation', 'Relayer network for gas abstraction'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1 w-full">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative group">
            <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
              <span className="ml-auto text-xs text-zinc-600 font-mono">circuit.circom</span>
            </div>
            <pre className="font-mono text-sm text-zinc-400 overflow-x-auto">
              <code>
                <span className="text-purple-400">template</span> <span className="text-blue-400">Withdraw</span>() {'{'} <br/>
                {'  '}<span className="text-purple-400">signal input</span> root;<br/>
                {'  '}<span className="text-purple-400">signal input</span> nullifierHash;<br/>
                {'  '}<span className="text-zinc-500">// Verify Merkle Proof</span><br/>
                {'  '}component tree = MerkleTreeInclusionProof(20);<br/>
                {'  '}tree.leaf <span className="text-emerald-500">{'<=='}</span> hasher.commitment;<br/>
                {'  '}tree.root <span className="text-emerald-500">{'<=='}</span> root;<br/>
                {'}'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Ghost size={16} className="text-zinc-500" />
            <span className="text-zinc-500 font-medium">Ghost Protocol © 2024</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-emerald-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300">
    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-800 group-hover:border-emerald-500/30">
      <Icon size={24} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
    </div>
    <h3 className="text-xl font-medium mb-3 text-zinc-200 group-hover:text-white transition-colors">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-400 transition-colors">
      {desc}
    </p>
  </div>
);

export default LandingPage;