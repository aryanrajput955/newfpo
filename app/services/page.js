import {
  CheckCircle2,
  Monitor,
  ShoppingCart,
  TreePine,
  ArrowRight,
  TrendingUp,
  Smartphone,
  BookOpen,
  Users,
  Sprout,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="font-sans text-[#1a1a2e] bg-white overflow-x-hidden min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative py-20 md:py-28 bg-[#1b3a5c] overflow-hidden">
        {/* Background Patterns */}


        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#2e8b57]/20 text-[#4caf50] text-sm font-bold tracking-wider mb-6 border border-[#4caf50]/30 backdrop-blur-sm">
            WHAT WE OFFER
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 tracking-wide">
            Our Digital Ecosystem
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto leading-relaxed font-light">
            Integrated platforms designed to digitize, commercialize, and diversify revenue streams for Farmer Producer Organizations.
          </p>
        </div>
      </section>

      {/* ===== APPROACH SECTION (NEW) ===== */}
      <section className="py-16 md:py-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl font-serif text-[#1b3a5c] mb-6">Holistic Growth for FPOs</h2>
           <p className="text-[#5a6a7a] text-lg leading-relaxed mb-10">
             We don't just provide software; we build ecosystems. Our integrated approach ensures that every aspect of an FPO's journey—from seed to market—is covered, optimized, and profitable.
           </p>
           <div className="w-24 h-1 bg-[#2e8b57] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-16 md:py-24 px-4 bg-[#f8fafc]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 gap-12">
            
            {/* Service 1: fpcl.in */}
            <div className="group rounded-3xl p-8 md:p-12 border border-[#c5dfc9] bg-white hover:border-[#2e8b57] transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/3 shrink-0">
                 <div className="w-20 h-20 rounded-2xl bg-[#1b3a5c] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#1b3a5c]/20 transform group-hover:scale-105 transition-transform duration-300">
                    <Monitor size={40} />
                 </div>
                 <h2 className="text-3xl font-serif text-[#1b3a5c] mb-3 font-bold">fpcl.in</h2>
                 <p className="text-[#2e8b57] font-bold text-sm tracking-wide uppercase mb-4">Digital Office Suite</p>
                 <p className="text-[#5a6a7a] leading-relaxed">
                   Streamline operations with our all-in-one management platform. From member data to compliance, we've got you covered.
                 </p>
              </div>
              
              <div className="flex-1 bg-[#f1f8f4] p-8 rounded-2xl w-full">
                 <h3 className="text-xl font-bold text-[#1b3a5c] mb-6">Key Capabilities</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#2e8b57] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Custom Portals</span>
                           <span className="text-sm text-[#5a6a7a]">Branded web presence for your FPO.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#2e8b57] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">ERP & MIS</span>
                           <span className="text-sm text-[#5a6a7a]">Real-time business insights.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#2e8b57] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Compliance</span>
                           <span className="text-sm text-[#5a6a7a]">Automated regulatory filings.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#2e8b57] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Analytics</span>
                           <span className="text-sm text-[#5a6a7a]">Data-driven forecasting.</span>
                        </div>
                    </div>
                 </div>
                 
                 <a href="https://fpcl.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b3a5c] text-white rounded-lg font-semibold hover:bg-[#122a44] transition-all hover:-translate-y-0.5">
                    Visit Platform <ArrowRight size={18} />
                 </a>
              </div>
            </div>

            {/* Service 2: kisaanhaat.com */}
            <div className="group rounded-3xl p-8 md:p-12 border border-[#f5deb3] bg-white hover:border-[#e8632b] transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/3 shrink-0">
                 <div className="w-20 h-20 rounded-2xl bg-[#e8632b] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#e8632b]/20 transform group-hover:scale-105 transition-transform duration-300">
                    <ShoppingCart size={40} />
                 </div>
                 <h2 className="text-3xl font-serif text-[#e8632b] mb-3 font-bold">kisaanhaat.com</h2>
                 <p className="text-[#d4551f] font-bold text-sm tracking-wide uppercase mb-4">Bulk Agri Marketplace</p>
                 <p className="text-[#5a6a7a] leading-relaxed">
                   Connect directly with institutional buyers. Eliminate intermediaries and ensure better price realization for your produce.
                 </p>
              </div>
              
              <div className="flex-1 bg-[#fff8ef] p-8 rounded-2xl w-full">
                 <h3 className="text-xl font-bold text-[#e8632b] mb-6">Key Capabilities</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#e8632b] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">B2B Trading</span>
                           <span className="text-sm text-[#5a6a7a]">Direct bulk selling platform.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#e8632b] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Logistics</span>
                           <span className="text-sm text-[#5a6a7a]">Integrated supply chain solutions.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#e8632b] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Buyer Network</span>
                           <span className="text-sm text-[#5a6a7a]">Access to Verified Corporate Buyers.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#e8632b] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Exports</span>
                           <span className="text-sm text-[#5a6a7a]">International trade facilitation.</span>
                        </div>
                    </div>
                 </div>
                 
                 <a href="https://kisaanhaat.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#e8632b] text-white rounded-lg font-semibold hover:bg-[#d4551f] transition-all hover:-translate-y-0.5">
                    Start Trading <ArrowRight size={18} />
                 </a>
              </div>
            </div>

            {/* Service 3: farmingo.in */}
            <div className="group rounded-3xl p-8 md:p-12 border border-[#bfe0bf] bg-white hover:border-[#2e8b57] transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/3 shrink-0">
                 <div className="w-20 h-20 rounded-2xl bg-[#2e8b57] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#2e8b57]/20 transform group-hover:scale-105 transition-transform duration-300">
                    <TreePine size={40} />
                 </div>
                 <h2 className="text-3xl font-serif text-[#2e8b57] mb-3 font-bold">farmingo.in</h2>
                 <p className="text-[#2e8b57] font-bold text-sm tracking-wide uppercase mb-4">Farm Tourism Network</p>
                 <p className="text-[#5a6a7a] leading-relaxed">
                   Diversify your income by opening your farm gates to the world. Promote agro-tourism and rural experiences.
                 </p>
              </div>
              
              <div className="flex-1 bg-[#f1f8f4] p-8 rounded-2xl w-full">
                 <h3 className="text-xl font-bold text-[#2e8b57] mb-6">Key Capabilities</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#2e8b57] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Farm Stays</span>
                           <span className="text-sm text-[#5a6a7a]">Listing and booking management.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#2e8b57] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Agri-Experiences</span>
                           <span className="text-sm text-[#5a6a7a]">Guided tours and workshops.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#2e8b57] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">CSR Immersions</span>
                           <span className="text-sm text-[#5a6a7a]">Corporate social programs.</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-[#2e8b57] shrink-0 mt-1" />
                        <div>
                           <span className="font-bold text-[#1a1a2e] block">Rural Getaways</span>
                           <span className="text-sm text-[#5a6a7a]">Weekend retreat packages.</span>
                        </div>
                    </div>
                 </div>
                 
                 <a href="https://farmingo.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2e8b57] text-white rounded-lg font-semibold hover:bg-[#1a5c38] transition-all hover:-translate-y-0.5">
                    Discover More <ArrowRight size={18} />
                 </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION (NEW) ===== */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl font-serif text-[#1b3a5c] mb-12">The FPOConnect Advantage</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-[#eaf6ee] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2e8b57]">
                     <TrendingUp size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1b3a5c] mb-2">Market Linkage</h3>
                  <p className="text-[#5a6a7a] text-sm">Direct access to national and international markets, ensuring fair pricing.</p>
               </div>

               <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-[#fff8ef] rounded-full flex items-center justify-center mx-auto mb-4 text-[#e8632b]">
                     <Smartphone size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1b3a5c] mb-2">Tech Adoption</h3>
                  <p className="text-[#5a6a7a] text-sm">Seamless mobile and web interfaces designed for rural usability.</p>
               </div>

               <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-[#f0f4f8] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1b3a5c]">
                     <BarChart3 size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1b3a5c] mb-2">Data Insights</h3>
                  <p className="text-[#5a6a7a] text-sm">Actionable analytics to improve yield, reduce waste, and plan better.</p>
               </div>

               <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-[#eaf6ee] rounded-full flex items-center justify-center mx-auto mb-4 text-[#2e8b57]">
                     <Users size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1b3a5c] mb-2">Community</h3>
                  <p className="text-[#5a6a7a] text-sm">A strong network of thousands of farmers learning and growing together.</p>
               </div>
            </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (NEW) ===== */}
      <section className="py-16 md:py-24 bg-[#1b3a5c] px-4 overflow-hidden relative">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

         <div className="max-w-[1200px] mx-auto relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-16">How to Join Our Ecosystem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-white/20 z-0"></div>

               <div className="relative z-10">
                  <div className="w-24 h-24 bg-[#2e8b57] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold border-4 border-[#1b3a5c] shadow-xl">
                     1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Register</h3>
                  <p className="text-green-100 text-sm leading-relaxed px-4">Sign up your FPO on our platform with basic details and documentation.</p>
               </div>

               <div className="relative z-10">
                  <div className="w-24 h-24 bg-[#e8632b] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold border-4 border-[#1b3a5c] shadow-xl">
                     2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Onboard</h3>
                  <p className="text-green-100 text-sm leading-relaxed px-4">Digitize your member records and set up your customized FPO portal.</p>
               </div>

               <div className="relative z-10">
                  <div className="w-24 h-24 bg-[#1b3a5c] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold border-4 border-white shadow-xl">
                     3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Grow</h3>
                  <p className="text-green-100 text-sm leading-relaxed px-4">Access markets, manage operations, and watch your business thrive.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#2e8b57] to-[#1a5c38] text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        
        <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to Transform Your FPO?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg font-medium">
            Join the digital revolution in agriculture today. Let's build a sustainable future together.
            </p>
            <Link 
            href="/contact" 
            className="inline-block px-12 py-5 bg-white text-[#2e8b57] rounded-full text-lg font-bold shadow-2xl hover:bg-green-50 hover:scale-105 transition-all"
            >
            Get Started Now
            </Link>
        </div>
      </section>
    </div>
  );
}
