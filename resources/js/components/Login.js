
import React, { Component } from 'react';

import axios from 'axios';  


class Login extends Component {

    constructor() {
        super();
        this.state = {
          showError: false,
          showSuccess:false,
          messgae:'',
          userId:'',
          passWord:''
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.passWordChange = this.passWordChange.bind(this);
        this.userIdChange = this.userIdChange.bind(this);
      }


    formSubmit(event){
        event.preventDefault();
        this.setState({ showError: true });
      
       
        axios.post(`http://127.0.0.1:8000/api/data`, {
            userId: this.state.userId,
            paasWord: this.state.passWord
          })  
        .then(res => {  
         console.log(res.data);
         if(res.data.status == true){
            this.setState({ showError: false,showSuccess:true,message:res.data.message});
            window.location.href = "http://127.0.0.1:8000/dashboard";
         }
        
         if(res.data.status == false){
            this.setState({ showError: true,showSuccess:false,message:res.data.message});
         }
        })  
    }

    userIdChange(event){
        event.preventDefault();
        console.log("gdtyy");
        this.setState({ userId: event.target.value });
    }
    passWordChange(event){
        event.preventDefault();
        this.setState({ passWord: event.target.value });
    }


  render() {
    return (
       
       
        
      
        
        <div className="h-100">
        
      
            <div id="preloader">
                <div className="sk-three-bounce">
                    <div className="sk-child sk-bounce1"></div>
                    <div className="sk-child sk-bounce2"></div>
                    <div className="sk-child sk-bounce3"></div>
                </div>
            </div>
           
        
              <div id="main-wrapper" className="h-100">
            <div className="authincation login-screen h-100">
                <div className="himsaral-logo">
                 <a href="https://www.htlogics.com/" target="_blank"><img src="./../images/logo-text.png" /></a>
                </div>
              
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-8 left">
                          <figure>
                            <img src="./images/school-dummy.jpg" alt="" />
                            <figcaption>
                              <h2>HTL International School Mohali <span>SAS Nagar Mohali, Punjab</span></h2>
                            </figcaption>
                          </figure>
                        </div>
                        
                        <div className="col-md-4 right">
                            <div className="authincation-content">
                                <div className="row no-gutters">
                                    <div className="col-xl-12">
                                        <div className="auth-form">
                                        
                                            <div className="login-logo text-center mrb-35"><img src="./images/school-logo.png" /></div>
                                           
                                            <h4 className="mb-4">Sign in your account</h4>
                                            <form action="index.html" onSubmit={this.formSubmit}>
                                                <div className="form-group">
                                                    <label><strong>User Name</strong></label>
                                                    <input type="text" className="form-control"  value={this.state.userId} onChange={this.userIdChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label><strong>Password</strong></label>
                                                    <input type="password" className="form-control" value={this.state.passWord} onChange={this.passWordChange} />
                                                </div>
                                                <div className="form-row d-flex justify-content-between mt-2">
                                                    <div className="form-group">
                                                        <div className="form-check ml-2">
                                                            <input className="form-check-input" type="checkbox" id="basic_checkbox_1" />
                                                            <label className="form-check-label" >Remember me</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <a href="page-forgot-password.html">Forgot Password?</a>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit"  className="btn btn-primary btn-block">Sign me in</button>
                                                    {this.state.showError ?  <div className="error">{this.state.message}</div> : null }
                                              
                                                    {this.state.showSuccess ?  <div className="success">{this.state.message}</div> : null }
                                              
                                                </div>
                                            </form>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        
        
           
            <script src="./../vendor/global/global.min.js"></script>
            <script src="./../javascript/quixnav-init.js"></script>
            <script src="./../javascript/custom.min.js"></script>
        
        </div>
        
     
    );
  }
}


export default Login;