"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg px-6 py-3 flex items-center justify-between rounded-full w-auto space-x-6 transition-transform">
      {/* Brand Logo */}
      <div className="flex items-center space-x-4">
        <Link href="/">
            <h1 className="font-semibold text-red-800">SILVERINE</h1>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Items */}
      <div className="hidden md:flex space-x-6">
        <Link href="#" className="text-black hover:text-gray-300">
          Home
        </Link>
        <Link href="/pages/about" className="text-black hover:text-gray-300">
          About Us
        </Link>
        <Link href="/pages/roadmap" className="text-black hover:text-gray-300">
          Roadmap
        </Link>
        <Link
          href="/pages/whitepaper"
          className="text-black hover:text-gray-300"
        >
          WhitePaper
        </Link>
      </div>

      {/* CTA Button */}
      <Button className="hidden md:block bg-black text-white border border-white/30 hover:bg-red-800">
        Connect Wallet
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-lg flex flex-col space-y-4 w-48">
          <Link
            href="#"
            className="text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/pages/whitepaper"
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
            href="aboutUs"
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
