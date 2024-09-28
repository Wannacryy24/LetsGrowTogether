import { useEffect, useState } from "react";
import Button from "../Comonent/SharedComponent/Button";
import Image from "../Comonent/SharedComponent/Image";
import './SectionPage.css'
import { makeServer } from "../Data/data";
const SectionPage = () => {
  const [sections, setSections] = useState([]);
  
  useEffect(() => {
    fetch('/api/sections')
      .then((response) => response.json())
      .then((data) => {
        setSections(data);
        console.log(data, 'Fetched sections');
      })
      .catch((error) => console.error('Error fetching sections:', error));
  }, []);


  return (    
      sections.map(item=>(
        <div className="selectCourse-container" key={item.id}>
          <div className='left-div'>
            <h1>{item.name}</h1>
            <p>The language for building web pages</p>
            <Button >Learn {item.name}</Button><br></br>
          </div>
          <div className='right-div'>
            <h1>HTML Example</h1>
            <Image src="public/html-ss1.png" alt=""/><br/>
            <Button>Try it yourself</Button> 
          </div>
        </div>
      ))
      // <>
      // </>
  );
};
export default SectionPage;
