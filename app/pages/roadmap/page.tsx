export default function Roadmap() {
  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-light mb-4" id="roadmap">
          Roadmap for Silverine Labs
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          The roadmap for Silverine Labs outlines the key milestones and goals
          for the development and deployment of this revolutionary AI-powered
          solution in genetic research, biotechnology, and healthcare. The
          following phases will guide the evolution of Silverine's capabilities,
          ensuring its impact on genetic research and gene-based medicine.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Phase 1: Early Development */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-red-800 mb-4">
            Phase 1: Early Development
          </h3>
          <p className="text-lg text-gray-500 mb-6">
            In this phase, Silverine Labs focuses on developing the core AI
            algorithms for genetic sequence analysis. Key achievements include
            the creation of a model capable of understanding genetic data from
            humans, animals, plants, and bacteria, as well as the first
            iterations of protein structure predictions.
          </p>
          <ul className="list-disc pl-6 text-gray-500">
            <li>AI algorithm development for genetic data analysis</li>
            <li>
              Initial protein structure and function prediction capabilities
            </li>
            <li>
              Prototyping gene function prediction without additional training
            </li>
          </ul>
        </div>

        {/* Phase 2: Core Capabilities Enhancement */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-red-800 mb-4">
            Phase 2: Core Capabilities Enhancement
          </h3>
          <p className="text-lg text-gray-500 mb-6">
            The second phase focuses on enhancing Silverine's core capabilities,
            including improving accuracy and scaling its molecular design
            functionalities. This phase also involves building secure and
            scalable infrastructure to deploy the solution to research labs and
            biotech companies worldwide.
          </p>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Improvement of protein structure and function prediction</li>
            <li>
              Scaling molecular design features (e.g., CRISPR-Cas, gene-editing
              tools)
            </li>
            <li>Secure and scalable infrastructure development</li>
          </ul>
        </div>

        {/* Phase 3: Industry Integration & Global Deployment */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-red-800 mb-4">
            Phase 3: Industry Integration & Global Deployment
          </h3>
          <p className="text-lg text-gray-500 mb-6">
            In Phase 3, Silverine Labs will be integrated with leading
            pharmaceutical companies, biotech firms, and research institutions.
            The platform will offer solutions for gene-based medicine, drug
            development, and genetic engineering, with a focus on providing
            global accessibility and security for researchers worldwide.
          </p>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Collaboration with pharmaceutical and biotech industries</li>
            <li>Global deployment for research labs and universities</li>
            <li>
              Focus on gene-based medicine and genetic engineering applications
            </li>
          </ul>
        </div>

        {/* Phase 4: Future Directions */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-red-800 mb-4">
            Phase 4: Future Directions
          </h3>
          <p className="text-lg text-gray-500 mb-6">
            Phase 4 envisions the continued evolution of Silverine Labs,
            introducing new AI-driven tools for molecular research. The focus
            will be on expanding the platform's ability to support personalized
            medicine, accelerate drug discovery, and advance genetic engineering
            techniques.
          </p>
          <ul className="list-disc pl-6 text-gray-500">
            <li>Expansion of personalized medicine capabilities</li>
            <li>Support for advanced drug discovery and gene therapies</li>
            <li>Continued AI advancements in molecular biology</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
