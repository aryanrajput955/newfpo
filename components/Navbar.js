"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="flex items-center justify-between px-4 py-3 md:px-10 bg-[#1b3a5c] sticky top-0 z-50 shadow-md">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <img 
            src="/logo.jpeg" 
            alt="FpoConnect India Logo" 
            className="w-[38px] h-[38px] rounded-xl p-[0.5px] object-cover shrink-0 bg-white" 
          />
          <div className="text-white text-base font-semibold whitespace-nowrap">
            FpoConnect India
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          <li>
            <a 
              href="/" 
              className={`text-white text-sm font-medium hover:opacity-85 pb-0.5 ${isActive("/") ? "border-b-2 border-white" : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/about" 
              className={`text-white text-sm font-medium hover:opacity-85 transition-opacity pb-0.5 ${isActive("/about") ? "border-b-2 border-white" : ""}`}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="/services" 
              className={`text-white text-sm font-medium hover:opacity-85 transition-opacity flex items-center gap-1 pb-0.5 ${isActive("/services") ? "border-b-2 border-white" : ""}`}
            >
              Services
            </a>
          </li>
          {/* 
          <li>
            <a 
              href="/blog" 
              className={`text-white text-sm font-medium hover:opacity-85 transition-opacity pb-0.5 ${isActive("/blog") ? "border-b-2 border-white" : ""}`}
            >
              Blog
            </a>
          </li> 
          */}
          <li>
            <a 
              href="/contact" 
              className={`text-white text-sm font-medium hover:opacity-85 transition-opacity pb-0.5 ${isActive("/contact") ? "border-b-2 border-white" : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Nav Buttons */}
        <div className="flex items-center gap-3">
          {/* 
          <a href="/login" className="hidden border-[1.5px] border-white rounded-md text-white bg-transparent px-5 py-1.5 text-[13px] font-semibold hover:bg-white/10 transition-all md:block">
            Login
          </a> 
          */}
          <a href="/get-started" className="hidden bg-[#2e8b57] text-white rounded-md px-5 py-2 text-[13px] font-semibold hover:bg-[#3a8f5c] hover:-translate-y-px transition-all shadow-sm md:block">
            Get Started
          </a>
          <button
            className="flex flex-col gap-[5px] p-1 bg-none border-none cursor-pointer lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-[#1b3a5c] px-5 py-4 flex flex-col gap-3 sticky top-[56px] z-40 lg:hidden border-t border-white/10 shadow-xl">
          <a
            href="/"
            className={`text-white text-[15px] font-medium py-2 border-b border-white/10 hover:text-white/80 ${isActive("/") ? "font-bold" : ""}`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`text-white text-[15px] font-medium py-2 border-b border-white/10 hover:text-white/80 ${isActive("/about") ? "font-bold" : ""}`}
          >
            About Us
          </a>
          <a
            href="/services"
            className={`text-white text-[15px] font-medium py-2 border-b border-white/10 hover:text-white/80 ${isActive("/services") ? "font-bold" : ""}`}
          >
            Services
          </a>
          {/* 
          <a
            href="/blog"
            className={`text-white text-[15px] font-medium py-2 border-b border-white/10 hover:text-white/80 ${isActive("/blog") ? "font-bold" : ""}`}
          >
            Blog
          </a> 
          */}
          <a
            href="/contact"
            className={`text-white text-[15px] font-medium py-2 border-b border-white/10 hover:text-white/80 ${isActive("/contact") ? "font-bold" : ""}`}
          >
            Contact
          </a>
          
          {/* 
          <a href="/login" className="text-white text-[15px] font-semibold py-2.5 border-b border-white/10">
            Login
          </a> 
          */}
        </div>
      )}
    </>
  );
}
