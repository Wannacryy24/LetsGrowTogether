import React, { useContext, useEffect } from 'react'
import './Topics.css'
import { SectionContext } from '../../ContextProvider/SectionContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function Topics() {
  const{topics, setTopics, selectedTopic, setSelectedTopic , setSelectedSection} = useContext(SectionContext);
  const { sectionId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // agar topics empty hai like refresh karne par ,to  fetch karlo  topics based on sectionId

    if (topics.length === 0) {
      fetch(`/api/sections/${sectionId}/topics`)
        .then((response) => response.json())
        .then((data) => {
          setTopics(data.topics);
          if (data.topics.length > 0) {
            setSelectedTopic(data.topics[0]); 
          }
        })
        .catch((error) => console.error('Error fetching topics:', error));
    }
  }, [sectionId, setTopics, setSelectedTopic, topics]);

  const handleTopicClick = (topic) => {
    navigate(`/section/${sectionId}/Topics/${topic.title}`);
    setSelectedTopic(topic);

  };


  return (
     (
        <div className="main-content">
          <div className="sidebar">
           <div className='side-head'> <h2>Topics</h2><span><button onClick={()=>navigate('/')}>&larr;</button></span></div>
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
      )
  )
}
