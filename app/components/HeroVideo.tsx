"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import DNA from "./Dna"; // Komponen 3D DNA

export default function Hero3D() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas 3D */}
      <Canvas className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Suspense fallback={null}>
          <Stage>
            <DNA />
          </Stage>
          <OrbitControls enableZoom={true} enableRotate={true} />
        </Suspense>
      </Canvas>

      {/* Branding */}
      <div className="absolute top-6 left-6 text-black text-2xl tracking-wide bg-gray/20 px-4 py-2 rounded-lg shadow-lg">
        Silverine Labs
      </div>

      {/* Whitepaper Card */}
      <div className="absolute top-20 left-6 space-y-4 max-w-xs">
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg text-black">
          <h3 className="text-xl mb-4">Whitepaper</h3>
          <p className="text-xs text-gray-500 text-justify mb-4">
            Silverine is a Deep Learning model designed to process genome sequence
            data on a large scale. This algorithm uses deep learning techniques
            to identify mutation patterns and determine the correlation between
            genetic changes and antibiotic resistance levels.
          </p>
          <a
            href="/path/to/whitepaper.pdf" // Replace this with the actual link to your whitepaper
            className="inline-block bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-all"
            download
          >
            Download Whitepaper
          </a>
        </div>
      </div>

      {/* Card Penjelasan Silverine */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-xs text-black">
        <h2 className="text-2xl">Silverine Labs</h2>
        <p className="mt-2 text-xs text-gray-500 text-justify">
          Silverine Labs is an AI-based innovation center focused on research
          and development of advanced technology in the fields of biotechnology
          and digital health.
        </p>
      </div>

      {/* Roadmap Container */}
      <div className="absolute top-80 left-6 space-y-4 max-w-xs">
        {/* Roadmap Cards */}
        <div className="space-y-1">
          {/* Fase 1 */}
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg text-black">
            <h3 className="text-xl mb-2">Phase 1 - Q1 2025</h3>
            <p className="text-sm text-gray-500">
              Initial project planning and research phase.
            </p>
          </div>
          {/* Fase 2 */}
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg text-black">
            <h3 className="text-xl mb-2">Phase 2 - Q2 2025</h3>
            <p className="text-sm text-gray-500">
              Development of the first prototype and testing.
            </p>
          </div>
          {/* Fase 3 - Active Phase with Hover Effect */}
          <div className="bg-teal-500 backdrop-blur-md p-4 rounded-2xl shadow-lg text-white group">
            <h3 className="text-xl mb-2 ">Phase 3 - Q3 2025</h3>
            <p className="text-sm text-white">
              Beta release and user feedback gathering.
            </p>
          </div>
          {/* Fase 4 */}
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg text-black">
            <h3 className="text-xl mb-2">Phase 4 - Q4 2025</h3>
            <p className="text-sm text-gray-500">Full product integration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
