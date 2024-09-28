import './HomePage.css'
export function SelectCourse(){
    return(
        <div className="selectCourse-container">
            <div className='left-div'>
                <h1>HTML</h1>
                <p>The language for building web pages</p>
                <button>Learn HTML</button><br></br>
                <button>Video Tutorial</button><br></br>
                <button>HTML Reference</button>
            </div>
            <div className='right-div'>
                <h1>HTML Example</h1>
                <img src="public/html-ss1.png" alt=""/><br/>
                <button>Try it yourself</button> 
            </div>
        </div>
    )
}