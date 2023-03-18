import React, { Component } from "react";
import axios from 'axios';  
import { Link } from 'react-router-dom';      

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';	  

class FeeCatView extends Component {
  
  constructor (props) {
	  super(props)
	  this.state = {
		fee_id:0,  
		title:'',
		feetype:'',
		applicable:'',
		printable:0, 
		changeable:0, 	
		feeData:[]  
	  }
	  this.handleChange = this.handleChange.bind(this);   		
	  this.handleUpdate	 = this.handleUpdate.bind(this);		
	  this.input = React.createRef();   
  } 
  handleChange = (event) => { 		  
	  this.setState({ [event.target.name]: event.target.value });  						
  }
   handleUpdate (event) {
	  event.preventDefault();   		
	  const { fee_id,title,feetype,applicable,changeable,printable} = event.target;	  
	  
	  const data = {
		    fee_id:fee_id.value,  
			title: title.value,			
			fee_type: feetype.value,     
			applicable: applicable.value,		   			
			changeable: changeable.value,    			
			printable: printable.value   
		}	  	
	 
	 axios.post(`/feecat/update/${fee_id.value}`,data).then(response => { 
		
		if (response.data.status === 'successed') {   				
			this.setState({ showError: false, showSuccess: true, message: response.data.message});  
		}
		else
		{
		   this.setState({ showError: true, showSuccess: false, message: response.data.message});	      
		}
    })
    .catch(error => {  	   
	   console.log(error.message); 	 	   
    })
    
   }
   componentDidMount() {
	const urlString = window.location.href;
    const url = new URL(urlString);   
    const lastSegment = url.pathname.split('/').pop();	
	const id = lastSegment;  	
	   
	axios.get(`/feecat/edit/${id}`).then(response => {     				    
	this.setState({  			 			
			feeData:response.data.data?response.data.data:[]					  				
		});
	})
	.catch(error => {  	   
	   console.log(error.message); 			
    })  	
	
}
   render () {

	let fee_id=(this.state.fee_id)?this.state.fee_id:(this.state.feeData.length>0)?this.state.feeData[0].fee_id :0;  
	let fee_title=(this.state.title)?this.state.title:(this.state.feeData.length>0)?this.state.feeData[0].name:''; 	
	let feetype=(this.state.feetype)?this.state.feetype:(this.state.feeData.length>0)?this.state.feeData[0].fee_type:''; 	
    let applicable=(this.state.applicable)?this.state.applicable:(this.state.feeData.length>0)?this.state.feeData[0].applicable:''; 						
    let printable=(this.state.printable)?this.state.printable:(this.state.feeData.length>0)?this.state.feeData[0].printable:false; 
    let changeable=(this.state.changeable)?this.state.changeable:(this.state.feeData.length>0)?this.state.feeData[0].changeable:false;  		
	
	/* if(this.state.feeData.length>0)
	console.log('f='+this.state.feetype);   */   	  		 
   
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
		HeaderPart start
	************************************/}
	
	<div id="main-wrapper">

	<HeaderPart />

	 {/***********************************
	  HaderPart end
	************************************/}
	
	   {/***********************************
		Main wrapper start
	************************************/}  

			  {/***********************************
				Content body start
			************************************/}
			 <div className="content-body">
                        <div className="container-fluid">
                            <div className="row page-titles mx-0">
                                <div className="col-sm-6 p-md-0">
                                    <div className="welcome-text">
                                        <h4>Edit Fee Category</h4>					
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
                                                <form onSubmit={this.handleUpdate}> 
                                                    <div className="form-row">
													<input type="hidden" name="fee_id" value={fee_id} ref={this.input} onChange={(event)=>this.handleChange(event)}/>	  
                                                        <div className="form-group col-sm-6">
                                                            <label>Fee Category</label>
                                                            <input type="text" className="form-control" name="title" value={fee_title} ref={this.input} onChange={(event)=>this.handleChange(event)}/>  

                                                        </div>  
                                                        <div className="form-group col-sm-6">
                                                            <label>Fee Type</label>
                                                            <div className="form-check fee-form-radio">
															
																<label className="radio-inline">  
																<input type="radio" name="feetype" value="tution" checked={(feetype=="tution")?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>		
                                                                <label className="form-check-label"/>Tution</label>
																<label className="radio-inline"><input type="radio" name="feetype" value="fine" checked={(feetype=="fine")?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>Fine</label>
																<label className="radio-inline"><input type="radio" name="feetype" value="transport" checked={(feetype=="transport")?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>Transport</label>		
																<label className="radio-inline"><input type="radio" name="feetype" value="other" checked={(feetype=="other")?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>Others</label>      
															
                                                                {/* <input className="form-check-input" type="radio" name="fee_type" value="Tution" checked={this.state.fee_type === 'Tution'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Tution</label>

                                                                <input className="form-check-input" type="radio" name="fee_type" value="Fine" checked={this.state.fee_type === 'Fine'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Fine</label>
	
                                                                <input className="form-check-input" type="radio" name="fee_type" value="Transport" checked={this.state.fee_type === 'Transport'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Transport</label>

                                                                <input className="form-check-input" type="radio" name="fee_type" value="Others" checked={this.state.fee_type === 'Others'} onChange={this.handleChangeEvent} />
																<label className="form-check-label">Others</label>*/}
																
                                                            </div>
                                                        </div>

                                                    </div>{/*/ form-row */}

                                                    <div className="form-row"> 
                                            
                                                        <div className="form-group col-sm-4">
                                                            <label>Applicable</label>
                                                            <div className="form-check fee-form-radio">
															
															<label className="radio-inline"><input type="radio" name="applicable" value="all" checked={applicable=="all"?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>All</label>
															<label className="radio-inline"><input type="radio" name="applicable" value="old" checked={applicable=="old"?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>Old</label>	
															<label className="radio-inline"><input type="radio" name="applicable" value="new" checked={applicable=="new"?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>New</label>    		
																			
															{/*<input className="form-check-input" type="radio" name="Applicable" value="All" checked={this.state.fee_type === 'All'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">All</label>

                                                                <input className="form-check-input" type="radio" name="Applicable" value="Old" checked={this.state.fee_type === 'Old'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Old</label>

                                                                <input className="form-check-input" type="radio" name="Applicable" value="New" checked={this.state.fee_type === 'New'} onChange={this.handleChangeEvent} />
																<label className="form-check-label">New</label>*/}
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-4">
                                                            <label>Printable</label>
                                                            <div className="form-check settings-form-radio"> 																
																  <input className="form-check-input" type="radio" name="printable" value="1" checked={printable=="1"?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>		
																  <label className="form-check-label">Yes</label> 
																  
																  <input className="form-check-input" type="radio" name="printable" value="0" checked={printable=="0"?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>	
																  <label className="form-check-label">No</label>  

                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-4">
                                                            <label>Changeable</label>
                                                            <div className="form-check settings-form-radio">
                                                                <input className="form-check-input" type="radio" name="changeable" value="1" checked={changeable=="1"?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>
                                                                <label className="form-check-label">Yes</label>

                                                                <input className="form-check-input" type="radio" name="changeable" value="0" checked={changeable=="0"?true:false} ref={this.input} onChange={(event)=>this.handleChange(event)}/>	  
                                                                <label className="form-check-label">No</label>
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
			************************************/}

			  {/***********************************
				Footer Copyright start
			************************************/}

			  <Copyright />

			  {/***********************************
				Footer Copyright end
			************************************/}		

			</div>
			{/***********************************
			Main wrapper end
		************************************/}
		  </div>
		);

	}
  
} 
export default FeeCatView;      