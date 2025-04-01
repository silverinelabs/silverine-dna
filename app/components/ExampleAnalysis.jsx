"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Protein from "./Protein";

const analysisData = [
  {
    title: "Hairpin Protein G",
    value: "Result",
    description:
      "The analysis of hairpin protein G mutations using Silverine provides insights into the stability, structural integrity, and effects of mutations. Below is the detailed description of the results",
  },
];

function ProteinModel() {
  const { scene } = useGLTF("/models/scene-transformed.glb");
  return <primitive object={scene} scale={2} />;
}

export default function ExampleAnalysis() {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-4xl underline font-[Exo]">Example Analysis</h2>
      </div>
      <div className="relative flex justify-center items-center min-h-screen p-6">
        <div className="relative md:grid-cols-2 gap-6 w-full max-w-6xl">
          {analysisData.map((data, index) => (
            <Card
              key={index}
              className="border border-white shadow-lg rounded-lg backdrop-blur-lg bg-white/10 bg-opacity-30 p-4"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-light text-white">
                  {data.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center space-x-6">
                {/* Deskripsi di sebelah kiri */}
                <div className="flex-1 text-left">
                  <p className="text-2xl font-medium">{data.value}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {data.description}
                  </p>
                </div>

                {/* Model 3D di sebelah kanan */}
                <div className="w-[300px] h-[300px] flex justify-center items-center bg-white/20 rounded-lg shadow-md overflow-hidden">
                  <Canvas className="w-full h-full">
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 2, 2]} intensity={1.5} />
                    <ProteinModel />
                    <OrbitControls enableZoom={true} enableRotate={true} />
                  </Canvas>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
