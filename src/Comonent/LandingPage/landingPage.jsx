import { useContext, useEffect, useRef } from 'react'
import './LandingPage.css'
import { SectionContext } from '../../ContextProvider/SectionContext'

export function LandingPage(){
  const {selectedSection , ref} = useContext(SectionContext);
  console.log(ref.current);
    return(
        !selectedSection && 
        <div className="landingPage-div" ref={ref}>
            <h1>Learn and Get <span> hired faster </span> with our interview prepration tool</h1>
            <p>Practice for any job position to boost your confidence and skills with unlimited, on-demand interview simulations.</p>
            <button>Start Practicing for free</button>
            <button>Learn More</button>
        </div>
    )
} 