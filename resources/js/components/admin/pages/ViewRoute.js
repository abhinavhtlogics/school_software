import React, { Component } from "react";
import axios from 'axios';  
import { Link } from 'react-router-dom';      

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';	  

class ViewRoute extends Component {
  
  constructor (props) {
	  super(props)
	  this.state = {  	 
		routeData:[],
		stationData:[]   	
	  }	  
  }        
   
   componentDidMount() {
	const urlString = window.location.href;
    const url = new URL(urlString);   
    const lastSegment = url.pathname.split('/').pop();	
	const id = lastSegment;  	
	   
	axios.get(`/route/edit/${id}`).then(response => {  
		
	this.setState({  			 			
			routeData:response.data.data.route_data?response.data.data.route_data:[],					  				
			stationData:response.data.data.station_data?response.data.data.station_data:[],		
		});
	})
	.catch(err => {  	   
	   //console.log(error.message); 		
	   console.log(err.response.data); 			
    })  
	
}
   render () {	
   
       
   let stationRows = (this.state.stationData.length>0)?this.state.stationData:[];  
   let stationRow = (this.state.routeData.length>0)?this.state.routeData[0].stations:'';  
   
   var stationArr = stationRow.split(',');
   const stations_1 = [];		
   const stations_2 = [];	
   
   for (const element of stationArr) 
   {
	  const station_arr = element.split(':'); 	 	  
	  stations_1.push(station_arr[0].trim());   	     
	  stations_2.push(parseInt(station_arr[1]));       
   }  	
   
   let stationList = stationRows.length > 0	
		&& stationRows.map((item,i) => {		
			return ( 		
					<option key={i} value={item.stationId}>{item.stationName}</option>    
				)  		
		},this);  
   
   let stationDiv=stations_1.map((item, i) =>   
		(  			
		  <li key={i} className="list-group-item"> 	
            {item}  		   
          </li>   
        )) 
   
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
								<h4>View Route</h4>		
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
							     
							<div className="basic-form form-own">
							  <form> 		
								<div className="form-row">
								
								  <div className="form-group col-md-6">		
									<label>Route Name</label>	
									<input type="text" id="route_no" className={`form-control`} name="route_no" value={(this.state.routeData.length>0)?this.state.routeData[0].routeNo:''} readOnly placeholder="Enter Route No."/> 
									 
								  </div>
								  
								  <div className="form-group col-md-6">		
									<label>Select Stations</label>  											
									<select name="stations[]" multiple={true} className={`form-control`} value={stations_2} readOnly>   
										{stationList}	
									</select>		`
									  
								  </div>
								  
								</div>
								
								<div className="form-group col-md-6">  									
									<ul className="list-group text-left">			
									  {stationDiv}	  
									</ul> 																	
								</div>	 																		
								
								<div className="text-right btn-submit-right">	
								  <Link to={`/route_list`}>  
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
export default ViewRoute;    