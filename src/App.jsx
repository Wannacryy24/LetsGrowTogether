import { HeaderComponent } from "./Comonent/Header/Header";
import { LandingPage } from "./Comonent/LandingPage/landingPage";
import SectionPage from "./SectionPage/SectionPage";

export default function App(){

  return (
    <div className="container">
      <HeaderComponent/>
      <LandingPage/>
      <SectionPage/>
    </div>
  );
}