import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bezawit Mamo | Portfolio</title>
      </Head>
      <Header />
      <Hero />
       <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>

    </>
  );
}
