export const metadata = {
  title: "Contact Us - FpoConnect India",
  description: "Get in touch with FpoConnect India for digital infrastructure, agri-trade, and farm tourism solutions.",
};

import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="font-sans text-[#1a1a2e] bg-white">
      {/* Header Section */}
      <section className="bg-[#1b3a5c] py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Contact Us</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Have questions? We're here to help you empower your FPO and transform rural agriculture.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#122a44] mb-6">Get in Touch</h2>
            <p className="text-[#5a6a7a] mb-10 leading-relaxed">
              Reach out to us for any inquiries regarding our FPO management tools, trading platforms, or farm tourism networks.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#eaf6ee] flex items-center justify-center text-[#2e8b57] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-1">Phone</h3>
                  <p className="text-[#5a6a7a] mb-1">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:9897891511" className="text-[#2e8b57] font-medium hover:underline">+91 98978 91511</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fff4e6] flex items-center justify-center text-[#e8632b] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a2e] mb-1">Email</h3>
                  <p className="text-[#5a6a7a] mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:info@fpoconnect.org" className="text-[#e8632b] font-medium hover:underline">info@fpoconnect.org</a>
                </div>
              </div>

         
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-[#e0e6ec] shadow-lg shadow-black/5">
            <h2 className="text-2xl font-bold text-[#122a44] mb-6">Send us a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-[#1a1a2e]">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-[#e0e6ec] focus:outline-none focus:border-[#2e8b57] focus:ring-1 focus:ring-[#2e8b57] transition-all bg-[#fafafa]"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-[#1a1a2e]">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-[#e0e6ec] focus:outline-none focus:border-[#2e8b57] focus:ring-1 focus:ring-[#2e8b57] transition-all bg-[#fafafa]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-[#1a1a2e]">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e6ec] focus:outline-none focus:border-[#2e8b57] focus:ring-1 focus:ring-[#2e8b57] transition-all bg-[#fafafa]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-[#1a1a2e]">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-[#e0e6ec] focus:outline-none focus:border-[#2e8b57] focus:ring-1 focus:ring-[#2e8b57] transition-all bg-[#fafafa] resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-[#2e8b57] text-white rounded-lg font-bold text-[15px] hover:bg-[#3a8f5c] hover:-translate-y-0.5 transition-all shadow-md shadow-[#2e8b57]/20 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
