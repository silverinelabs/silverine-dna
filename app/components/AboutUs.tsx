"use client";
import { motion } from "framer-motion";

export default function AboutSilverine() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <div className="container mx-auto text-center text-red-800 mb-12">
        <motion.h2
          className="text-5xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Silverine
        </motion.h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          The Future of Genetic Intelligence
        </p>
      </div>

      <div className="container mx-auto px-6 flex justify-center">
        <motion.div
          className="w-full md:max-w-4xl backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl shadow-xl p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Silverine Labs is an advanced AI model engineered to decode genetic
            sequences across various life forms. Using cutting-edge technology,
            Silverine enables deep insights into molecular biology, pushing the
            boundaries of innovation in genetic research.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With its predictive power, Silverine can map protein structures and
            functions with remarkable accuracy. It also facilitates the design
            of synthetic molecules, revolutionizing healthcare, pharmaceuticals,
            and biotech industries.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Available globally for researchers and developers, Silverine offers
            an AI-powered solution that is adaptive, secure, and easy to deploy.
            Its intelligence is set to redefine molecular biology research,
            unlocking new possibilities in gene-based medicine and synthetic
            biology.
          </p>
          <a
            href="/pages/roadmap"
            className="text-red-800 hover:text-blue-400 transition duration-300"
          >
            Read more →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
