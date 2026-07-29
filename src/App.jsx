import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Gallery />
      <Services />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;