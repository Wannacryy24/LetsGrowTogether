import { HeaderComponent } from "./Comonent/Header/Header";
import { LandingPage } from "./Comonent/LandingPage/landingPage";
import { contentData } from "./Data/data";
export default function App(){
  return (
    <div className="container">
      <HeaderComponent/>
      <LandingPage/>
      
    </div>
    
  );
}