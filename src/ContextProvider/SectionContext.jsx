import { createContext, useReducer } from 'react';

export const SectionContext = createContext();

const initialState = {
  section: null, 
  topic: null   
};


function sectionReducer(state, action) {
  switch (action.type) {
    case 'Set_Section':
      return { ...state, section: action.section, topic: null }; 
    case 'Set_Topic':
      return { ...state, topic: action.topic };
    default:
      return state;
  }
}

export const SectionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sectionReducer, initialState);

  return (
    <SectionContext.Provider value={{ state, dispatch }}>
      {children}
    </SectionContext.Provider>
  );
};
