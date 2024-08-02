import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./components/Services";
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <SpeedInsights/>
        <Header />
        <Hero />
        <Benifits />
        <Collaboration />
        <Pricing />
        <Footer />
        <ScrollToTopButton />
      </div>

      <ButtonGradient />
    </>
  );
};
export default App;
