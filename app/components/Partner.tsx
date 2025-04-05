"use client";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";

export default function OurPartner() {
  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-gray-200 via-gray-200 to-silver text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-red-800 md:text-5xl font-bold tracking-tight"
        >
          Our Partner
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
        >
          We're proud to be a part of NVIDIA Inception — an exclusive program
          that nurtures cutting-edge AI startups.
        </motion.p>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl flex items-center space-x-5"
      >
        {/* Logo */}
        <div className="w-30 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
          <img
            src="https://www.logo.wine/a/logo/Nvidia/Nvidia-Logo.wine.svg"
            alt="NVIDIA Logo"
            className="w-30 h- object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold text-black">
            Part of <span className="tex-black">NVIDIA Inception</span>
          </h3>
          <p className="text-sm text-black mt-1">
            Empowered by NVIDIA’s support to accelerate our AI-driven
            innovations in healthcare and genomics.
          </p>
        </div>

        {/* Sparkle */}
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute -top-4 right-8 bg-green-500 p-2 rounded-full shadow-md"
        >
          <SparklesIcon className="text-white w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
