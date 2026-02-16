import {
  Home,
  Facebook,
  Twitter,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#1b3a5c] px-4 py-8 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
      <ul className="flex flex-wrap justify-center md:justify-start gap-5 list-none m-0 p-0">
        <li>
          <a href="/" className="flex items-center gap-1 text-white text-[13px] font-medium hover:opacity-80 transition-opacity">
            <Home size={14} /> Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white text-[13px] font-medium hover:opacity-80 transition-opacity">About Us</a>
        </li>
        <li>
          <a href="/services" className="text-white text-[13px] font-medium hover:opacity-80 transition-opacity">Services</a>
        </li>
        <li>
          <a href="/blog" className="text-white text-[13px] font-medium hover:opacity-80 transition-opacity">Blog</a>
        </li>
        <li>
          <a href="/contact" className="text-white text-[13px] font-medium hover:opacity-80 transition-opacity">Contact</a>
        </li>
      </ul>
     
      <div className="text-white text-[13px] font-light opacity-80 text-center md:absolute md:left-1/2 md:-translate-x-1/2 w-full md:w-auto mt-2 md:mt-0">
          © by FPOConnect India Pvt Ltd.
      </div>

      <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center gap-4 text-white/70 text-[12px]">
              <a href="tel:9897891511" className="flex items-center gap-1.5 hover:text-white transition-opacity">
                  <Phone size={13} /> +91 98978 91511
              </a>
              <a href="mailto:info@fpoconnect.org" className="flex items-center gap-1.5 hover:text-white transition-opacity">
                  <Mail size={13} /> info@fpoconnect.org
              </a>
          </div>
          <div className="flex items-center gap-2.5">
          <a href="#" className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center text-white transition-all hover:bg-white/25 hover:-translate-y-px" aria-label="Facebook">
              <Facebook size={16} />
          </a>
          <a href="#" className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center text-white transition-all hover:bg-white/25 hover:-translate-y-px" aria-label="Twitter">
              <Twitter size={16} />
          </a>
          <a href="#" className="w-8 h-8 rounded-md bg-white/15 flex items-center justify-center text-white transition-all hover:bg-white/25 hover:-translate-y-px" aria-label="LinkedIn">
              <Linkedin size={16} />
          </a>
          </div>
      </div>
    </footer>
  );
}
