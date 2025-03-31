"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-[Exo]">
          Silverine
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            Roadmap
          </Link>
          <Link href="#" className="text-white hover:text-gray-300">
            WhitePapper
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white/10 backdrop-blur-lg border-t border-white/20 p-4 space-y-4">
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button className="bg-white/20 text-white border border-white/30 hover:bg-white/30">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
