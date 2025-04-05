"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import DNA from "./Dna"; // Komponen 3D DNA
import Chat from "./ChatSilverine";

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
      <Chat />
    </div>
  );
}
