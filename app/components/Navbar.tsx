"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContractVisible, setIsContractVisible] = useState(true); // State for contract address visibility

  // Generate a random contract address for demo purposes
  const generateRandomAddress = () => {
    const characters = "0123456789abcdef";
    let address = "0x";
    for (let i = 0; i < 40; i++) {
      address += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return address;
  };

  const contractAddress = generateRandomAddress();

  // Scroll detection to show/hide navbar and contract address
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsContractVisible(false); // Hide contract address when scrolling down
      } else {
        setIsScrolled(false);
        setIsContractVisible(true); // Show contract address when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Navbar (Only Visible When Scrolled to Top) */}
      {!isScrolled && (
        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-full px-6 py-3 w-auto flex items-center space-x-6 transition-transform">
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
              WhitePapper
            </Link>
          </div>

          {/* CTA Button */}
          <Button className="hidden md:block bg-purple-500 text-white border border-white/30 hover:bg-white/30">
            Connect Wallet
          </Button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-lg flex flex-col space-y-4 w-48">
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
      )}

      {/* Contract Address Card (Bottom-Right Corner) */}
      {isContractVisible && (
        <div className="fixed bottom-6 right-6 bg-white/20 backdrop-blur-md p-4 rounded-full shadow-lg max-w-xs">
          <p className="text-xs text-black break-all">0xx095290knqveoqitj4pwab0pu</p>
        </div>
      )}
    </>
  );
}
