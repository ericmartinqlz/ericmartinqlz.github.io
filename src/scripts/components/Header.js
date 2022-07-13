import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../../assets/images/logo-512.png'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.showNavbar = this.showNavbar.bind(this);
    this.hideNavbar = this.hideNavbar.bind(this);
  }

  showNavbar() {
    document.getElementsByTagName('body')[0].classList.add('nav-show');
  }
  hideNavbar() {
    document.getElementsByTagName('body')[0].classList.remove('nav-show');
  }

  render() {
    return (
      <header>
        <div onClick={this.hideNavbar} className="black-screen"></div>

        {/* Appbar - Mobile Floating Button - Desktop Logo QLZ */}
        <div className="AppBar">
          <div className="AppBar-Desktop">
            <NavLink to='/'>
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="AppBar-Mobile">
            <div onClick={this.showNavbar} className="floating-button ease-out">
              <i className="icon-navicon"></i>
            </div>
          </div>
        </div>

        {/* Navbar - Mobile Bottom - Desktop Bottom Left */}
        <nav className="ease-out">
          <ul>
            <li>
              <NavLink 
                to='/' 
                onClick={this.hideNavbar} 
                className={navData =>
                  "ease-out" + (navData.isActive ? " active-link" : "")
                }
                >
                <i className="icon icon-home ease-out"></i>
                <i className="icon-home-fill icon-fill ease-out"></i>
                <span className="ease-out">About Me</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/timeline' 
                onClick={this.hideNavbar} 
                className={navData =>
                  "ease-out" + (navData.isActive ? " active-link" : "")
                }
                >
                <i className="icon icon-timeline ease-out"></i>
                <i className="icon-timeline-fill icon-fill ease-out"></i>
                <span className="ease-out">Timeline</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/skill'  
                onClick={this.hideNavbar} 
                className={navData =>
                  "ease-out" + (navData.isActive ? " active-link" : "")
                }
                >
                <i className="icon icon-skill ease-out"></i>
                <i className="icon-skill-fill icon-fill ease-out"></i>
                <span className="ease-out">Skill</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/certificate'  
                onClick={this.hideNavbar} 
                className={navData =>
                  "ease-out" + (navData.isActive ? " active-link" : "")
                }
                >
                <i className="icon icon-certificate ease-out"></i>
                <i className="icon-certificate-fill icon-fill ease-out"></i>
                <span className="ease-out">Certificate</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/project'  
                onClick={this.hideNavbar} 
                className={navData =>
                  "ease-out" + (navData.isActive ? " active-link" : "")
                }
                >
                <i className="icon icon icon-project ease-out"></i>
                <i className="icon-project-fill icon-fill ease-out"></i>
                <span className="ease-out">Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/contact'  
                onClick={this.hideNavbar} 
                className={navData =>
                  "ease-out" + (navData.isActive ? " active-link" : "")
                }
                >
                <i className="icon icon-contact ease-out"></i>
                <i className="icon-contact-fill icon-fill ease-out"></i>
                <span className="ease-out">Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;