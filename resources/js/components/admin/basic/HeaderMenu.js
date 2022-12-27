
import React, { Component } from 'react';


class HeaderMenu extends Component {
  render() {
    return (
       
       
        
      
        
        <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="session-sec">
                  <form>
                    <label htmlFor="Session">Session</label>
                    <select className="form-control" data-val="true" data-val-number="The field Session must be a number." data-val-required="The Session field is required." id="Session" name="Session"><option defaultValue={5}>2020-2021</option><option defaultValue={6}>2021-2022</option><option defaultValue={7}>2022-2023</option></select>
                  </form>
                </div>
              
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="mdi mdi-email-outline" />
                  </a>
                </li>							
                <li className="nav-item dropdown notification_dropdown">
                  <a className="nav-link" href="#" role="button" data-toggle="dropdown">
                    <i className="mdi mdi-bell" />
                    <div className="pulse-css" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <ul className="list-unstyled">
                      <li className="media dropdown-item">
                        <span className="success"><i className="ti-user" /></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong>Martin</strong> has added a <strong>customer</strong> Successfully
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="primary"><i className="ti-shopping-cart" /></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong>Jennifer</strong> purchased Light Dashboard 2.0.</p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="danger"><i className="ti-bookmark" /></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong>Robin</strong> marked a <strong>ticket</strong> as unsolved.
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="primary"><i className="ti-heart" /></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong>David</strong> purchased Light Dashboard 1.0.</p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="success"><i className="ti-image" /></span>
                        <div className="media-body">
                          <a href="#">
                            <p><strong> James.</strong> has added a<strong>customer</strong> Successfully
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                    </ul>
                    <a className="all-notification" href="#">See all notifications <i className="ti-arrow-right" /></a>
                  </div>
                </li>
                <li className="nav-item dropdown header-profile">
                  <a className="nav-link" href="#" role="button" data-toggle="dropdown">
                    <i className="mdi mdi-account" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="./app-profile.html" className="dropdown-item">
                      <i className="icon-user" />
                      <span className="ml-2">Profile </span>
                    </a>
                    <a href="./email-inbox.html" className="dropdown-item">
                      <i className="icon-envelope-open" />
                      <span className="ml-2">Inbox </span>
                    </a>
                    <a href="./page-login.html" className="dropdown-item">
                      <i className="icon-key" />
                      <span className="ml-2">Logout </span>
                    </a>
                  </div>
                </li>
                <li className="nav-item username-profile">
                  <span className="username">HTL International School Mohali</span>
                  <span className="username-image"><img src="./images/male.jpg" alt="" /></span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
        
     
    );
  }
}


export default HeaderMenu;