class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <footer id="footer" class="footer dark-background">
          <div class="container footer-top">
            <div class="row gy-4">
              <div class="col-lg-4 col-md-6 footer-about">
                <a href="index.html" class="logo d-flex align-items-center">
                  <span class="sitename">Cogitan Pvt. Ltd.</span>
                  <!-- <img src="assets/img/cognitan-logo.png" alt=""> -->
                </a>
                <div class="footer-contact pt-3">
                  <p>#3, Syed Palli Street 2 Lane</p>
                  <p>Nagore, Nagapattinam - 611002,</p>
                  <p>Tamil Nadu, India.</p>
                  <p class="mt-3"><strong>Phone:</strong> <span>+91 70100 52218</span></p>
                  <p><strong>Email:</strong> <span>info@cognitan.com</span></p>
                </div>
                <div class="social-links d-flex mt-4">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
  
              <div class="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="terms-and-condition.html">Terms of service</a></li>
                  <li><a href="privacy-policy.html">Privacy policy</a></li>
                </ul>
              </div>
  
              <div class="col-lg-2 col-md-3 footer-links">
                <h4>Our Services</h4>
                <ul>
                <li><a href="#">Cyber Security Solutions</a></li>
                  <li><a href="#">Custom Software Development</a></li>
                  <li><a href="#">Web & Mobile Development</a></li>
                  <li><a href="#">Graphic Design</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">IT Consulting & Support</a></li>
                </ul>
              </div>
  
              <div class="col-lg-4 col-md-12 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                <form action="forms/newsletter.php" method="post" class="php-email-form">
                  <div class="newsletter-form"><input type="email" name="email"><input type="submit" value="Subscribe"></div>
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your subscription request has been sent. Thank you!</div>
                </form>
              </div>
            </div>
          </div>
  
          <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">2025 Cognitan</strong> <span>All Rights Reserved</span></p>
            <div class="credits">
              <!-- You can delete the links only if you've purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
            </div>
          </div>
        </footer>
      `;
    }
  }
  
  // Register the component
  customElements.define('footer-component', FooterComponent);
  