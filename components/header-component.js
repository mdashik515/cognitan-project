class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <header id="header" class="header d-flex align-items-center sticky-top">
          <div class="container position-relative d-flex align-items-center">
  
            <a href="index.html" class="logo d-flex align-items-center me-auto">
              <img src="assets/img/cognitan-logo.png" alt="Cognitan Logo">
            </a>
  
            <nav id="navmenu" class="navmenu">
              <ul>
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
              <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
  
          </div>
        </header>
      `;
    }
  }
  
  // Define the custom element
  customElements.define('header-component', HeaderComponent);
  