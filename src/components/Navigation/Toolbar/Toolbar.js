import React from 'react';
import Logo from '../../../assets/images/logo.png'
import './Toolbar.css';

const toolbar = () => (
    <nav className="navbar custom-navbar" role="navigation" aria-label="main navigation" >
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src={Logo} width="112" height="28"/>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item navBar-first-item">
        Home
      </a>

      <a className="navbar-item navBar-first-item">
        About Us
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link navBar-first-item">
          DepartMents
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link navBar-first-item">
          Zones
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link navBar-first-item">
          Resources
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            Online Books
          </a>          
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Our Blog
          </a>
        </div>
      </div>
      <div className="navbar-item">
      <a className="button navbar-button-cus">Register Now</a>
      </div>
      
    </div>

    
  </div>
</nav>
);

export default toolbar;