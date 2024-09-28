import { useEffect, useState } from "react";
import { HeaderComponent } from "./Comonent/Header/Header";
import { LandingPage } from "./Comonent/LandingPage/landingPage";
import SectionPage from "./SectionPage/SectionPage";
import { makeServer } from "./Data/data";
makeServer();
export default function App(){

  return (
    <div className="container">
      <HeaderComponent/>
      <LandingPage/>
      <SectionPage/>
    </div>
  );
}