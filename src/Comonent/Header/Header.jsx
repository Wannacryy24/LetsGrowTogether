import React, { useContext } from 'react';
import Image from '../SharedComponent/Image';
import Li from '../SharedComponent/Li';
import './Header.css';
import Button from '../SharedComponent/Button';
import { SectionContext } from '../../ContextProvider/SectionContext';

const liData = ['Job Seeker', 'Enterprise', 'Training', 'Pricing'];

export function HeaderComponent() {
    const {selectedSection} = useContext(SectionContext);
    return (
        <header>
            <div>
                <Image src="public/lgt-removebg-preview.png" alt="" className={'header-logo'}/>
            </div>
            <div>
                <ul>
                    {liData.map(item => (
                        <Li className={item} key={item} item={item}/>
                    ))}
                </ul>
            </div>
            <div className="right-div">
                <div className="search-container">
                    <input type="search" placeholder='Search' />
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
                <Button>Log in</Button>                
            </div>
        </header>
    )
}