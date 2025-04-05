"use client";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function FuturisticFooter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="relative w-full bg-white py-8 px-6 text-gray-900 text-center mt-6">
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl text-black md:text-2xl font-bold tracking-wide text-red-800 font-[Exo]">
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
            className="text-xl text-black hover:text-gray-700 transition-all"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="text-xl text-gray-400 hover:text-gray-300 transition-all"
          >
            <FaGithub />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 text-sm text-gray-500 hover:text-gray-400 transition"
        >
          Privacy Policy
        </button>

        <p className="text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} Silverine Labs. All rights reserved.
        </p>

        {/* Disclaimer */}
        <p className="text-gray-400 text-xs mt-2">
          Disclaimer: The information provided on this website is for
          informational purposes only and should not be considered legal or
          professional advice.
        </p>
      </motion.div>

      {/* Privacy Policy Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>
              This Privacy Policy explains how Silverine Labs collects, uses,
              and protects your information. We value your privacy and strive to
              ensure your data is secure.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-sm text-gray-500 hover:text-gray-400 transition"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
