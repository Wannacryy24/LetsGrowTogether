import { useEffect, useState } from "react";
import Button from "../Comonent/SharedComponent/Button";
import Image from "../Comonent/SharedComponent/Image";
import './SectionPage.css';
import { makeServer } from "../Data/data";


makeServer();

const SectionPage = () => {
  const [sections, setSections] = useState([]);  
  const [selectedSection, setSelectedSection] = useState(null); 
  const [topics, setTopics] = useState([]);  
  const [selectedTopic, setSelectedTopic] = useState(null);  
  

 
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
        setSelectedTopic(null);  
      })
      .catch((error) => console.error('Error fetching topics:', error));
  };


  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);  
  };

  return (
    <div className="page-container">
      {sections.map((item) => (
        <div className="selectCourse-container" key={item.id}>
          <div className="left-div">
            <h1>{item.name}</h1>
            <p>The language for building web pages</p>
            <Button onClick={() => handleLearnClick(item.id)}>Learn {item.name}</Button><br />
          </div>
          <div className="right-div">
            <h1>{item.name} Example</h1>
            <Image src={`public/html-ss1.png`} alt="" /><br />
            <Button>Try it yourself</Button>
          </div>
        </div>
      ))}

      {selectedSection && (
        <div className="main-content">
          <div className="sidebar">
            <h2>Topics</h2>
            <ul>
              {topics.map((topic) => (
                <li key={topic.id} onClick={() => handleTopicClick(topic)}>
                  {topic.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="topic-detail">
            {selectedTopic ? (
              <div>
                <h2>{selectedTopic.title}</h2>
                <p>{selectedTopic.content}</p>
              </div>
            ) : (
              <p>Select a topic to view details</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionPage;
