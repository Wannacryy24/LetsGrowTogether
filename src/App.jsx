import { HeaderComponent } from "./Comonent/Header/Header";
import { LandingPage } from "./Comonent/LandingPage/landingPage";

export default function App(){
  return (
    <div className="container">
      <HeaderComponent/>
      <LandingPage/>
      {/* <SelectCourse/> */}
      <div></div>
    </div>
    
  );
}