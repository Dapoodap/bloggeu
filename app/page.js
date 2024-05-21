import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularSection from "./components/PopularSection";
import TrendingSection from "./components/TrendingSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <PopularSection/>
      <TrendingSection/>
      <Footer/>
    </main>
  );
}
