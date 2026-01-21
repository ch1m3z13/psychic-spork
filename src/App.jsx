import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  Activity, 
  LayoutDashboard, 
  Landmark, 
  TrendingUp, 
  Users, 
  Settings, 
  LogOut, 
  Copy, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight, 
  RefreshCw,
  X,
  FileText,
  Key,
  ExternalLink,
  Clock,
  Anchor,
  Wallet
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Utility Components ---

const Tooltip = ({ children, text }) => (
  <div className="group relative flex items-center">
    {children}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-zinc-800 text-xs text-zinc-300 rounded border border-zinc-700 shadow-xl z-50 text-center pointer-events-none">
      {text}
      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-800"></div>
    </div>
  </div>
);

// Privacy Wrapper: Blurs content if privacy mode is on
const PrivateValue = ({ children, isPrivate, className = "" }) => {
  return (
    <span className={`${isPrivate ? 'blur-sm select-none' : ''} transition-all duration-300 ${className}`}>
      {children}
    </span>
  );
};

// Standard Button
const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, loading = false, icon: Icon }) => {
  const baseStyle = "flex items-center justify-center px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variants = {
    primary: "bg-zinc-100 hover:bg-white text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    accent: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20",
    danger: "bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20",
    ghost: "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
    outline: "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-900"
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled || loading}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <RefreshCw size={18} className="animate-spin mr-2" />
      ) : Icon ? (
        <Icon size={18} className="mr-2" />
      ) : null}
      {loading ? 'Processing...' : children}
    </button>
  );
};

