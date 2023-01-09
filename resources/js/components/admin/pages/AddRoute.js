import React, { Component } from "react";
import axios from 'axios';  
import { Link } from 'react-router-dom';      

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';	  

class AddRoute extends Component {
  
  constructor (props) {
  super(props)
  this.state = {  		
	message:'',	
	stations:'',
	sections:'',  
	sectionList:'',	
	show_1: false,  	
	show_2: false, 	
	stationData: [],	 	
    errors: [] 	
  }
	   	
	   this.handleCreate = this.handleCreate.bind(this)	 
	   this.handleAdd = this.handleAdd.bind(this)	
	   this.hasErrorFor = this.hasErrorFor.bind(this)	
	   this.renderErrorFor = this.renderErrorFor.bind(this)
	   this.input = React.createRef();  
   }
   
   handleCreate (event) {
  event.preventDefault();
  const { route_no} = event.target;		
  setTimeout(() => {       
      this.setState({
			 show_1:false,  				
			 show_2:false
		   })	
    },3000);  
  
  
  const data = {
	routeno: route_no.value,  
    stations: this.state.stations 		
  }
  
  axios.post('/route/create', data)		
    .then(response => {  		
		 	  
		if (response.data.status === 'successed') {		
		
		   this.setState({
			 show_1:true,  
			 show_2:false,    
			 message: response.data.message,     									
			 errors: response.data.errors    			
		   })  
		
		}
		else
		{
		   this.setState({
			 show_1:false,  
			 show_2:true,   
			 message: response.data.message,     						
			 errors: response.data.errors   		
		   })
		   
		}
    })
    .catch(err => {  	   
	   console.log(err.message); 	 
    })
    
   }
   
	handleAdd () { 		
		this.setState({show: true});  	
		const selected = [];
		const texted = []; 
		for(let option of this.select.options){
		  if(option.selected)
		  {	
			  selected.push(option.value);		  
			  texted.push(option.text);		
		  }
		}
		this.setState({stations: selected}); 
		this.setState({sections: texted});   
	}
   hasErrorFor (field) {
	  return !!this.state.errors[field]		
   }
   renderErrorFor (field) {
	  if (this.hasErrorFor(field)) {
		return ( <span className='invalid-feedback'> <strong>{this.state.errors[field][0]}</strong> </span> )
	  }
   }  
   componentDidMount() {   
	
	axios.get('/route/getstations').then(response => {   		
	this.setState({  			
			stationData: response.data.data ? response.data.data : [],	
		});
	})
	.catch(err => {  	   
	   console.log(err.message); 	   	   
    })    
}	
   
   render () {	  	

	let stationRows = this.state.stationData;  
	let stationList = stationRows.length > 0	
		&& stationRows.map((item, i) => {
			
		return ( 		
				<option key={i} value={item.stationId}>{item.stationName}</option>    
			)  
		
	}, this);  	
	
	let sectionRows = this.state.sections; 
		let sectionList = sectionRows.length > 0	
		&& sectionRows.map((item,i) => {
			
		return ( 		
				<li key={i} className="list-group-item"> 	
				{item}  		   
				</li>   
			)  
		
	}, this);  
	
   
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
								<h4>Create New Route</h4>		
							</div>
						</div>
						<div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
							<ol className="breadcrumb">  								
								<li><Link to={`/route_list`} className="btn bg-blue-soft text-blue">
								 <i className="fa fa-angle-double-left"></i> Back to Route List
								 </Link></li> 
							</ol>
						</div>
					</div> 		
					
					<div className="row">
					  <div className="col-xl-12 col-xxl-12">
						<div className="card">
						  
						  <div className="card-body">
							   {
								this.state.show_1 ?(	
							   <div className="alert alert-success">									
									<strong>Success! </strong>{this.state.message}	
							   </div>) 							   
							   : ''		
							   }
							   {
								this.state.show_2 ?(		
							   <div className="alert alert-danger">									
									<strong>Danger! </strong>{this.state.message}		
							   </div>)
							    : ''		
							   }	
  
							<div className="basic-form form-own">
							  <form onSubmit={this.handleCreate}> 		
								<div className="form-row">
								
								  <div className="form-group col-md-6">		
									<label>Route Name</label>	
									<input type="text" className={`form-control ${this.hasErrorFor('routeno') ? 'is-invalid' : ''}`} id="route_no" name="route_no" ref={this.input} placeholder="Enter Route No."/>
									{this.renderErrorFor('routeno')}   
								  </div>
								  
								  <div className="form-group col-md-6">		
									<label>Select Stations</label>  											
									<select name="stations[]" multiple="multiple" className={`form-control ${this.hasErrorFor('stations') ? 'is-invalid' : ''}`} ref={node => this.select = node}>   
										{stationList}  		
									</select>
									{this.renderErrorFor('stations')}   
								  </div>
								  
								</div>
								
								<div className="form-group col-md-12 text-right">  
									<input type="button" className="btn btn-primary" onClick={this.handleAdd} value="Add"/>	
								</div>	 								
							
								<div className="form-group col-md-6">  									
									<ul className="list-group text-left">			
									  {sectionList}	  
									</ul> 																			
								</div>			 			
								
								<div className="text-left btn-submit-left">	
								  <input type="submit" className="btn btn-primary" value="Save Route"/>
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
export default AddRoute;  