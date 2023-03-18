import React, { Component } from "react";
import axios from 'axios';  
import { Link } from 'react-router-dom';      

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';	  

class CreateDesignation extends Component {
  
  constructor (props) {
  super(props)
  this.state = {
	formMessage:'', 
    errors: [],
	courseData: [],
    departmentData:[]
  }
	   this.handleCreateNewItem = this.handleCreateNewItem.bind(this)
	   this.hasErrorFor = this.hasErrorFor.bind(this)
	   this.renderErrorFor = this.renderErrorFor.bind(this)
	   this.input = React.createRef();  
   }
   
   handleCreateNewItem (event) {
  event.preventDefault();

  const { name,departmentid } = event.target
  
  
  const { history } = this.props   
  const data = {
	designation_name: name.value,
    departmentid: departmentid.value

  }
  
  
  axios.post('/add_designation', data)
    .then(response => {
		console.log(response.data);  
		if (response.data.status === 'failed') {
		// redirect to the homepage	
		this.setState({
		 formMessage: response.data.message,     						
		 errors: response.data.errors   			
	   })
		history.push('/')  
		
		}
		else
		{
		   this.setState({
			 formMessage: response.data.message,     				
			 errors: []   			
		   })
		   
		}
    })
    .catch(error => {  	   
	   console.log(error.message); 	
    })
    
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
	axios.get('/class/getcourses').then(response => {  
	//console.log(response.data);	
	this.setState({  			
			courseData: response.data.data ? response.data.data : [],	
		});
	})
	.catch(error => {  	   
	   console.log(error.message); 	
    })    


    axios.get('/get_departments').then(response => {  
        //console.log(response.data);	
        this.setState({  			
                departmentData: response.data.data ? response.data.data : [],	
            });
        })
        .catch(error => {  	   
           console.log(error.message); 	
        })    
}
   
   render () {	
		
	const { courseData } = this.state; 	
	
	let courseList = courseData.length > 0
		&& courseData.map((item, i) => {
		return (
			<option key={i} value={item.courseId}>{item.courseName}</option>    
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
						<h4>Add Department Name</h4>  
					</div>
				</div>
				<div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
					<ol className="breadcrumb">  						
						<li><a href={`/designation_list`} className="btn bg-blue-soft text-blue"><i className="fa fa-angle-double-left"></i> Back to Designation List</a></li>	  
					</ol>
				</div>
			</div>
			
			<div className="row">
			  <div className="col-xl-12 col-xxl-12">
				<div className="card">
				  
				  <div className="card-body">
					
					<div className="basic-form form-own">
					  <form onSubmit={this.handleCreateNewItem}>   
						<div className="form-row">
                        <div className="form-group col-md-6">
							<label>Department Name</label>
                            <select className="form-control" id="departmentid" name="departmentid" ref={this.input}>
                              <option value="">Select Department</option>
                              {this.state.departmentData.map( (item, key) => {
                                return (
                              <option value={item.id}>{item.department_name}</option>
                              )
                            })}
                            </select>  </div>
						  


						  <div className="form-group col-md-6">
							<label>Designation Name</label>
							<input type="text" className={`form-control ${this.hasErrorFor('designation_name') ? 'is-invalid' : ''}`} id="name" name="name" ref={this.input} placeholder="Enter Designation name"/>
									{this.renderErrorFor('designation_name')}  </div>
						  
						  

						 

						
						 
						</div>
						<input type="submit" className="btn btn-primary" value="Submit"/>
						<label className="label">{this.state.formMessage}</label>  
						
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

export default CreateDesignation;  