import { Button } from "@/components/ui/button";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/dna.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-6xl md:text-7xl font-[Exo]">Silverine Labs</h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl">
          Silverine is an AI-powered solution designed to analyze genetic data
          and predict BRCA1-related cancer risks. Our mission is to
          revolutionize early cancer detection through cutting-edge artificial
          intelligence.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg">Get Started</Button>
      </div>
    </div>
  );
}
