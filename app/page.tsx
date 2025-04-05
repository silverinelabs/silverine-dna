import HeroVideo from "./components/HeroVideo";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar2";
import AboutUs from "./components/AboutUs";
import FuturisticFooter from "./components/Footer";
import ExampleAnalysis from "./components/ExampleAnalysis";
import Hero from "./components/Hero";
import Partner from "./components/Partner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HeroVideo />
      <ExampleAnalysis />
      <Partner />
      <FuturisticFooter />
    </>
  );
}
