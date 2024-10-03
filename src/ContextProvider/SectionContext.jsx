import { createContext, useContext, useReducer, useRef, useState } from 'react';
export const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const ref = useRef();
  const [sections, setSections] = useState([]);  
  const [selectedSection, setSelectedSection] = useState(null); 
  const [topics, setTopics] = useState([]);  
  const [selectedTopic, setSelectedTopic] = useState(null);  
  const [ sidebar , setSideBar ] = useState(true);

  return (
    <SectionContext.Provider value={{ sections, setSections ,selectedTopic, setSelectedTopic,selectedSection, setSelectedSection ,topics, setTopics, ref,sidebar , setSideBar}}>
      {children}
    </SectionContext.Provider>
  );
};
