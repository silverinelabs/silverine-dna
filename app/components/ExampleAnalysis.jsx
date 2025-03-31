"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const analysisData = {
  title: "Accuracy",
  value: "95%",
  description: "Model accuracy based on test data",
};

function ProteinModel() {
  const { scene } = useGLTF("/models/scene-transformed.glb");
  return <primitive object={scene} scale={2} />;
}

export default function ExampleAnalysis() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="border border-gray-300 w-full max-w-3xl shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-light font-light">
            Analysis Result
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full h-[400px] flex justify-center items-center bg-white rounded-lg shadow-md overflow-hidden">
            <Canvas className="w-full h-full">
              <ambientLight intensity={2} />
              <directionalLight position={[2, 2, 2]} intensity={1.5} />
              <ProteinModel />
              <OrbitControls enableZoom={true} enableRotate={true} />
            </Canvas>
          </div>
          <div className="text-center">
            <p className="text-2xl font-medium">Hairpin Protein G</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              The analysis of hairpin protein G mutations using Silverine
              provides insights into the stability, structural integrity, and
              effects of mutations. Below is the detailed description of the
              results:
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
