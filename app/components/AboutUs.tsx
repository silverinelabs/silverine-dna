import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-light font-[Exo] underline mb-4">
          About Us
        </h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-500 mb-6 font-light text-justify font-[Roboto]">
              Silverine Labs is a research laboratory focused on applying AI to
              genomics, similar to the approach used in NVIDIA's Evo 2.
              Silverine Labs develops advanced AI models capable of
              understanding and predicting genetic codes across various species,
              including humans, plants, and microorganisms. With cutting-edge
              AI-driven processing, Silverine Labs can analyze large-scale
              genomic data, enabling the identification of genetic mutations
              that may lead to diseases. This technology is also utilized in
              genetic engineering to design new genomes and develop innovative
              biotechnological solutions. The AI models developed by Silverine
              Labs are integrated with GPU-based computing platforms, leveraging
              architectures similar to NVIDIA BioNeMo to facilitate fast and
              accurate analysis in biomolecular research. This opens up
              significant opportunities in healthcare, pharmaceuticals, and
              gene-based therapies.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-500 mb-6 font-light text-justify font-[Roboto]">
              Silverine Labs is a research laboratory focused on applying AI to
              genomics, similar to the approach used in NVIDIA's Evo 2.
              Silverine Labs develops advanced AI models capable of
              understanding and predicting genetic codes across various species,
              including humans, plants, and microorganisms. With cutting-edge
              AI-driven processing, Silverine Labs can analyze large-scale
              genomic data, enabling the identification of genetic mutations
              that may lead to diseases. This technology is also utilized in
              genetic engineering to design new genomes and develop innovative
              biotechnological solutions. The AI models developed by Silverine
              Labs are integrated with GPU-based computing platforms, leveraging
              architectures similar to NVIDIA BioNeMo to facilitate fast and
              accurate analysis in biomolecular research. <a href="" className="text-blue-500">read more..</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
