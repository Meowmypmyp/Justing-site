import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ"; // Импортируем новый компонент FAQ
import CreatePortfolio from "../components/CreatePortfolio";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Portfolio Maker</title>
        <link rel="icon" href="/smallLogo.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>

      <div className="flex-grow font-bodyFont">
        <Banner />
        <AboutMe />
        <Works />
        <Testimonial />
        <CreatePortfolio />
        <FAQ />
        <Contact />
      </div>
      <Footer />

      <ScrollBtn />
    </div>
  );
};

export default Home;
