export default function Header(){
    return(
        <header className="header">
        <div className="logo">
          <img src="https://myinterviewpractice.com/images/mipLogoNew.svg" alt="My Interview Practice" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Job Seekers</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>
        <div className="head-buttons">
          <a href="#" className="sign-in">Sign In</a>
          <button className="start-free-btn">Start for Free</button>
        </div>
      </header>
    )
}