"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ProteinModel() {
  const { scene } = useGLTF("/models/scene-transformed.glb");
  return <primitive object={scene} scale={2} />;
}

export default function AnalysisCard() {
  return (
    <>
      <div className="container mx-auto">
        <Card className="p-6 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-semibold text-black font-light">
              Hairpin Protein G Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Description */}
            <div className="flex-1 text-left space-y-3">
              <p className="text-2xl font-medium text-blue-400">
                Structural Analysis Report
              </p>
              <div className="text-md text-gray-500 leading-relaxed space-y-1">
                <p>
                  <strong>Target Protein:</strong> Hairpin Protein G
                </p>
                <p>
                  <strong>PDB Reference:</strong> (e.g., 1PGA)
                </p>
                <p>
                  <strong>Organism:</strong> <i>Streptococcus sp.</i>
                </p>
                <p>
                  <strong>Classification:</strong> Immunoglobulin-binding
                  protein
                </p>
              </div>
              <div className="text-md text-gray-500 leading-relaxed space-y-1">
                <p className="font-semibold">Structural Insights</p>
                <p>
                  <strong>Fold Type:</strong>β-sheet dominant with β-hairpin
                  motif
                </p>
                <p>
                  <strong>Secondary Structure Composition:</strong>
                </p>
                <ul className="list-disc list-inside">
                  <li>β-strands: 3</li>
                  <li>α-helices: 1 (if applicable)</li>
                  <li>Loops & Turns: Prominent β-hairpin formation</li>
                </ul>
                <p>
                  <strong>Observed Motif:</strong> Classic β-hairpin stabilized
                  by hydrogen bonds
                </p>
                <p>
                  <strong>Stabilization Forces:</strong> Hydrogen bonding, Van
                  der Waals interactions
                </p>
              </div>
              <div className="text-md text-gray-500 leading-relaxed space-y-1">
                <p className="font-semibold">Functional Annotations</p>
                <p>
                  <strong>Primary Function:</strong> Immunoglobulin (IgG)
                  binding
                </p>
                <p>
                  <strong>Binding Interface:</strong> Interaction occurs at the
                  Fc region of IgG
                </p>
                <p>
                  <strong>Identified Binding Residues:</strong>
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Key hydrophobic residues involved: (e.g., Tyr, Phe, Leu)
                  </li>
                  <li>
                    Charged residues contributing to stability: (e.g., Arg, Asp)
                  </li>
                </ul>
              </div>
              <div className="text-md text-gray-500 leading-relaxed space-y-1">
                <p className="font-semibold">Evolutionary Insights</p>
                <p>
                  <strong>Sequence Homology:</strong> Highly conserved among
                  bacterial Ig-binding domains
                </p>
                <p>
                  <strong>Evolutionary Adaptation:</strong> Optimized for host
                  immune evasion
                </p>
              </div>
              <div className="text-md text-gray-500 leading-relaxed space-y-1">
                <p className="font-semibold">Stability & Folding Prediction</p>
                <p>
                  <strong>Predicted Stability Index:</strong> High
                </p>
                <p>
                  <strong>Folding Rate:</strong> Fast (β-hairpin structures fold
                  quickly due to hydrogen bonding)
                </p>
                <p>
                  <strong>Mutation Sensitivity:</strong> Certain mutations in
                  the β-hairpin region may reduce IgG affinity
                </p>
              </div>
              <div className="text-md text-gray-500 leading-relaxed space-y-1">
                <p className="font-semibold">Potential Applications</p>
                <ul className="list-disc list-inside">
                  <li>
                    Biotechnological Use: Engineering fusion proteins for
                    antibody purification
                  </li>
                  <li>
                    Drug Development: Potential target for disrupting bacterial
                    immune evasion mechanisms
                  </li>
                </ul>
              </div>
            </div>
            {/* 3D Model */}
            <div className="w-[600px] h-[600px] flex justify-center items-center bg-black rounded-xl shadow-md overflow-hidden">
              <Canvas className="w-full h-full">
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 2, 2]} intensity={1.2} />
                <ProteinModel />
                <OrbitControls enableZoom={true} enableRotate={true} />
              </Canvas>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
