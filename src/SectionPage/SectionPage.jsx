import Button from "../Comonent/SharedComponent/Button";
import Image from "../Comonent/SharedComponent/Image";
import './SectionPage.css'
const sections = ['HTML', 'CSS', 'JavaScript', 'React'];
const SectionPage = () => {
  return (
      sections.map(item=>(
        <div className="selectCourse-container" key={item}>
          <div className='left-div'>
            <h1>{item}</h1>
            <p>The language for building web pages</p>
            <Button>Learn {item}</Button>
          </div>
          <div className='right-div'>
            <h1>HTML Example</h1>
            <Image src="public/html-ss1.png" alt=""/>
            <Button>Try it yourself</Button> 
          </div>
        </div>
      ))
  );
};
export default SectionPage;
