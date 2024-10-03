import React, { useContext , useEffect, useState } from 'react';
import Image from '../SharedComponent/Image';
import Li from '../SharedComponent/Li';
import './Header.css';
import Button from '../SharedComponent/Button';
import { SectionContext } from '../../ContextProvider/SectionContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export function HeaderComponent() {
    
    const navigate = useNavigate();
    const {topics,setTopics,setSelectedSection,setSelectedTopic, setSideBar} =  useContext(SectionContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [liData , setLiData] = useState([]);
    const [searchedTopic , setSearchedTopics] =  useState({})

    useEffect(()=>{
        fetch('/api/sections')
        .then(res => res.json())
        .then(data=>setLiData(data.sections))
    },[])

    useEffect(()=>{
        fetch(`/api/topics?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
                setSearchedTopics(data.topics || []) 
                // console.log(data);
                // console.log('searchedTopic' , searchedTopic);
        })
    },[searchQuery])
    
    const handleSearchChange = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        // const filtered = searchedTopic.filter(topic =>
        //      topic.title.toLowerCase().includes(query.toLowerCase())
        //      );
        //      setFilteredTopics(filtered);
         };  
    const handleTopicClick = (topic) => {
        // console.log(topic.id,'id');
        navigate(`${topic.id}`);
        setSearchQuery('');
        setSideBar(null);
    };


    const handleClick = (sectionId) => {
        fetch(`/api/sections/${sectionId}/topics`)
            .then((response) => response.json())
            .then((data) => {
    
            setTopics(data.topics);
    
            setSelectedSection(sectionId);
    
            // console.log(sectionName);
            //HTML vo aayi hai sectionName jo Pass kiya hai 
    
            navigate(`/section/${sectionId}`);
    
    
            setSelectedTopic(data.topics[0]); //isse Frist vala phle se select hokar dikhta hai 
            //ye to useContext me hai to vha se mil jayega jab Topics component ko bulayenge
            setSideBar(true);
            })
        .catch((error) => console.error('Error fetching topics:', error));
    };

    return (
        <header>
            <div>
                <Image src="/lgt-removebg-preview.png" alt="" className={'header-logo'} onClick={()=>navigate('/')}/>
            </div>
            <div className='center-div'>
                <ul>
                    {liData.map(item => (
                        <Li key={item.id} item={item.name}  onClick={()=>handleClick(item.id)} className={'nav-links'}/>
                    ))}
                    <Li item={'More'} className={'nav-links'}/>
                </ul>
            </div>
            <div className="right-div">
                <div className="search-container">
                    <input type="search" placeholder='Search' value={searchQuery} onChange={handleSearchChange}/>
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    {searchQuery && (
                        <div className="search-results">
                            <ul>
                                {searchedTopic.length > 0 ? (
                                    searchedTopic.map(topic => (
                                        <li key={topic.id} onClick={() => handleTopicClick(topic)}>
                                            {topic.title}
                                        </li>
                                    ))
                                ) : (
                                    <li>No topics found</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
                <Button>Log in</Button>                
            </div>
        </header>
    )
}