import { useContext, useEffect, useState } from "react";
import Button from "../Comonent/SharedComponent/Button";
import Image from "../Comonent/SharedComponent/Image";
import './SectionPage.css';
import { makeServer } from "../Data/data";
import Topics from "../Comonent/Topics/Topics";
import { SectionContext } from "../ContextProvider/SectionContext";


makeServer();
const SectionPage = () => {

const {sections, setSections ,selectedTopic, setSelectedTopic,selectedSection, setSelectedSection ,topics, setTopics} =  useContext(SectionContext);

  useEffect(() => {
    fetch('/api/sections')
      .then((response) => response.json())
      .then((data) => {
        setSections(data.sections);   
      })
      .catch((error) => console.error('Error fetching sections:', error));
  }, []);

  const handleLearnClick = (sectionId) => {
    fetch(`/api/sections/${sectionId}/topics`)
      .then((response) => response.json())
      .then((data) => {
        setTopics(data.topics);   
        setSelectedSection(sectionId);  
        setSelectedTopic(data.topics[0]);  
      })
      .catch((error) => console.error('Error fetching topics:', error));
  };


  return (
    <div className="page-container">
      {
        
        selectedSection ? 
        
        <Topics topics={topics} selectedTopic={selectedTopic}/> :
        
        sections.map((item) => (
          <div className="selectCourse-container" key={item.id}>
            <div className="left-div">
              <h1>{item.name}</h1>
              <p>The language for building web pages</p>
              <Button onClick={() => handleLearnClick(item.id)}>Learn {item.name}</Button><br />
            </div>
            <div className="right-div">
              <h1>{item.name} Example</h1>
              <Image src={`/html-ss1.png`} alt="" /><br />
              <Button>Try it yourself</Button>
            </div>
          </div>
        ))
      }
    </div>
  );
};
export default SectionPage;
