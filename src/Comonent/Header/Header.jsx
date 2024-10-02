import React, { useContext , useState } from 'react';
import Image from '../SharedComponent/Image';
import Li from '../SharedComponent/Li';
import './Header.css';
import Button from '../SharedComponent/Button';
import { SectionContext } from '../../ContextProvider/SectionContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';


let liData = [
    { id: '1', name: 'HTML' , img:'html.png'},
    { id: '2', name: 'CSS' , img:'css.png'},
    { id: '3', name: 'JavaScript' , img:'javascript.png'},
    { id: '4', name: 'React' , img:'react.png'},
  ];

export function HeaderComponent() {
    const navigate = useNavigate();
    const {sections, setSections ,selectedTopic, setSelectedTopic, setSelectedSection ,topics, setTopics} =  useContext(SectionContext);
    
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTopics, setFilteredTopics] = useState([]);

    useEffect(()=>{
        
    },[searchQuery])
    
    const handleSearchChange = (e)=>{
       const query = e.target.value;
       setSearchQuery(query);
       const filtered = topics.filter(topic =>
            topic.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredTopics(filtered);
        };

        const handleTopicClick = (topic) => {
            navigate(`/section/${topic.sectionId}/Topics/${topic.title}`);
            setSelectedSection(topic.sectionId);
            setSelectedTopic(topic); 
            setSearchQuery('');
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
    
          })
          .catch((error) => console.error('Error fetching topics:', error));
      };

    const {selectedSection} = useContext(SectionContext);
    return (
        <header>
            <div>
                <Image src="/lgt-removebg-preview.png" alt="" className={'header-logo'} onClick={()=>navigate('/')}/>
            </div>
            <div>
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
                                {filteredTopics.length > 0 ? (
                                    filteredTopics.map(topic => (
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

