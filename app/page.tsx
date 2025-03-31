import HeroVideo from "./components/HeroVideo";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import FuturisticFooter from "./components/Footer";
import ExampleAnalysis from "./components/ExampleAnalysis";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroVideo />
      <AboutUs />
      <ExampleAnalysis />
      <FuturisticFooter />
    </>
  );
}
