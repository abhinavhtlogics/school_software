
import React, { Component } from 'react';


class LogoNav extends Component {
  render() {
    return (
       
       
        
      
        
        <div className="nav-header">
            <a href="index.html" className="brand-logo">
              {/*img class="logo-abbr" src="./images/logo.png" alt=""*/}
              <img className="logo-compact" src="./images/logo-himsaral.png" alt="" />
              <img className="brand-title" src="./images/logo-text.png" alt="" />
            </a>
            <div className="nav-control">
              <div className="hamburger">
                <i className="fa fa-angle-double-left" aria-hidden="true" />
              </div>
            </div>
          </div>
        
     
    );
  }
}


export default LogoNav;