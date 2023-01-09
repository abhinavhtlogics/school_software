import React, { Component } from "react";
import axios from 'axios';  
import { Link } from 'react-router-dom';      

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';	  

class ViewStation extends Component {
  
  constructor (props) {
	  super(props)
	  this.state = {  	 
		stationData:[]  
	  }	  
  }        
   
   componentDidMount() {
	const urlString = window.location.href;
    const url = new URL(urlString);   
    const lastSegment = url.pathname.split('/').pop();	
	const id = lastSegment;  	
	   
	axios.get(`/station/edit/${id}`).then(response => {    	
	this.setState({  			 			
			stationData:response.data.data?response.data.data:[]					  				
		});
	})
	.catch(error => {  	   
	   console.log(error.message); 			
    })  
	
}
   render () {	
   
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
								<h4>View Station</h4>		
							</div>
						</div>
						<div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
							<ol className="breadcrumb">
								<li><Link to={`/station_list`} className="btn bg-blue-soft text-blue">
								 <i className="fa fa-angle-double-left"></i> Back to Station List
								 </Link></li>  								 
							</ol>
						</div>
					</div> 		
					
					<div className="row">
					  <div className="col-xl-12 col-xxl-12">
						<div className="card">
						  
						  <div className="card-body"> 							  
  
							<div className="basic-form form-own">
							  <form>       		
								<div className="form-row"> 
								
								  <div className="form-group col-md-4">		
									<label>Station Name</label>	
									<input type="text" className={`form-control`} id="title" name="title" value={(this.state.stationData.length>0)?this.state.stationData[0].stationName:''} readOnly placeholder="Enter station name"/>   
								  </div>  
								  
								  <div className="form-group col-md-4">
									<label>Distance (Kms.)</label>		
									<input type="number" step="0.01" className={`form-control`} id="distance" name="distance" value={(this.state.stationData.length>0)?this.state.stationData[0].distance:''} readOnly placeholder="Enter distance"/>  
								  </div>
								  
								  <div className="form-group col-md-4">
									<label>Bus Fare</label>		
									<input type="number" step="0.01" className={`form-control`} id="busfare" name="busfare" value={(this.state.stationData.length>0)?this.state.stationData[0].busFare:''} readOnly placeholder="Enter bus fare"/>	   				
								  </div>
								  
								</div>
								
								<div className="text-right btn-submit-right">  								  
								  <Link to={`/station_list`}>  
									<button type="button" className="btn btn-primary">
										 Back  
									</button>
								  </Link> 											 
								</div>
								
							  </form>	  							   
							  
							</div>
							
						  </div>
						</div>
					  </div>  
					</div>
					
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
export default ViewStation;    