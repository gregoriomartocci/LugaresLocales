import React from 'react'
import { Switch } from "react-router";
import "../../App.css";
import LandingSection from "../LandingSection";
import Cards from '../Cards'
import Footer from '../Footer';

function Home() {
  return (
    <>
      <LandingSection />
      <Cards/>
      <Footer/>
    </>
  );
}

export default Home;
