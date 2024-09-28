import React from 'react';
import Image from '../SharedComponent/Image';
import Li from '../SharedComponent/Li';
import './Header.css';
import Button from '../SharedComponent/Button';

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
                <Button>Sign In</Button>
                <Button>Start For Free</Button>
            </div>
        </header>
    )
}