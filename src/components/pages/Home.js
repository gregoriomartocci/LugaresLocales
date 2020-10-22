import React from 'react'
import { Switch } from "react-router";
import "../../App.css";
import LandingSection from "../LandingSection";
import Cards from '../Cards'

function Home() {
  return (
    <>
      <LandingSection />
      <Cards/>
    </>
  );
}

export default Home;
