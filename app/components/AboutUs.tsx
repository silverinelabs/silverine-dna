export default function AboutUs() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-light mb-4" id="aboutUs">
          About Us
        </h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-500 mb-6 font-light text-justify">
              Silverine Labs is an advanced artificial intelligence (AI) model
              designed to understand and analyze genetic codes across various
              life forms, including humans, plants, animals, and bacteria.
              Leveraging cutting-edge technology, Silverine provides deep
              insights into molecular biology and accelerates innovation in
              genetic research. One of Silverine’s key strengths is its ability
              to accurately predict protein structures and functions based on
              genetic sequences. Additionally, Silverine can be utilized to
              design new molecules with broad applications in healthcare,
              pharmaceuticals, and biotechnology industries. For instance, this
              model can directly predict gene functions without requiring
              additional training and can generate synthetic molecular complexes
              such as CRISPR-Cas, which play a crucial role in genetic
              engineering.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-500 mb-6 font-light text-justify font-light">
              Silverine is available globally for researchers and developers,
              offering an AI-powered solution that is both easy to deploy and
              secure to use. With its adaptive intelligence and analytical
              capabilities, Silverine is expected to revolutionize molecular
              biology research, paving the way for breakthroughs in genetic code
              comprehension and manipulation, while driving significant
              advancements in gene-based medicine.{" "}
              <a href="" className="text-blue-500">
                read more..
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
