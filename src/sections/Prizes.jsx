import React from 'react';

const Crown = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20h20M4 20l2-8 6 4 6-4 2 8" /><circle cx="12" cy="8" r="2" /><circle cx="4" cy="10" r="1.5" /><circle cx="20" cy="10" r="1.5" />
  </svg>
);

const Medal = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="15" r="6" /><path d="M8.5 8.5 8 3h8l-.5 5.5" /><path d="m9 3 3 4 3-4" />
  </svg>
);

const Award = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="9" r="6" /><path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
  </svg>
);

const Zap = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Gift = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);

const prizes = [
  {
    place: '2nd Place',
    amount: '₹5,00,000',
    perks: 'Silver Medal + Goodies + Vouchers',
    color: 'border-cyan-500',
    shadow: 'shadow-[0_0_20px_rgba(6,182,212,0.3)]',
    icon: <Medal className="text-cyan-400" size={48} />,
  },
  {
    place: '1st Place',
    amount: '₹15,00,000',
    perks: 'Golden Trophy + Internship + VC Meeting',
    color: 'border-red-600',
    shadow: 'shadow-[0_0_30px_rgba(220,38,38,0.5)]',
    icon: <Crown className="text-red-500" size={64} />,
    isGrand: true,
  },
  {
    place: '3rd Place',
    amount: '₹3,00,000',
    perks: 'Bronze Medal + Goodies + Swag',
    color: 'border-amber-600',
    shadow: 'shadow-[0_0_20px_rgba(217,119,6,0.3)]',
    icon: <Award className="text-amber-500" size={48} />,
  },
];

const PRIZES = () => (
  <section id="prizes" className="w-screen flex flex-col items-center py-[8vh] relative overflow-hidden bg-black text-white">
    {/* Ambient blobs */}
    <div className="absolute top-[10%] left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-[10%] right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

    {/* Title */}
    <div className="flex items-center justify-center mt-[20vh] z-10">
      <h2 className="blowbrush text-[4vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-900 drop-shadow-[0_0_25px_rgba(255,0,60,0.8)]">
        Prize Pool
      </h2>
    </div>

    {/* Total pool */}
    <div className="flex items-center gap-4 mt-4 z-10">
      <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-red-600" />
      <p className="orbitron text-[1.2vw] font-bold text-white tracking-widest">₹30,00,000+</p>
      <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-red-600" />
    </div>

    {/* Cards */}
    <div className="w-full max-w-6xl px-6 mt-[7vh] grid lg:grid-cols-3 gap-8 items-end z-10">
      {prizes.map((prize, idx) => (
        <div
          key={idx}
          className={`group transition-all duration-500 hover:-translate-y-2 ${
            prize.isGrand ? 'lg:scale-110 z-20' : 'z-10'
          }`}
        >
          <div
            className={`relative bg-neutral-900/80 backdrop-blur-md border-t-4 ${prize.color} ${prize.shadow} p-8 pt-12`}
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
          >
            <div className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 ${prize.color} opacity-50`} />
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {prize.icon}
              </div>
              <h3 className="rajdhani text-[1vw] text-gray-400 uppercase tracking-widest mb-1">{prize.place}</h3>
              <div className="orbitron text-[2vw] font-black mb-4 tracking-tight">{prize.amount}</div>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4" />
              <p className="rajdhani text-[0.9vw] text-gray-400">{prize.perks}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Additional perks */}
    <div className="w-full max-w-6xl px-6 mt-12 z-10">
      <div className="relative group">
        <div className="absolute inset-0 bg-red-600/5 blur-xl group-hover:bg-red-600/10 transition-colors" />
        <div className="relative border border-white/10 bg-neutral-950 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-600/20 rounded-full">
              <Zap className="text-red-500" size={20} />
            </div>
            <div>
              <h4 className="orbitron text-[1vw] font-bold uppercase">Additional Perks</h4>
              <p className="rajdhani text-[0.85vw] text-gray-500">For all shortlisted participants</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
            {['Swag Kits', 'Cloud Credits', 'Certificates', 'Food & Drinks'].map((item) => (
              <div key={item} className="flex items-center gap-2 rajdhani text-[0.85vw] text-gray-300 bg-white/5 px-4 py-2 border border-white/5">
                <Gift size={14} className="text-red-500" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PRIZES;
