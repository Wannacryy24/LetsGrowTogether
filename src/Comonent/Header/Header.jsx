import React, { useContext , useEffect, useState } from 'react';
import Image from '../SharedComponent/Image';
import Li from '../SharedComponent/Li';
import './Header.css';
import Button from '../SharedComponent/Button';
import { SectionContext } from '../../ContextProvider/SectionContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SearchComponent from '../SearchComponent/SearchComponent';

export function HeaderComponent() {
    
    const navigate = useNavigate();
    const {topics,setTopics,setSelectedSection,setSelectedTopic, setSideBar , searchClicked , setSearchClicked} =  useContext(SectionContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [liData , setLiData] = useState([]);
    
    

    useEffect(()=>{
        fetch('/api/sections')
        .then(res => res.json())
        .then(data=>setLiData(data.sections))
    },[])


    


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

    const handleClickSearchInput = () => {
        setSearchClicked(!searchClicked);
    }

    return (
        <header>
            {
                     searchClicked && <SearchComponent/>
                    }
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
                    <input type="search" placeholder='Search' className='Header-search' onClick={handleClickSearchInput} />
                    
                    {/* <input type="search" placeholder='Search' value={searchQuery} onChange={handleSearchChange}/> */}
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    
                </div>
                <Button>Log in</Button>                
            </div>
        </header>
    )
}