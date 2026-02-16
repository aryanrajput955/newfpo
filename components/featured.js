"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Shield, Users, MapPin, DollarSign, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const Featured = () => {
  const features = [
    {
      title: "Uncompromising Quality",
      description:
        "Our products undergo stringent testing to ensure unmatched durability and performance tailored for Indian farming conditions.",
      icon: <Shield className="h-6 w-6 text-[#2e8b57]" />,
      color: "bg-[#eaf6ee]",
    },
    {
      title: "Expert Guidance",
      description:
        "Our agricultural specialists offer tailored consultations to optimize your farming operations and boost productivity.",
      icon: <Users className="h-6 w-6 text-[#e8632b]" />,
      color: "bg-[#fef6e8]",
    },
    {
      title: "Pan-India Reach",
      description:
        "With service centers nationwide, we provide swift maintenance and support to keep your operations running smoothly.",
      icon: <MapPin className="h-6 w-6 text-[#1b3a5c]" />,
      color: "bg-[#e0e6ec]",
    },
    {
      title: "Competitive Pricing",
      description:
        "Direct manufacturer partnerships enable us to deliver premium products at prices that maximize your ROI.",
      icon: <DollarSign className="h-6 w-6 text-[#2e8b57]" />,
      color: "bg-[#eaf6ee]",
    },
    {
      title: "Skill Development",
      description:
        "Comprehensive training programs on equipment and modern techniques empower your team for peak efficiency.",
      icon: <BookOpen className="h-6 w-6 text-[#1b3a5c]" />,
      color: "bg-[#e0e6ec]",
    },
    {
      title: "Flexible Financing",
      description:
        "Customized payment plans and subsidy assistance make advanced farming solutions accessible to all.",
      icon: <Leaf className="h-6 w-6 text-[#e8632b]" />,
      color: "bg-[#fef6e8]",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#2e8b57] blur-[100px] opacity-20"></div>
        <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#e8632b] blur-[100px] opacity-10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#eaf6ee] text-[#2e8b57] text-sm font-bold tracking-wider mb-4 border border-[#c5dfc9]">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl font-serif font-normal text-[#122a44] sm:text-5xl md:text-6xl mb-6">
            Why Partner with FPCL?
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-[#5a6a7a] md:text-xl font-medium leading-relaxed">
            Empowering Indian farmers with innovative B2B agricultural solutions for sustainable growth and success.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${feature.color} transition-colors`}>
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1b3a5c] group-hover:text-[#2e8b57] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#5a6a7a] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CENTRAL CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="https://fpoconnect.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#e8632b] text-white rounded-full text-lg font-bold shadow-lg shadow-[#e8632b]/30 hover:bg-[#d4551f] hover:-translate-y-1 transition-all duration-300"
          >
            <span>Explore FPO Connect</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;