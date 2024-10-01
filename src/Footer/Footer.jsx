import { useState } from 'react';
import './Footer.css';
import { useEffect } from 'react';

export default function Footer(){
  const [cursorPosition , setCursorPosition] = useState({x:0 , y:0});
  const [footerDimenstion , setFooterDimention] = useState(null);


  const handleMouseMove = (e) => {
    if(footerDimenstion){
      const x = e.clientX - footerDimenstion.left;
      const y = e.clientY - footerDimenstion.top;

      if(x>=0 && y>=0 && x <= footerDimenstion.width && y<=footerDimenstion.height){
        setCursorPosition({x,y})
      }
    }
  }

  useEffect(()=>{
    const footerElement = document.querySelector('.footer');

    if(footerElement){
      const rect = footerElement.getBoundingClientRect();
      setFooterDimention(rect);
    }

   footerElement.addEventListener('mousemove',handleMouseMove); 

   return ()=> {
    if (footerElement) {
      footerElement.removeEventListener('mousemove', handleMouseMove);
    }
   }

  },[]);

  
    return(
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2 className="footer-heading">Learn With Us</h2>
            <p className="footer-description">Your one-stop platform for mastering HTML, CSS, JavaScript, and React through well-curated tutorials.</p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">HTML Tutorials</a></li>
              <li><a href="#">CSS Tutorials</a></li>
              <li><a href="#">JavaScript Tutorials</a></li>
              <li><a href="#">React Tutorials</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="#"><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="Facebook" /></a>
              <a href="#"><img src="https://freelogopng.com/images/all_img/1658588965instagram-logo-png-transparent-background.png" alt="Twitter" /></a>
              <a href="#"><img src="https://th.bing.com/th/id/R.b757f2bca8039d4a08882d38f4c1b8f0?rik=l1HvTt1fIsaMmQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftwitter-logo-png-logo-twitter-in-png-2500.png&ehk=qSLAOlUdmImpXk6Jj6NUgKgK5gv%2fq1TGUwvlzdeBiNA%3d&risl=&pid=ImgRaw&r=0" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 LearnWithUs. All rights reserved.</p>
        </div>
        {/* <div 
        className='cursor'
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          width:'10px',
          height:'10px',
          backgroundColor:'red',
          borderRadius:'50%',
          pointerEvents:'none'
        }} 
        >
        </div> */}
      </footer>
    )
}

