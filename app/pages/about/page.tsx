"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="py-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-white opacity-30 blur-3xl"></div>

      <motion.div
        className="relative max-w-4xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-center border border-white/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-light mb-4 drop-shadow-md">About Us</h2>
        <p className="text-md text-gray-600 mb-6 text-justify">
          {" "}
          Silverine Labs is an advanced artificial intelligence (AI) model
          designed to understand and analyze genetic codes across various life
          forms, including humans, plants, animals, and bacteria. Leveraging
          cutting-edge technology, Silverine provides deep insights into
          molecular biology and accelerates innovation in genetic research. One
          of Silverine’s key strengths is its ability to accurately predict
          protein structures and functions based on genetic sequences.
          Additionally, Silverine can be utilized to design new molecules with
          broad applications in healthcare, pharmaceuticals, and biotechnology
          industries. For instance, this model can directly predict gene
          functions without requiring additional training and can generate
          synthetic molecular complexes such as CRISPR-Cas, which play a crucial
          role in genetic engineering.{" "}
        </p>{" "}
        <p className="text-md text-gray-600 mb-6 text-justify">
          {" "}
          Silverine is available globally for researchers and developers,
          offering an AI-powered solution that is both easy to deploy and secure
          to use. With its adaptive intelligence and analytical capabilities,
          Silverine is expected to revolutionize molecular biology research,
          paving the way for breakthroughs in genetic code comprehension and
          manipulation, while driving significant advancements in gene-based
          medicine.{" "}
        </p>{" "}
        <p className="text-lg text-gray-600 mb-6 text-justify">
          {" "}
          As part of our ongoing mission, Silverine continues to enhance its
          deep learning algorithms to improve the accuracy and speed of genetic
          analysis. By integrating with cloud-based platforms and providing
          robust data processing tools, we enable a wide range of researchers to
          access and apply Silverine’s capabilities. Whether for academic
          research, drug development, or biotechnology innovations, Silverine
          offers scalable and impactful solutions to some of the most pressing
          challenges in genetic science.{" "}
        </p>
        <a href="/" className="w-full">
          <Button
            className="bg-teal-600 text-white hover:bg-teal-500 transition-all py-2 mt-6 rounded-lg shadow-lg transform hover:scale-105"
          >
            Back
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
