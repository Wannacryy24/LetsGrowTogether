import './Footer.css';

export default function Footer(){
    return(
        <footer class="footer">
        <div class="footer-container">
          <div class="footer-section">
            <h2 class="footer-heading">Learn With Us</h2>
            <p class="footer-description">Your one-stop platform for mastering HTML, CSS, JavaScript, and React through well-curated tutorials.</p>
          </div>
          
          <div class="footer-section">
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#">HTML Tutorials</a></li>
              <li><a href="#">CSS Tutorials</a></li>
              <li><a href="#">JavaScript Tutorials</a></li>
              <li><a href="#">React Tutorials</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3 class="footer-heading">Follow Us</h3>
            <div class="social-icons">
              <a href="#"><img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="Facebook" /></a>
              <a href="#"><img src="https://freelogopng.com/images/all_img/1658588965instagram-logo-png-transparent-background.png" alt="Twitter" /></a>
              <a href="#"><img src="https://th.bing.com/th/id/R.b757f2bca8039d4a08882d38f4c1b8f0?rik=l1HvTt1fIsaMmQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftwitter-logo-png-logo-twitter-in-png-2500.png&ehk=qSLAOlUdmImpXk6Jj6NUgKgK5gv%2fq1TGUwvlzdeBiNA%3d&risl=&pid=ImgRaw&r=0" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 LearnWithUs. All rights reserved.</p>
        </div>
      </footer>
    )
}

