"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-20 px-6 text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hexa.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          className="text-6xl font-light mb-6 text-red-800 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Revolutionizing Risk Assessment with AI-Powered Genetic Insights
        </motion.h1>
        <motion.p
          className="max-w-2xl mb-8 text-lg text-gray-700 drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Silverine is designed to process genome sequence data on a large
          scale. This algorithm uses deep learning techniques to identify
          mutation patterns and determine the correlation between genetic
          changes and antibiotic resistance levels.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Button className="px-8 py-4 text-xl font-semibold bg-white text-red-800 rounded-lg shadow-lg hover:bg-gray-100">
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* Chat Bubble */}
      <div className="absolute bottom-8 right-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 bg-white text-red-800 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
          >
            💬
          </button>
        </motion.div>

        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 w-80 p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/30 text-left shadow-lg text-white"
          >
            <h2 className="text-lg font-semibold mb-2">Chat with Silverine</h2>
            <form className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Your message..."
                className="w-full p-2 rounded-lg bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none"
              />
              <button
                type="submit"
                className="self-end bg-white text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