// Input Field
const Input = ({ label, value, onChange, placeholder, type = "text", icon: Icon, rightElement }) => (
  <div className="space-y-2">
    {label && <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium ml-1">{label}</label>}
    <div className="relative group">
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-zinc-300 transition-colors">
          <Icon size={18} />
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-zinc-900/50 border border-zinc-800 text-zinc-200 rounded-lg py-3 ${Icon ? 'pl-10' : 'pl-4'} pr-4 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all font-mono text-sm placeholder:text-zinc-700`}
      />
      {rightElement && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {rightElement}
        </div>
      )}
    </div>
  </div>
);

// --- Page Components ---

// 1. DASHBOARD
const Dashboard = ({ privacyMode, setPrivacyMode }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Header Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6">
            <button 
              onClick={() => setPrivacyMode(!privacyMode)}
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {privacyMode ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <h3 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4 flex items-center gap-2">
            <Shield size={12} /> Total Shielded Balance
          </h3>
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-4xl md:text-5xl font-light text-zinc-100 tracking-tight font-mono">
              <PrivateValue isPrivate={privacyMode}>$2,845,109.52</PrivateValue>
            </span>
            <span className="px-2 py-0.5 rounded text-xs bg-emerald-500/10 text-emerald-500 font-mono">+4.2%</span>
          </div>
          <p className="text-zinc-500 text-sm">Equivalent to <PrivateValue isPrivate={privacyMode}>1,240.5 ETH</PrivateValue></p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="p-3 bg-zinc-800/50 w-fit rounded-lg mb-4 text-emerald-400">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase mb-1">Unrealized Yield</p>
              <p className="text-xl text-zinc-200 font-mono">
                <PrivateValue isPrivate={privacyMode}>+$12,402.00</PrivateValue>
              </p>
            </div>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div className="p-3 bg-zinc-800/50 w-fit rounded-lg mb-4 text-amber-400">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-zinc-500 text-xs uppercase mb-1">Pulse Check</p>
              <p className="text-xl text-zinc-200 font-mono">
                Active
              </p>
              <p className="text-xs text-zinc-600 mt-1">Next: 178 Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Log (Anonymized) */}
      <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/20">
        <div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
          <h3 className="text-zinc-400 text-sm font-medium">Recent Protocol Activity</h3>
          <span className="text-xs text-zinc-600 font-mono flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            ZK-CIRCUIT LIVE
          </span>
        </div>
        <div className="divide-y divide-zinc-800/50">
          {[
            { action: 'Yield Distribution', time: '2 hours ago', amount: '+$420.50', hash: '0x8a...9f2' },
            { action: 'Proof of Life Verification', time: '2 days ago', amount: '-', hash: '0x1b...3c4' },
            { action: 'Asset Shielding', time: '5 days ago', amount: '+$50,000.00', hash: '0x7d...2e1' },
          ].map((item, idx) => (
            <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-zinc-900/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-zinc-800 text-zinc-400">
                  {item.action.includes('Yield') ? <TrendingUp size={14} /> : 
                   item.action.includes('Life') ? <Activity size={14} /> : <Lock size={14} />}
                </div>
                <div>
                  <p className="text-sm text-zinc-300">{item.action}</p>
                  <p className="text-xs text-zinc-600 font-mono">{item.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-zinc-300 font-mono">
                  <PrivateValue isPrivate={privacyMode}>{item.amount}</PrivateValue>
                </p>
                <p className="text-xs text-zinc-600 font-mono">{item.hash}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// 2. VAULT (Deposit/Withdraw)
const Vault = () => {
  const [tab, setTab] = useState('deposit');
  
  // Deposit States
  const [amount, setAmount] = useState('');
  const [processing, setProcessing] = useState(false);
  const [zkNote, setZkNote] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState('USDC');

  // Withdraw States
  const [withdrawStep, setWithdrawStep] = useState('form'); // form, processing, success
  const [withdrawNote, setWithdrawNote] = useState('');
  const [recipient, setRecipient] = useState('');
  const [txHash, setTxHash] = useState(null);

  const handleDeposit = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setZkNote(`ghost-zk-snark-${Math.random().toString(36).substr(2, 9)}-secure-note`);
    }, 2000);
  };

  const handleWithdraw = () => {
    setWithdrawStep('processing');
    // Simulate ZK Proof generation (1.5s) then Relayer (1.5s)
    setTimeout(() => {
      setTxHash(`0x${Math.random().toString(36).substr(2, 40)}`);
      setWithdrawStep('success');
    }, 3000);
  };

  const resetWithdraw = () => {
    setWithdrawStep('form');
    setWithdrawNote('');
    setRecipient('');
    setTxHash(null);
  };

  const resetDeposit = () => {
    setZkNote(null);
    setAmount('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <div className="flex space-x-1 bg-zinc-900/50 p-1 rounded-xl border border-zinc-800 mb-8 w-fit mx-auto">
        <button 
          onClick={() => setTab('deposit')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${tab === 'deposit' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Deposit (Shield)
        </button>
        <button 
          onClick={() => setTab('withdraw')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${tab === 'withdraw' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Withdraw (Unshield)
        </button>
      </div>

      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
        {tab === 'deposit' ? (
          <>
            <div className="mb-8 text-center">
              <h2 className="text-xl font-light text-white mb-2">Shield Assets</h2>
              <p className="text-sm text-zinc-500">Funds enter the privacy pool and break on-chain linkage.</p>
            </div>

            {!zkNote ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium ml-1">Asset</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setSelectedAsset('USDC')}
                      className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${selectedAsset === 'USDC' ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400 ring-1 ring-emerald-500/20' : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700'}`}
                    >
                      <span className="font-bold">USDC</span>
                    </button>
                    <button 
                      onClick={() => setSelectedAsset('USDT')}
                      className={`flex items-center justify-center gap-2 p-4 rounded-xl border transition-all ${selectedAsset === 'USDT' ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400 ring-1 ring-emerald-500/20' : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700'}`}
                    >
                      <span className="font-bold">USDT</span>
                    </button>
                  </div>
                </div>

                <Input 
                  label="Amount" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00" 
                  rightElement={<span className="text-zinc-500 text-xs font-bold">{selectedAsset}</span>}
                />

                <div className="p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl flex gap-3">
                  <AlertTriangle className="text-amber-500 shrink-0" size={18} />
                  <p className="text-xs text-amber-200/70 leading-relaxed">
                    Once deposited, you will receive a <strong>Zero-Knowledge Note</strong>. This note is the ONLY way to withdraw your funds. If you lose it, the funds are lost forever. We cannot recover it for you.
                  </p>
                </div>

                <Button 
                  onClick={handleDeposit} 
                  loading={processing}
                  disabled={!amount}
                  className="w-full"
                  variant="primary"
                >
                  Generate Proof & Deposit
                </Button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Deposit Successful</h3>
                  <p className="text-zinc-500 text-sm">Save your ZK-Note securely.</p>
                </div>
                
                <div className="bg-black/50 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-emerald-400 break-all select-all relative group">
                  {zkNote}
                  <button className="absolute right-2 top-2 p-2 bg-zinc-800 text-zinc-400 rounded hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => navigator.clipboard.writeText(zkNote)}>
                    <Copy size={14} />
                  </button>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={resetDeposit}>Deposit More</Button>
                  <Button variant="primary" className="flex-1" onClick={resetDeposit}>I Have Saved It</Button>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <div className="space-y-6">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-light text-white mb-2">Withdraw Assets</h2>
              <p className="text-sm text-zinc-500">Redeem your ZK-Note to a fresh wallet via Relayer.</p>
            </div>
            
            {withdrawStep === 'form' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <Input 
                  label="ZK-Note" 
                  value={withdrawNote}
                  onChange={(e) => setWithdrawNote(e.target.value)}
                  placeholder="Paste your secure note here..." 
                  icon={Key}
                />

                <Input 
                  label="Recipient Address" 
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="0x..." 
                  icon={Users}
                  rightElement={
                    <Tooltip text="For maximum privacy, use a wallet address that has 0 transactions.">
                      <Shield size={14} className="text-emerald-500 cursor-help" />
                    </Tooltip>
                  }
                />

                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                   <div className="flex justify-between text-sm mb-2">
                     <span className="text-zinc-500">Relayer Fee</span>
                     <span className="text-zinc-300">0.05%</span>
                   </div>
                   <div className="flex justify-between text-sm">
                     <span className="text-zinc-500">Estimated Gas</span>
                     <span className="text-zinc-300">Included (Relayer)</span>
                   </div>
                </div>

                <Button 
                  className="w-full" 
                  variant="primary" 
                  onClick={handleWithdraw}
                  disabled={!withdrawNote || !recipient}
                >
                  Initiate Withdrawal
                </Button>
              </motion.div>
            )}

            {withdrawStep === 'processing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex flex-col items-center text-center">
                 <RefreshCw size={48} className="text-emerald-500 animate-spin mb-6" />
                 <h3 className="text-white text-lg font-medium mb-2">Relaying Transaction</h3>
                 <div className="space-y-2">
                   <p className="text-zinc-500 text-sm font-mono animate-pulse">Verifying Zero-Knowledge Proof...</p>
                   <p className="text-zinc-600 text-xs font-mono">Obscuring origin source...</p>
                 </div>
              </motion.div>
            )}

            {withdrawStep === 'success' && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Withdrawal Complete</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-xs mx-auto">
                  Assets have been successfully transferred to the recipient address. No on-chain link exists between the depositor and the recipient.
                </p>
                
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg mb-6 flex items-center justify-between">
                   <div className="text-left">
                     <p className="text-xs text-zinc-500 uppercase">Transaction Hash</p>
                     <p className="text-sm font-mono text-emerald-500 truncate w-48">{txHash}</p>
                   </div>
                   <a href="#" className="text-zinc-400 hover:text-white p-2">
                     <ExternalLink size={16} />
                   </a>
                </div>

                <Button className="w-full" variant="outline" onClick={resetWithdraw}>Close</Button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// 3. YIELD
const Yield = ({ privacyMode }) => {
  const [enabled, setEnabled] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-end mb-6">
        <div>
           <h2 className="text-2xl font-light text-white mb-1">Private Yield</h2>
           <p className="text-sm text-zinc-500">Aggregated DeFi exposure without wallet linkage.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-sm ${enabled ? 'text-emerald-500' : 'text-zinc-500'}`}>{enabled ? 'Active' : 'Paused'}</span>
          <button 
            onClick={() => setEnabled(!enabled)}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${enabled ? 'bg-emerald-500/20' : 'bg-zinc-800'}`}
          >
            <div className={`w-4 h-4 rounded-full bg-current transition-transform ${enabled ? 'translate-x-6 text-emerald-500' : 'translate-x-0 text-zinc-500'}`} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
           <div className="flex items-center justify-between mb-8">
             <div>
               <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Current Strategy</p>
               <h3 className="text-xl text-zinc-200">Aave V3 Aggregation (USDC)</h3>
             </div>
             <div className="text-right">
               <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Net APY</p>
               <h3 className="text-4xl font-light text-emerald-400 font-mono">4.82%</h3>
             </div>
           </div>
           
           <div className="h-48 flex items-end justify-between gap-2">
             {[35, 42, 45, 40, 55, 60, 58, 62, 65, 59, 70, 72].map((h, i) => (
               <div key={i} className="w-full bg-zinc-800/50 hover:bg-emerald-500/20 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-xs px-2 py-1 rounded border border-zinc-800">
                   {4 + (h/100)}%
                 </div>
               </div>
             ))}
           </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Yield Earned</p>
            <p className="text-2xl text-zinc-200 font-mono mb-4">
              <PrivateValue isPrivate={privacyMode}>$12,402.00</PrivateValue>
            </p>
            <div className="text-xs text-zinc-500 space-y-2">
              <p>• Auto-compounding daily</p>
              <p>• No tax harvesting logic applied</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-20">
               <Shield size={64} />
             </div>
             <h4 className="text-white font-medium mb-2 relative z-10">How is this private?</h4>
             <p className="text-xs text-zinc-500 leading-relaxed relative z-10">
               Your funds are pooled with thousands of others in the main contract. The contract interacts with Aave as a single entity ("The Whale"). Aave never sees your address, only the protocol's address.
             </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 4. INHERITANCE (Ghost Protocol)
const Inheritance = () => {
  const [pulseActive, setPulseActive] = useState(true);
  const [showHeirDetails, setShowHeirDetails] = useState(false);
  
  // Configuration State
  const [thresholdDays, setThresholdDays] = useState(180); // The active threshold
  const [pendingThreshold, setPendingThreshold] = useState(180); // Slider value
  
  // Timer State
  const [lastPingTime, setLastPingTime] = useState(Date.now() - (2 * 24 * 60 * 60 * 1000)); // Default: 2 days ago
  const [now, setNow] = useState(Date.now());
  
  // Heir State
  const [heirAddress, setHeirAddress] = useState('0x71C...9e21');
  const [heirEmail, setHeirEmail] = useState('');
  const [heirDesignated, setHeirDesignated] = useState(false);
  const [designating, setDesignating] = useState(false);

  // Update timer every second
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate Time Remaining
  const msPerDay = 24 * 60 * 60 * 1000;
  const unlockTime = lastPingTime + (thresholdDays * msPerDay);
  const diff = Math.max(0, unlockTime - now);

  const daysLeft = Math.floor(diff / msPerDay);
  const hours = Math.floor((diff % msPerDay) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  const formattedTime = `${hours}h ${minutes}m ${seconds}s`;

  // Pulse animation for the heart
  const pulseVariant = {
    beat: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handlePing = () => {
    setPulseActive(false);
    // Simulate verification delay
    setTimeout(() => {
        setLastPingTime(Date.now());
        setPulseActive(true);
    }, 1000);
  };

  const handleDesignateHeir = () => {
    setDesignating(true);
    setTimeout(() => {
        setHeirDesignated(true);
        setDesignating(false);
    }, 1500);
  };

  const handleUpdateConfig = () => {
      setThresholdDays(pendingThreshold);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-light text-white mb-1">Ghost Protocol</h2>
            <p className="text-sm text-zinc-500">Zero-knowledge inheritance and dead man's switch.</p>
          </div>
        </div>

        {/* Section 1: Heartbeat */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="relative flex flex-col items-center">
            <div className="relative mb-4">
              <motion.div 
                  variants={pulseVariant}
                  animate="beat"
                  className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
              />
              <div className="w-32 h-32 rounded-full border-4 border-zinc-800 flex items-center justify-center bg-zinc-950 relative z-10">
                  <div className="text-center">
                  <span className="block text-2xl font-mono text-emerald-500">{daysLeft}</span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">Days Left</span>
                  </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
              <Clock size={12} className="text-emerald-500"/>
              {formattedTime}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg text-white font-medium mb-2">Proof of Life Status: <span className="text-emerald-500">Active</span></h3>
            <p className="text-sm text-zinc-500 mb-6 max-w-md">
              You must ping the contract before the timer expires. Failure to do so will unlock the encrypted key for your heir.
            </p>
            <Button 
              variant="outline" 
              icon={Activity}
              onClick={handlePing}
            >
              {pulseActive ? "Ping Contract (I Am Alive)" : "Verifying..."}
            </Button>
          </div>
        </div>

        {/* Section 2: Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white font-medium mb-6 flex items-center gap-2">
              <Users size={18} className="text-zinc-500"/> Beneficiary
            </h3>
            
            <div className="space-y-4">
              <Input 
                label="Heir Wallet Address" 
                value={heirAddress}
                onChange={(e) => setHeirAddress(e.target.value)}
              />
              <Input 
                label="Notification Email (Optional)" 
                placeholder="heir@email.com" 
                value={heirEmail}
                onChange={(e) => setHeirEmail(e.target.value)}
                type="email"
              />

              {heirDesignated ? (
                  <div className="space-y-2 animate-in fade-in">
                      <div className="w-full flex items-center justify-center gap-2 p-3 bg-emerald-500/10 text-emerald-500 rounded-lg border border-emerald-500/20 text-sm font-medium">
                          <CheckCircle size={16} /> Heir Designated Successfully
                      </div>
                      <button 
                          onClick={() => setShowHeirDetails(true)}
                          className="w-full text-center text-xs text-zinc-500 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4 flex items-center justify-center gap-1"
                      >
                          View Beneficiary Details <ArrowRight size={10} />
                      </button>
                  </div>
              ) : (
                  <Button 
                      variant="primary" 
                      className="w-full" 
                      onClick={handleDesignateHeir}
                      loading={designating}
                      disabled={!heirAddress}
                  >
                      Designate Heir
                  </Button>
              )}
              
              <div className="p-3 bg-zinc-800/50 rounded border border-zinc-700/50 mt-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  <Lock size={12} className="inline mr-1 mb-0.5" />
                  The access key will be encrypted using this wallet's public key. Only the holder of the corresponding private key can decrypt it.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white font-medium mb-6 flex items-center gap-2">
              <Settings size={18} className="text-zinc-500"/> Protocol Parameters
            </h3>

            <div className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-zinc-500 font-medium block mb-3">Inactivity Threshold</label>
                <input 
                  type="range" 
                  min="30" 
                  max="365" 
                  step="30" 
                  value={pendingThreshold}
                  onChange={(e) => setPendingThreshold(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" 
                />
                <div className="flex justify-between text-xs text-zinc-500 mt-2 font-mono">
                  <span>30 Days</span>
                  <span className="text-emerald-500 font-bold">{pendingThreshold} Days</span>
                  <span>365 Days</span>
                </div>
              </div>
              
              <Button 
                  className="w-full mt-8" 
                  variant="accent"
                  onClick={handleUpdateConfig}
              >
                  Update Configuration
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Heir Details Modal */}
      <AnimatePresence>
        {showHeirDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowHeirDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl w-full max-w-sm shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowHeirDetails(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white"
              >
                <X size={18} />
              </button>
              
              <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                <Users size={18} className="text-emerald-500"/> Heir Details
              </h3>
              
              <div className="space-y-4">
                <div>
                   <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Wallet Address</p>
                   <div className="bg-black/40 border border-zinc-800 p-3 rounded-lg font-mono text-sm text-zinc-300 break-all">
                     {heirAddress}
                   </div>
                </div>
                
                {heirEmail && (
                  <div>
                     <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Notification Email</p>
                     <div className="bg-black/40 border border-zinc-800 p-3 rounded-lg font-mono text-sm text-zinc-300">
                       {heirEmail}
                     </div>
                  </div>
                )}

                <div className="pt-2">
                   <div className="flex items-center gap-2 text-xs text-emerald-500 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                     <CheckCircle size={12} />
                     <span>Public Key Successfully Registered</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// 5. FIRST MATE (Heir Claim Portal)
const FirstMate = ({ onReturn }) => {
  const [scanStatus, setScanStatus] = useState('scanning'); // scanning, found, none
  const [claimStep, setClaimStep] = useState('locked'); // locked, decrypted, success
  const [freshWallet, setFreshWallet] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [txHash, setTxHash] = useState(null);

  useEffect(() => {
    // Simulate scanning for vaults
    const timer = setTimeout(() => {
      setScanStatus('found');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDecrypt = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setClaimStep('decrypted');
    }, 1500);
  };

  const handleClaim = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setClaimStep('success');
      setTxHash(`0x${Math.random().toString(36).substr(2, 40)}`);
    }, 2500);
  };

  if (scanStatus === 'scanning') {
    return (
      <div className="flex flex-col items-center justify-center py-24 animate-in fade-in duration-700">
        <RefreshCw size={48} className="text-emerald-500 animate-spin mb-8" />
        <h2 className="text-xl text-white font-light mb-2">Scanning Protocol Ledger</h2>
        <p className="text-zinc-500 text-sm">Searching for vaults keyed to your address...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-xl mx-auto pt-4"
    >
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
        
        <div className="p-8 text-center relative z-10">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
            <Unlock size={48} className="text-emerald-500 relative z-10" />
          </div>

          <h2 className="text-2xl text-white font-light mb-2">Inheritance Protocol Activated</h2>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-sm mx-auto">
            A time-locked asset vault has expired. You are recognized as the designated beneficiary.
          </p>

          <AnimatePresence mode="wait">
            {claimStep === 'locked' && (
              <motion.div
                key="locked"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 mb-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText size={16} className="text-zinc-500" />
                    <span className="text-sm text-zinc-300">Encrypted Package Found</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 w-full h-full animate-pulse"></div>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2 font-mono">Size: 256 bytes • Encryption: RSA-4096</p>
                </div>
                
                <Button 
                  className="w-full" 
                  variant="primary" 
                  onClick={handleDecrypt}
                  loading={isProcessing}
                >
                  Decrypt Private Key
                </Button>
              </motion.div>
            )}

            {claimStep === 'decrypted' && (
              <motion.div
                key="decrypted"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-left"
              >
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-emerald-400 mb-1">Decryption Successful</h4>
                    <p className="text-xs text-emerald-200/70 leading-relaxed">
                      You now hold the "Dead Man's Note". You can withdraw the assets.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <Input 
                    label="Destination Address (Fresh Wallet)" 
                    placeholder="0x..." 
                    value={freshWallet}
                    onChange={(e) => setFreshWallet(e.target.value)}
                    icon={Users}
                    rightElement={
                      <Tooltip text="For maximum privacy, DO NOT use your current wallet. Withdraw to a brand new address with 0 history.">
                        <Shield size={14} className="text-emerald-500 cursor-help" />
                      </Tooltip>
                    }
                  />
                  <div className="p-3 bg-zinc-800/30 rounded border border-zinc-800 text-xs text-zinc-500">
                    Warning: Withdrawing to an active wallet may link your identity to the deceased.
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  variant="primary"
                  onClick={handleClaim}
                  disabled={!freshWallet}
                  loading={isProcessing}
                >
                  Initiate Transfer
                </Button>
              </motion.div>
            )}

            {claimStep === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Assets Transferred</h3>
                <p className="text-zinc-400 text-sm mb-6 max-w-xs mx-auto">
                  The vault has been liquidated and funds sent to the fresh wallet.
                </p>
                
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg mb-6 flex items-center justify-between text-left">
                   <div>
                     <p className="text-xs text-zinc-500 uppercase">Transaction Hash</p>
                     <p className="text-sm font-mono text-emerald-500 truncate w-48">{txHash}</p>
                   </div>
                   <ExternalLink size={16} className="text-zinc-500" />
                </div>

                <Button className="w-full" variant="outline" onClick={onReturn}>Return to Dashboard</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// 6. CONNECT WALLET VIEW
const ConnectWalletView = ({ onConnect }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate wallet connection delay
    setTimeout(() => {
      onConnect();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-900/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-zinc-800/5 rounded-full blur-[120px]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl relative z-10 text-center"
      >
         <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
               <div className="w-8 h-8 bg-zinc-950 rounded-md rotate-45"></div>
            </div>
         </div>
         
         <h1 className="text-3xl font-light text-white mb-2 tracking-tight">GHOST PROTOCOL</h1>
         <p className="text-zinc-500 text-sm mb-10">Zero-Knowledge Private Wealth Management</p>

         <div className="space-y-4">
            <button 
              onClick={handleConnect}
              disabled={isConnecting}
              className="w-full flex items-center justify-between px-6 py-4 bg-zinc-100 hover:bg-white text-zinc-950 rounded-xl font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              <div className="flex items-center gap-3">
                {isConnecting ? <RefreshCw size={20} className="animate-spin" /> : <Wallet size={20} />}
                <span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
              </div>
              {!isConnecting && <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />}
            </button>
            
            <div className="px-6 py-3 border border-zinc-800 rounded-xl text-xs text-zinc-500 flex items-center justify-center gap-2">
               <Shield size={12} className="text-emerald-500" />
               <span>End-to-End Encrypted Session</span>
            </div>
         </div>
      </motion.div>
      
      <p className="absolute bottom-8 text-zinc-600 text-xs font-mono">
        v2.4.0 • ZK-SNARK COMPLIANT
      </p>
    </div>
  );
};

// --- Main Layout ---

export default function GhostProtocolApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [privacyMode, setPrivacyMode] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  // Nav Item Component
  const NavItem = ({ id, icon: Icon, label, indent = false }) => (
    <button 
      onClick={() => { setActiveTab(id); setSidebarOpen(false); }}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
        activeTab === id 
          ? 'bg-zinc-800 text-white shadow-lg shadow-black/20' 
          : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
      } ${indent ? 'pl-8' : ''}`}
    >
      <Icon size={indent ? 16 : 20} className={activeTab === id ? 'text-emerald-500' : 'text-zinc-600'} />
      <span className={`font-medium text-sm tracking-wide ${indent ? 'text-xs uppercase tracking-widest' : ''}`}>{label}</span>
      {activeTab === id && !indent && (
        <motion.div layoutId="activeIndicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />
      )}
    </button>
  );

  if (!isConnected) {
    return <ConnectWalletView onConnect={() => setIsConnected(true)} />;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-emerald-900 selection:text-emerald-200 flex">
      
      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-zinc-950 border-r border-zinc-900 z-40 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-8 flex items-center gap-3 mb-8">
           <div className="w-8 h-8 bg-zinc-100 rounded flex items-center justify-center">
             <div className="w-4 h-4 bg-zinc-950 rounded-sm rotate-45"></div>
           </div>
           <h1 className="text-lg font-bold tracking-tight text-white">GHOST PROTOCOL</h1>
        </div>

        <nav className="px-4 space-y-2">
          <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem id="vault" icon={Landmark} label="Vault" />
          <NavItem id="yield" icon={TrendingUp} label="Private Yield" />
          <NavItem id="inheritance" icon={Users} label="Inheritance" />
          <NavItem id="firstmate" icon={Anchor} label="First Mate" />
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-4 space-y-2">
          <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-900">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
               <span className="text-xs text-zinc-400">Relayer Online</span>
             </div>
             <p className="text-[10px] text-zinc-600 font-mono">Gas Tank: 4.2 ETH</p>
          </div>
          <button 
            onClick={() => setIsConnected(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-400 transition-colors"
          >
            <LogOut size={18} />
            <span className="text-sm font-medium">Disconnect</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 relative">
        {/* Mobile Header */}
        <div className="lg:hidden p-4 border-b border-zinc-900 flex justify-between items-center sticky top-0 bg-zinc-950/80 backdrop-blur z-30">
          <span className="font-bold text-sm">GHOST PROTOCOL</span>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 text-zinc-400">
            {isSidebarOpen ? <X size={24} /> : <div className="space-y-1.5"><div className="w-6 h-0.5 bg-current"></div><div className="w-6 h-0.5 bg-current"></div></div>}
          </button>
        </div>

        <div className="p-4 md:p-10 lg:p-12 max-w-5xl mx-auto">
          {/* Header Area */}
          <header className="mb-12 flex justify-between items-end">
             <div>
               <h2 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-1">
                 {activeTab}
               </h2>
               <h1 className="text-2xl font-light text-white capitalize">
                 {activeTab === 'firstmate' ? 'First Mate (Heir Access)' : activeTab.replace('-', ' ')}
               </h1>
             </div>
             <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 rounded-full border border-zinc-800">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-mono text-zinc-400">0x71...9e21</span>
                </div>
             </div>
          </header>

          {/* View Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'dashboard' && <Dashboard privacyMode={privacyMode} setPrivacyMode={setPrivacyMode} />}
              {activeTab === 'vault' && <Vault />}
              {activeTab === 'yield' && <Yield privacyMode={privacyMode} />}
              {activeTab === 'inheritance' && <Inheritance />}
              {activeTab === 'firstmate' && <FirstMate onReturn={() => setActiveTab('dashboard')} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-900/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-zinc-800/5 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}