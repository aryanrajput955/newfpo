import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  MailOpen,
  Monitor,
  ShoppingCart,
  TreePine,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="font-sans text-[#1a1a2e] bg-white overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[600px] md:min-h-[550px] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/hero-mobile.jpg')] md:bg-[url('/hero-desktop.jpg')]">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-linear-to-b from-white/90 via-white/70 to-white/40"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-10 md:px-6 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-full lg:max-w-[520px] text-left animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="font-serif text-[32px] md:text-5xl font-normal leading-[1.15] text-[#122a44] mb-5 drop-shadow-sm">
              Empowering FPOs for a
              <br />
              Sustainable Rural Future
            </h1>
            <p className="text-base md:text-lg text-[#1a1a2e] leading-relaxed mb-8 font-medium drop-shadow-sm">
              Integrated Solutions for Digital Infra, Agri Trade, & Farm
              Tourism.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2e8b57] text-white rounded-lg text-[15px] font-semibold shadow-lg shadow-[#2e8b57]/30 hover:bg-[#3a8f5c] hover:-translate-y-0.5 transition-all"
            >
              Explore Our Ecosystem
            </a>
          </div>

          {/* Hero Side Image */}
          <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[600px] aspect-auto shrink-0 animate-in fade-in delay-300 duration-1000 flex justify-center lg:justify-end">
            <img 
              src="/side.png" 
              alt="Hero Side Image" 
              className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section className="px-5 py-10 md:px-10 md:py-12 max-w-[1200px] mx-auto bg-white/50 backdrop-blur-sm -mt-6 md:-mt-12 relative z-20 rounded-t-3xl border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: fpcl.in */}
          <div className="group rounded-2xl p-7 border border-[#c5dfc9] hover:border-transparent bg-linear-to-br from-[#eaf6ee] to-[#d7ede0] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-lg bg-[#1b3a5c] text-white flex items-center justify-center shrink-0">
                <Monitor size={18} />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#1b3a5c] leading-tight group-hover:scale-105 transition-transform origin-left">fpcl.in</h3>
            </div>
            <p className="text-[13px] text-[#5a6a7a] mb-3.5 pb-2.5 border-b border-black/10">Digital Office Suite</p>
            <ul className="list-none mb-5 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Custom FPO Portals
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> ERP & MIS Tools
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Compliance Management
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Data Analytics Services
              </li>
            </ul>
            <a href="https://fpcl.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#4caf50] text-white rounded-lg text-[13px] font-semibold hover:bg-[#3d9141] hover:-translate-y-px transition-all shadow-sm">
              Learn More
            </a>
            <div className="absolute -bottom-4 -right-4 opacity-[0.07] text-[#1b3a5c] rotate-12 scale-150 pointer-events-none">
                <Monitor size={100} />
            </div>
          </div>

          {/* Card 2: kisaanhaat.com */}
          <div className="group rounded-2xl p-7 border border-[#f5deb3] hover:border-transparent bg-linear-to-br from-[#fef6e8] to-[#fcecd0] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-lg bg-[#e8632b] text-white flex items-center justify-center shrink-0">
                <ShoppingCart size={18} />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#e8632b] leading-tight group-hover:scale-105 transition-transform origin-left">kisaanhaat.com</h3>
            </div>
            <p className="text-[13px] text-[#5a6a7a] mb-3.5 pb-2.5 border-b border-black/10">Bulk Agri Marketplace</p>
            <ul className="list-none mb-5 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> B2B Agri Trading
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Quality & Logistics
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Institutional Buyers
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Export Contracts
              </li>
            </ul>
            <a href="https://kisaanhaat.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#e8632b] text-white rounded-lg text-[13px] font-semibold hover:bg-[#d4551f] hover:-translate-y-px transition-all shadow-sm">
              Learn More
            </a>
            <div className="absolute -bottom-4 -right-4 opacity-[0.07] text-[#e8632b] rotate-12 scale-150 pointer-events-none">
                <ShoppingCart size={100} />
            </div>
          </div>

          {/* Card 3: farmingo.in */}
          <div className="group rounded-2xl p-7 border border-[#bfe0bf] hover:border-transparent bg-linear-to-br from-[#e8f8e8] to-[#d4f0d4] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-lg bg-[#2e8b57] text-white flex items-center justify-center shrink-0">
                <TreePine size={18} />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#2e8b57] leading-tight group-hover:scale-105 transition-transform origin-left">farmingo.in</h3>
            </div>
            <p className="text-[13px] text-[#5a6a7a] mb-3.5 pb-2.5 border-b border-black/10">Farm Tourism Network</p>
            <ul className="list-none mb-5 flex flex-col gap-2">
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Farm Stay & Tours
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Agri Experiences
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> CSR Immersions
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-[#1a1a2e]">
                <CheckCircle2 size={16} className="text-[#2e8b57] shrink-0" /> Rural Getaways
              </li>
            </ul>
            <a href="https://farmingo.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-[#2e8b57] text-white rounded-lg text-[13px] font-semibold hover:bg-[#257546] hover:-translate-y-px transition-all shadow-sm">
              Learn More
            </a>
            <div className="absolute -bottom-4 -right-4 opacity-[0.07] text-[#2e8b57] rotate-12 scale-150 pointer-events-none">
                <TreePine size={100} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="px-10 py-10 md:py-16 max-w-[1200px] mx-auto text-center border-t border-[#e0e6ec] mt-8 bg-white">
        <h2 className="font-serif text-[28px] md:text-3xl font-normal text-[#122a44] mb-10">Why Choose fpOconnect India?</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3 text-[15px] text-[#1a1a2e] font-medium group">
            <ShieldCheck size={40} className="text-[#1b3a5c] group-hover:scale-110 transition-transform" />
            <span>Trusted by 500+ FPOs</span>
          </div>
          <div className="flex items-center gap-3 text-[15px] text-[#1a1a2e] font-medium group">
            <TrendingUp size={40} className="text-[#1b3a5c] group-hover:scale-110 transition-transform" />
            <span>Diversified Revenue Streams</span>
          </div>
          <div className="flex items-center gap-3 text-[15px] text-[#1a1a2e] font-medium group">
            <MailOpen size={40} className="text-[#1b3a5c] group-hover:scale-110 transition-transform" />
            <span>Expert Advisory Support</span>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS SECTION ===== */}
      <section className="px-5 py-8 md:pb-16 max-w-[1200px] mx-auto text-center bg-white">
        <h3 className="text-lg font-bold text-[#122a44] mb-6">Partnered With</h3>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex items-center gap-2 px-7 py-3 border-[1.5px] border-[#e0e6ec] rounded-xl bg-white text-sm font-bold text-[#122a44] transition-all hover:border-[#2e8b57] hover:shadow-[0_4px_12px_rgba(46,139,87,0.1)] hover:-translate-y-0.5 cursor-default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#e8632b" />
              <path d="M7,12 L12,7 L17,12 L12,17Z" fill="white" />
            </svg>
            <span className="text-[#e8632b] font-extrabold">NABARD</span>
          </div>
          <div className="flex items-center gap-2 px-7 py-3 border-[1.5px] border-[#e0e6ec] rounded-xl bg-white text-sm font-bold text-[#122a44] transition-all hover:border-[#2e8b57] hover:shadow-[0_4px_12px_rgba(46,139,87,0.1)] hover:-translate-y-0.5 cursor-default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#2e8b57" />
              <rect x="8" y="8" width="8" height="8" rx="1" fill="white" />
            </svg>
            <span className="text-[#2e8b57] font-extrabold">SFAC</span>
          </div>
          <div className="flex items-center gap-2 px-7 py-3 border-[1.5px] border-[#e0e6ec] rounded-xl bg-white text-sm font-bold text-[#122a44] transition-all hover:border-[#2e8b57] hover:shadow-[0_4px_12px_rgba(46,139,87,0.1)] hover:-translate-y-0.5 cursor-default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#e8632b" />
              <path d="M8,10 L12,6 L16,10 L16,16 L8,16Z" fill="white" />
            </svg>
            <span className="font-bold text-xs tracking-wider">
              CSR <span className="font-extrabold">INITIATIVES</span>
            </span>
          </div>
          <div className="flex items-center gap-2 px-7 py-3 border-[1.5px] border-[#e0e6ec] rounded-xl bg-white text-sm font-bold text-[#122a44] transition-all hover:border-[#2e8b57] hover:shadow-[0_4px_12px_rgba(46,139,87,0.1)] hover:-translate-y-0.5 cursor-default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#2e8b57" />
              <path d="M8,14 C8,10 10,8 12,8 C14,8 16,10 16,14" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="12" cy="14" r="2" fill="white" />
            </svg>
            <span>
              <span className="text-[#2e8b57] font-extrabold">AgriTech</span>{" "}
              <span className="text-[#e8632b] font-extrabold">India</span>
            </span>
          </div>
          <div className="flex items-center gap-2 px-7 py-3 border-[1.5px] border-[#e0e6ec] rounded-xl bg-white text-sm font-bold text-[#122a44] transition-all hover:border-[#2e8b57] hover:shadow-[0_4px_12px_rgba(46,139,87,0.1)] hover:-translate-y-0.5 cursor-default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#1b3a5c" />
              <rect x="7" y="10" width="10" height="7" rx="1" fill="white" />
              <path d="M7,10 L12,6 L17,10" fill="white" />
            </svg>
            <span className="font-bold text-[#1b3a5c]">Gov. Programs</span>
          </div>
        </div>
      </section>
    </div>
  );
}
