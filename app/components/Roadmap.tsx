"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const roadmapData = [
  {
    title: "Phase 1",
    description: "Concept Development & AI Research",
    completed: true,
  },
  {
    title: "Phase 2",
    description: "Blockchain Integration & Security Audit",
    completed: true,
  },
  {
    title: "Phase 3",
    description: "Beta Testing & Community Expansion",
    completed: false,
  },
  {
    title: "Phase 4",
    description: "Mainnet Launch & Decentralized Governance",
    completed: false,
  },
];

export default function FuturisticRoadmap() {
  return (
    <div className="relative w-full py-16 px-6 text-white text-center">
      {/* Background Glowing Effect */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <motion.h2
        className="relative z-10 text-3xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Roadmap
      </motion.h2>

      <div className="relative z-10 flex flex-col items-center mt-12 space-y-10">
        {roadmapData.map((phase, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-6 md:space-x-10 p-6 md:p-8 border border-gray-800 rounded-xl bg-black/50 shadow-lg backdrop-blur-md max-w-2xl w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <FaCheckCircle
              className={`text-3xl md:text-4xl ${
                phase.completed ? "text-green-400" : "text-gray-500"
              }`}
            />
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-300">
                {phase.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                {phase.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
