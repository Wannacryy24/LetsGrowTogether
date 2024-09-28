import React from 'react';
import Image from '../SharedComponent/Image';
import Li from '../SharedComponent/Li';
import './Header.css';

const liData = ['Job Seeker', 'Enterprise', 'Training', 'Pricing'];

export function HeaderComponent() {
    return (
        <header>
            <div>
                <Image src="https://myinterviewpractice.com/images/mipLogoNew.svg" alt="" />
            </div>
            <div>
                <ul>
                    {liData.map(item => (
                        <Li className={item} key={item} item={item}/>
                    ))}
                </ul>
            </div>
            <div className="right-div">
                <button>Sign In</button>
                <button>Start For Free</button>
            </div>
        </header>
    )
}