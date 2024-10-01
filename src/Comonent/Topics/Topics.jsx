import React, { useContext, useEffect } from 'react'
import './Topics.css'
import { SectionContext } from '../../ContextProvider/SectionContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Topics() {
  const{topics, setTopics, selectedTopic, setSelectedTopic , setSelectedSection} = useContext(SectionContext);
  const { sectionId , title} = useParams();
    console.log(sectionId);
  const navigate = useNavigate();


  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [filteredTopics, setFilteredTopics] = useState([]);
  useEffect(() => {
    // agar topics empty hai like refresh karne par ,to  fetch karlo  topics based on sectionId
    if (topics.length === 0) {
      fetch(`/api/sections/${sectionId}/topics`)
        .then((response) => response.json())
        .then((data) => {
          setTopics(data.topics);
          console.log(data.topics[0]);
          setFilteredTopics(data.topics);
          if (data.topics.length > 0) {   
            if(title){
              const foundTopic = data.topics.find(topic=>topic.title===title);
              setSelectedTopic(foundTopic || data.Topics[0]);
              console.log('done');
            }
            else{
              setSelectedTopic(data.topics[0]);
              console.log('done');
            }
          }          
        })
        .catch((error) => console.error('Error fetching topics:', error));
    }
  }, [sectionId, setTopics, setSelectedTopic, topics]);

   //  search input changes ki handling
   const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // search query ke base par filter
    const filtered = topics.filter((topic) =>
      topic.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTopics(filtered);
    console.log(filteredTopics, 'filter')
  };
  
  const handleTopicClick = (topic) => {
    navigate(`/section/${sectionId}/Topics/${topic.title}`);
    setSelectedTopic(topic);
  };

  const handleTOHome = () => {
    navigate('/');
  }
  return (
     (
        <div className="main-content">
          <div className="sidebar">
           <div className='side-head'> <h2>Topics</h2><span><button onClick={handleTOHome}>&larr;</button></span></div>
           
           <div className="search-container">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
            <ul>
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <li key={topic.id} onClick={() => handleTopicClick(topic)}>
                {topic.title}
              </li>
            ))
          ) : (
            <li>No topics found</li>
          )}
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
