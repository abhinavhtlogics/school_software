import React, { Component } from "react";  
import axios from 'axios'; 
import { Link } from 'react-router-dom';  
import Swal from 'sweetalert2';	   

import Script from "@gumgum/react-script-tag"; 		
import Copyright from "../basic/Copyright"; 
import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';  

class FeeCatAdd extends Component {
    constructor() {
        super();
        this.state = {
            showError: false,
            showSuccess: false,			
            messgae: '',
			title:''   	
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);  

    }
    handleChange(event) {  
        event.preventDefault();		
        this.setState({ [event.target.name]: event.target.value });
    }  
    formSubmit(event) {
        event.preventDefault();
        this.setState({ showError: false, showSuccess: false });
		const { title,fee_type,applicable,changeable,printable } = event.target;  

		const data = {
			title: title.value,			
			fee_type: fee_type.value,
			applicable: applicable.value,			
			changeable: changeable.value,    
			printable: printable.value   
		}	
		
		axios.post(`feecat/create`,data)		
		.then(res => {
			
			message: res.data.message				 			   
			
			if (res.data.status == 'successed') {
				this.setState({ showError: false, showSuccess: true, message: res.data.message});
				// window.location.href = "http://127.0.0.1:8000/feecat_list";   
			}else{
				this.setState({ showError: true, showSuccess: false, message: res.data.message});		
			}
		})          

    }
    render() {

        return (

            <div>  

                {/********************
        Preloader Start
        *********************/}

                <Preloader />

                {/********************
Preloader end
*********************/}

                {/***********************************
Main wrapper start
************************************/}

                <div id="main-wrapper">  

                    {/***********************************
HeaderPart start
************************************/}

                    <HeaderPart /> 

                    {/***********************************
HaderPart end
************************************/}

                    {/***********************************
          Content body start
      ************************************/}
                    <div className="content-body">
                        <div className="container-fluid">
                            <div className="row page-titles mx-0">
                                <div className="col-sm-6 p-md-0">
                                    <div className="welcome-text">
                                        <h4>Add Fee Category</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                                    <ol className="breadcrumb">
                                        <li><a href="/feecat_list" className="btn bg-blue-soft text-blue"><i className="fa fa-angle-double-left" /> Back to Fee Category List</a></li>
                                    </ol>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row">
                                <div className="col-xl-12 col-xxl-12">
                                    <div className="card">

                                        <div className="card-body">
                                            <div className="basic-form form-own">
                                                <form onSubmit={this.formSubmit}>
                                                    <div className="form-row">  
													
														 <div className="form-group col-md-6">
															<label>Fee Category</label>  	
															<input type="text" name="title" value={this.state.title?this.state.title:''} className="form-control"  placeholder="Enter Category Title" onChange={this.handleChange}/>  
														 </div>

														 <div className="form-group col-md-6">
															<label>Fee Type</label>    
															<div className="form-row">
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="fee_type" value="tution" ref={this.input}/>  
																  <label className="form-check-label">Tution</label>
																</div>  
															  </div>
															  
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="fee_type" value="fine" ref={this.input}/>  
																  <label className="form-check-label">Fine</label>
																</div>  
															  </div>
															  
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="fee_type" value="transport" ref={this.input}/>  
																  <label className="form-check-label">Transport</label>
																</div>  
															  </div>
															  
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="fee_type" value="other" ref={this.input}/>		
																  <label className="form-check-label">Others</label>  
																</div>   		 		
															  </div>
															  
															</div>
														  </div>	
														
                                                        
                                                    </div>{/*/ form-row */}

                                                    <div className="form-row">  
                                            
                                                        <div className="form-group col-md-6">
															<label>Applicable</label>  
															<div className="form-row">
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="applicable" value="all" ref={this.input}/>  
																  <label className="form-check-label">All</label>
																</div>  
															  </div>
															  
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="applicable" value="old" ref={this.input}/>  
																  <label className="form-check-label">Old</label>
																</div>		
															  </div>
															  
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="applicable" value="new" ref={this.input}/>  
																  <label className="form-check-label">New</label>
																</div>  
															  </div>   
															  
															</div>
														  </div>
														  
														  <div className="form-group col-md-3">
															<label>Printable</label>  
															<div className="form-row">
															  <div className="form-group col-md-3">   
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="printable" value="1" ref={this.input}/>  
																  <label className="form-check-label">Yes</label>
																</div>  
															  </div>
															  
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="printable" value="0" ref={this.input}/>  
																  <label className="form-check-label">No</label>  
																</div>		
															  </div>  
															  
															</div>
														  </div>
														  
														  <div className="form-group col-md-3">
															<label>Changeable</label>  
															<div className="form-row">
															  <div className="form-group col-md-3">
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="changeable" value="1" ref={this.input}/>  
																  <label className="form-check-label">Yes</label>
																</div>  
															  </div>
															  
															  <div className="form-group col-md-3"> 
																<div className="form-check">
																  <input className="form-check-input" type="radio" name="changeable" value="0" ref={this.input}/>  
																  <label className="form-check-label">No</label>
																</div>		
															  </div>    		
															  
															</div>
														  </div>
					
                                                    </div>{/*/ form-row */}

                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <input type="submit" className="btn btn-primary" value="Submit" />
                                                        </div>
                                                    </div>{/*/ form-row */}		

                                                    <div className="text-center">  

                                                        {this.state.showError ? <div className="error">{this.state.message}</div> : null}

                                                        {this.state.showSuccess ? <div className="success">{this.state.message}</div> : null}

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/*/ row */}
                        </div>
                    </div>
                    {/***********************************
          Content body end     

          {/***********************************
            Footer Copyright start
        ************************************/}

                    <Copyright />

                    {/***********************************
  Footer Copyright end
************************************/}  </div>
                {/***********************************
Main wrapper end
************************************/}
            </div>
        );
    }
} 
export default FeeCatAdd;	