import { useEffect, useState } from "react";
import { HeaderComponent } from "./Comonent/Header/Header";
import { LandingPage } from "./Comonent/LandingPage/landingPage";
import SectionPage from "./SectionPage/SectionPage";
import { makeServer } from "./Data/data";
import { SectionProvider } from "./ContextProvider/SectionContext";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./Comonent/PageNotFound/PageNotFound";
import Topics from "./Comonent/Topics/Topics";
import Footer from "./Footer/Footer";
import Testing from "./Testing";

makeServer();
export default function App(){
  
  return (
    <Router>
      <HeaderComponent/>
      <Routes>
        <Route 
          path='/'
          element={
            <>
              <div className="container" >
                <LandingPage/>
                </div>
                <SectionPage/>
                <Footer/>
            </>
          }
        />
        <Route path="*" element={<PageNotFound></PageNotFound>}/>
        {/* <Route path='/sections' element={<Topics></Topics>}/> */}
        <Route path="/section/:sectionId" element={<Topics />} />
        <Route path="/section/:sectionId/Topics/:title" element={<Topics/>}/>
        <Route path=":id" element={<Topics/>}/>
      </Routes>
    </Router>
  );
}