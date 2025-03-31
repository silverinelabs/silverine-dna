import react from "react";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, clasName }) => {
  return (
    <Canvas clasName={clsx("w-screen h-screen relative", clasName)}>
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default RenderModel;
