import { HeaderComponent } from "./Comonent/Header/Header";
import { LandingPage } from "./Comonent/LandingPage/landingPage";
import { SelectCourse } from "./Comonent/HomePage/HomePage";

export default function App(){
  return (
    <div className="container">
      <HeaderComponent/>
      <LandingPage/>
      <SelectCourse/>
      <div></div>
    </div>
  );
}