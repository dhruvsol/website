import { HeroSection } from "../components/HeroSection";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <HeroSection />
    </>
  );
}
