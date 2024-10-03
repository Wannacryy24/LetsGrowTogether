import React, { useContext, useEffect } from 'react'
import './Topics.css'
import { SectionContext } from '../../ContextProvider/SectionContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Topics() {

  
  const{topics, setTopics, selectedTopic, setSelectedTopic , setSelectedSection , sidebar , setSideBar} = useContext(SectionContext);

  const { sectionId , title ,id} = useParams();
  
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  
  const [filteredTopics, setFilteredTopics] = useState([]);
  
  
  useEffect(()=>{
    setFilteredTopics(topics);
  },[]);
 
  useEffect(() => {
      id ? (
          fetch(`/api/${id}`)
          .then(res=>res.json())
          .then(data=>{
            // console.log(data.newData);
            setSelectedTopic(data.newData[0])
            console.log(selectedTopic,'selectedTopic');
          })
      )
      :
      title ? 
      (
        fetch(`/api/sections/${sectionId}/topics`)
        .then((response) => response.json())
        .then((data) => {
          setTopics(data.topics);
          setFilteredTopics(data.topics);
          console.log('title vale me ')
          if (data.topics.length > 0) {   
    
          // const firstTopic = data.topics[0]
          
          // setSelectedTopic(firstTopic)

          // fetchTopicContent(firstTopic.id)
          console.log('title:' , title);
          
          console.log(data);

          const foundTopic = data.topics.find(topic => topic.title.replace(/\?/g,'').toLowerCase() === title.replace(/\?/g,'').toLowerCase());

          console.log(foundTopic);
          
          setSelectedTopic(foundTopic);
          
          //     setSelectedTopic(data.topics[0]);
          //     // fetchTopicContent(); //initial first topic ke content ko fetch karega
          // //   }
          }          
        })
      )
      :
      (fetch(`/api/sections/${sectionId}/topics`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setTopics(data.topics);
          // console.log(data.topics[0]);
          setFilteredTopics(data.topics);
          
          if (data.topics.length > 0) {   
          // //   if(title){
          
          const firstTopic = data.topics[0]
          
          setSelectedTopic(firstTopic)

          fetchTopicContent(firstTopic.id)
          
          // //     const foundTopic = data.topics.find(topic=>topic.title===title);
          //     setSelectedTopic(data.topics[0]);
          //     // fetchTopicContent(); //initial first topic ke content ko fetch karega
          // //   }

          }          
        }))
        .catch((error) => console.error('Error fetching topics:', error));
  
  }, [sectionId, setTopics, setSelectedTopic,id]);

  //id se topic ka content fetch
  const fetchTopicContent = (topicId)=>{
    fetch(`/api/topics/${topicId}`)
      .then((response)=> response.json())
      .then((data)=>{
        setSelectedTopic(data.topic);
        console.log("content ki request");
    })
    .catch((error)=> console.error('error in fetching content:' , error))
  }

  
  const handleTopicClick = (topic) => {
    navigate(`/section/${sectionId}/Topics/${topic.title}`);
    fetchTopicContent(topic.id); // slected topic ke content ko fetch karega
  };

  const handleTOHome = () => {
    navigate('/');
  }

  return (
     (
        <div className="main-content">
          <div className={ sidebar ? 'sidebar' : 'sidebar-hidden' }>
           <div className='side-head'> <h2>Topics</h2><span><button onClick={handleTOHome}>&larr;</button></span>
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
