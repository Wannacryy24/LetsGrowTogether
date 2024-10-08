import React, { useContext, useEffect, useState } from 'react'
import './SearchComponent.css'
import { SectionContext } from '../../ContextProvider/SectionContext';
import { useNavigate } from 'react-router-dom';

export default function SearchComponent() {
    const { setSideBar , searchClicked , setSearchClicked, refInput , setTopics, setSelectedTopic, showSideBar,
        setShowSidebar,} =  useContext(SectionContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedTopic , setSearchedTopics] =  useState([]);
    useEffect(()=>{
        fetch(`/api/topics?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
                setSearchedTopics(data.topics || [])
        })
    },[searchQuery])

    useEffect(()=>{
        var input = refInput.current;
        input.focus();
    },[])

    const navigate = useNavigate();

    const handleSearchChange = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        };  


    const handleTopicClick = (topic) => {
        fetch(`/api/sections/${topic.sectionId}/topics`)
        .then((response) => response.json())
        .then((data) => {
          setTopics(data.topics);  // us section ke saare topics set karega
          setSelectedTopic(topic); // clicked topic selected set
          navigate(`/section/${topic.sectionId}/Topics/${topic.title}`);  // clicked topic par navigate karega
          setSideBar(true);  
          setSearchClicked(false);  
          setShowSidebar(false);
        })
        .catch(error => console.error('topics not found:', error));
            // navigate(`${topic.id}`);
        // setSearchQuery('');
        // setSideBar(null);
        // setSearchClicked(!searchClicked);
    };


    const hideSearchBar = (e) => {
        setSearchClicked(false);
    }


    const preventHide = (e) => {
        e.stopPropagation();
    };


  return (
    <div className='Search-main-Div' onClick={hideSearchBar}>
        <div className='search-inner-div' onClick={preventHide}>
            <input type="search" name="" id="" className='modal-input-field' placeholder='Search Docs' onChange={handleSearchChange} ref={refInput}/>
            {searchQuery && 
                        <div className='search-result-div'>
                            {searchedTopic.length > 0 ? 
                                (searchedTopic.map(topic => (
                                    <li key={topic.id} className="search-result-li" onClick={() => handleTopicClick(topic)}>
                                        {topic.title}
                                    </li>
                            ))) :
                            (<li>No topics found</li>)}
                        </div>
                }
        </div>
    </div>
  )
}
