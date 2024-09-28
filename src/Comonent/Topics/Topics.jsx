import React, { useContext } from 'react'
import './Topics.css'
import { SectionContext } from '../../ContextProvider/SectionContext';

export default function Topics({topics , selectedTopic}) {
  const{setSelectedTopic , setSelectedSection} = useContext(SectionContext);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);  
  };

  return (
     (
        <div className="main-content">
          <div className="sidebar">
           <div className='side-head'> <h2>Topics</h2><span><button onClick={()=>setSelectedSection(null)}>&larr;</button></span></div>
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
