// components
import { Navbar } from "components";
import Hero from "./Hero/Hero";
import About from "./About/About";
import WhoAreWe from "./WhoWeAre/WhoWeAre";
import HowItWork from "./HowItWork/HowItWork";
import WhyChoose from "./WhyChoose/WhyChoose";
import Features from "./Features/Features";
import Testimonial from "./Testimonials/Testimonial";

const AboutContent = () => {
  return (
    <>
       <Navbar />
       <Hero/>
       <About/>
       <WhoAreWe/>
       <HowItWork/>
       <WhyChoose/>
       <Features/>
       <Testimonial/>
    </>
  );
};

export default AboutContent;
