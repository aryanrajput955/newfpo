import Link from "next/link";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Sprout,
  Target,
  Lightbulb,
  Globe2,
  Handshake,
  ArrowRight
} from "lucide-react";
import Counter from "@/components/counter";

export default function AboutPage() {
  return (
    <div className="font-sans text-[#1a1a2e] bg-white overflow-x-hidden min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-32 bg-[#1b3a5c] overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2e8b57]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#2e8b57]/20 text-[#4caf50] text-sm font-bold tracking-wider mb-6 border border-[#4caf50]/30 backdrop-blur-sm">
            WHO WE ARE
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-normal text-white mb-8 tracking-wide leading-tight">
            Driving Rural <br className="hidden md:block" /> Prosperity
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed font-light">
            We are dedicated to empowering Farmer Producer Organizations (FPOs) with technology, market access, and sustainable practices to transform Indian agriculture.
          </p>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-16 md:py-24 px-4 bg-white relative">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 bg-gray-100">
                    <img 
                      src="/side.png" 
                      alt="Farmer Technology Usage" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1b3a5c]/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-sm font-bold tracking-wider mb-1">SINCE 2020</p>
                        <h3 className="text-2xl font-serif">Empowering 1000+ FPOs</h3>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#e8632b] rounded-full opacity-20 blur-xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#2e8b57] rounded-full opacity-20 blur-xl -z-10"></div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif text-[#1b3a5c] mb-6">Bridging the Gap Between Soil & Strategy</h2>
                <div className="space-y-6 text-[#5a6a7a] text-lg leading-relaxed">
                    <p>
                        Founded with a vision to digitize the grassroots of India, FPO Connect serves as a bridge between traditional farming communities and modern market ecosystems.
                    </p>
                    <p>
                        We understand the unique challenges faced by FPOs—fragmented supply chains, lack of real-time data, and limited market reach. Our integrated platform solves these by bringing transparency, efficiency, and scalability to agricultural operations.
                    </p>
                    <div className="pt-4 grid grid-cols-2 gap-6">
                        <div className="border-l-4 border-[#2e8b57] pl-4">
                            <span className="block text-3xl font-bold text-[#1b3a5c]">50k+</span>
                            <span className="text-sm text-[#5a6a7a] font-medium uppercase tracking-wide">Farmers Impacted</span>
                        </div>
                        <div className="border-l-4 border-[#e8632b] pl-4">
                            <span className="block text-3xl font-bold text-[#1b3a5c]">20+</span>
                            <span className="text-sm text-[#5a6a7a] font-medium uppercase tracking-wide">States Covered</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-16 md:py-24 bg-[#f8fafc] px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2e8b57]/5 rounded-bl-[100px] z-0 group-hover:bg-[#2e8b57]/10 transition-colors"></div>
                <div className="w-16 h-16 bg-[#eaf6ee] rounded-2xl flex items-center justify-center text-[#2e8b57] mb-6 relative z-10">
                    <Target size={32} />
                </div>
                <h3 className="text-2xl font-serif text-[#1b3a5c] mb-4 relative z-10">Our Mission</h3>
                <p className="text-[#5a6a7a] leading-relaxed relative z-10">
                    To integrate every FPO in India into a streamlined digital ecosystem, enabling them to operate as efficient business entities, maximize profitability, and ensure sustainable livelihoods for farmers.
                </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e8632b]/5 rounded-bl-[100px] z-0 group-hover:bg-[#e8632b]/10 transition-colors"></div>
                <div className="w-16 h-16 bg-[#fff8ef] rounded-2xl flex items-center justify-center text-[#e8632b] mb-6 relative z-10">
                    <Lightbulb size={32} />
                </div>
                <h3 className="text-2xl font-serif text-[#1b3a5c] mb-4 relative z-10">Our Vision</h3>
                <p className="text-[#5a6a7a] leading-relaxed relative z-10">
                    A future where Indian agriculture is technologically advanced, economically viable, and environmentally sustainable, driven by empowered farmer collectives leading the global food supply chain.
                </p>
            </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-16 md:py-24 px-4 bg-white relative">
         <div className="max-w-[1200px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1b3a5c] mb-4">Core Values</h2>
            <p className="text-[#5a6a7a] max-w-2xl mx-auto">The principles that guide our every decision and innovation.</p>
         </div>

         <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-6">
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-[#1b3a5c] mb-6 group-hover:bg-[#1b3a5c] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#1b3a5c] mb-3">Integrity</h3>
                <p className="text-[#5a6a7a] text-sm leading-relaxed">Honest partnerships and transparent operations at every level.</p>
            </div>

            <div className="group text-center p-6">
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-[#2e8b57] mb-6 group-hover:bg-[#2e8b57] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                    <Sprout size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#1b3a5c] mb-3">Sustainability</h3>
                <p className="text-[#5a6a7a] text-sm leading-relaxed">Solutions that respect the environment and ensure long-term growth.</p>
            </div>

            <div className="group text-center p-6">
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-[#e8632b] mb-6 group-hover:bg-[#e8632b] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                    <TrendingUp size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#1b3a5c] mb-3">Innovation</h3>
                <p className="text-[#5a6a7a] text-sm leading-relaxed">Constantly evolving technology to solve real-world agricultural problems.</p>
            </div>

            <div className="group text-center p-6">
                <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-[#1b3a5c] mb-6 group-hover:bg-[#1b3a5c] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2">
                    <Handshake size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#1b3a5c] mb-3">Collaboration</h3>
                <p className="text-[#5a6a7a] text-sm leading-relaxed">Building a strong ecosystem of partners, buyers, and farmers.</p>
            </div>
         </div>
      </section>

      {/* ===== IMPACT COUNTER ===== */}
      <Counter />



      {/* CTA Section */}
      <section className="py-20 bg-[#1b3a5c] text-center px-4 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg width="100%" height="100%">
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

        <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Join Our Mission</h2>
            <p className="text-green-50 max-w-2xl mx-auto mb-10 text-lg font-light">
               Whether you are an FPO, a corporate buyer, or a technology partner, let's collaborate to build a prosperous rural India.
            </p>
            <Link 
            href="/contact" 
            className="inline-block px-12 py-5 bg-[#e8632b] text-white rounded-full text-lg font-bold shadow-lg hover:bg-[#d4551f] hover:-translate-y-1 transition-all"
            >
            Partner With Us
            </Link>
        </div>
      </section>
    </div>
  );
}
