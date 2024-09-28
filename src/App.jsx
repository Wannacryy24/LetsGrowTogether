import { useEffect, useState } from "react";
import { HeaderComponent } from "./Comonent/Header/Header";
import { LandingPage } from "./Comonent/LandingPage/landingPage";
import SectionPage from "./SectionPage/SectionPage";
import { makeServer } from "./Data/data";
import { SectionProvider } from "./ContextProvider/SectionContext";

makeServer();
export default function App(){
  
  return (
    <SectionProvider>
      <div className="container" style={{background: `url('/bg.webp')`}}>
        <HeaderComponent/>
        <LandingPage/>
      </div>
        <SectionPage/>
    </SectionProvider>
  );
}