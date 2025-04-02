"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb");
  const dnaRef = useRef();

  useFrame(() => {
    if (dnaRef.current) {
      dnaRef.current.rotation.y += 0.001; // Rotasi DNA seperti bumi
    }
  });

  return (
    <group ref={dnaRef} {...props} dispose={null} position={[1, -4, -2]}>
      {/* Spiral DNA - Warna Maroon */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        rotation={[0, 0, 0]}
        scale={0.8} // Ukuran DNA diperbesar sedikit
      >
        <meshStandardMaterial metalness={0.8} roughness={0.2} color="#800000" />{" "}
        {/* Maroon */}
      </mesh>

      {/* Garis DNA - Warna Silver */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        rotation={[0, 0, 0]}
        scale={[0.6, 0.04, 0.07]} // Diperbesar sedikit agar lebih proporsional
      >
        <meshStandardMaterial metalness={1} roughness={0.1} color="#C0C0C0" />{" "}
        {/* Silver */}
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/scene-transformed.glb");
