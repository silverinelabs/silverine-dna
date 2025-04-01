"use client";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FuturisticFooter() {
  return (
    <footer className="relative w-full bg-white py-8 px-6 text-white text-center border-t border-gray-800">
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl text-black md:text-2xl font-bold tracking-wide font-[Exo]">
          Silverine Labs
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-lg">
          Pioneering AI & Blockchain for next-gen genetic analysis and privacy
          protection.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="#"
            className="text-xl text-blue-400 hover:text-blue-300 transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-xl text-purple-400 hover:text-purple-300 transition-all"
          >
            <FaDiscord />
          </a>
          <a
            href="#"
            className="text-xl text-gray-400 hover:text-gray-300 transition-all"
          >
            <FaGithub />
          </a>
        </div>

        <p className="text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} Silverine Labs. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
