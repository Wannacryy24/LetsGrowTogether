import './Header.css'

export function HeaderComponent(){
    return(
        <header>
            <div>
                <img src="https://myinterviewpractice.com/images/mipLogoNew.svg" alt="" />

                
            </div>
            <div>
                <ul>
                    <li>Job Seeker</li>
                    <li>Enterprise</li>
                    <li>Training</li>
                    <li>Pricing</li> 
                </ul>
            </div>
            <div className="right-div">
                <button>Sign In</button>
                <button>Start For free</button>
            </div>
        </header>
    )
}