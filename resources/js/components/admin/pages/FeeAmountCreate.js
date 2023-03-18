import React, { Component } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';   

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';  		

class FeeAmountCreate extends Component {   
	
constructor (props) {		
  super(props)
  this.state = { 	 
	isChecked:false, 	  	 	
    showError: false,		
	showSuccess: false,	   
	courseData: [],
	classData: [],  
	chkarr:[],      
	idarr:[]   	
	
  }
	   			    	   
	   this.handleCheck = this.handleCheck.bind(this);	 	     
	   this.handleCreate = this.handleCreate.bind(this);    
	   this.handleChange = this.handleChange.bind(this);
	   this.handleCheckAll = this.handleCheckAll.bind(this);		
   }
  handleCheckAll = (event) => {
	  var check = event.target.checked; 
	  var chk_name = event.target.name; 
	  var chk_value = event.target.value; 

	  const checks = this.state.idarr;	  
	  const allchecks = this.state.chkarr;     
	  const check_arr = []; 
	  let unique = [];  
	  
	  check_arr.push(chk_name);		

	  for(var key in allchecks) {  
		if(allchecks[key] !== null)
		{
			check_arr.push(allchecks[key].name);    
		}
	  }	
	  check_arr.forEach((c) => {
		if (!unique.includes(c)) {
			unique.push(c);  
		}
	  });  

	  if(chk_value=='all')
	  {
		 if(check)    
		 {   
			this.setState({  								
				idarr: unique  	   
			});  		 
		 }
		 else
		 {
			this.setState({  								
				idarr: []  	   
			});  	
		 }
	  }	
	  
  }  	  
  handleCheck = (event) => {	   
		var check = event.target.checked; 
		var chk_name = event.target.name;   		
		const checks = this.state.idarr;	  
		const check_arr = [];   		
		
		if(check)    
		{ 
			for(var i=0;i<checks.length;i++)	  
			{
				check_arr.push(checks[i]);   				
			} 
		
			if(!check_arr.includes(chk_name))
			{
				check_arr.push(chk_name);		
			}  			
		}
		else
		{
			for(const key in checks)	
			{	
				if(checks[key]!==chk_name)   
				{
					check_arr.push(checks[key]);	      	
				}
			} 			
		}
			
		let unique = [];    
		
		check_arr.forEach((c) => {
			if (!unique.includes(c)) {
				unique.push(c);
			}
		});
		
		unique = unique.filter(function(item) {
			return item !== 'check_all'  
		});	  
		
		this.setState({  								
			idarr: unique  	   
		});  	
  } 
  
  handleCreate (event) {
  event.preventDefault();
  const { course_id,admission_fee,sport_fee,library_fee,fine_fee,cultural_fee,fest_fee,tution_fee,h_fee } = event.target;  

  const allchecks = this.state.chkarr;     
  const class_arr = [];       
  let unique_arr = [];  		

  for(var key in allchecks) {  
	if(allchecks[key] !== null)
	{
		if(allchecks[key].checked)
		{
			class_arr.push(allchecks[key].value);    	
		}  		
	}
  }	
  
  for(const key in class_arr)
  {	  
	 if (!unique_arr.includes(class_arr[key])) {
		unique_arr.push(class_arr[key]);     
	}	
  }
  
  unique_arr = unique_arr.filter(function(item) {
		return item !== 'all'  
  });	
  
  const data = {  		
	course_id: course_id.value,
	admission_fee: admission_fee.value,
	sport_fee: sport_fee.value,
	library_fee: library_fee.value,
	fine_fee: fine_fee.value,
	fest_fee: fest_fee.value, 
	cultural_fee: cultural_fee.value,
	tution_fee: tution_fee.value,
	h_fee: h_fee.value,
	class_set:unique_arr  
  }	 
  
  axios.post('/feeamount/create',data)	
    .then(response => {
		console.log(response.data);  		
		if (response.data.status === 'successed')   
		{		
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
   
  handleChange(event) {  			
				
		this.setState({
			course_id: event.target.value	 		
		});	
		
		var id = event.target.value;  	
	   
	   if(id >0)
	   {
		   axios.get(`/class/getclassbycourse/${id}`).then(response => {    			
				this.setState({     
					classData: response.data.data ? response.data.data :[],
					idarr: []    	
				}); 
			})
			.catch(error => {  	   
			   console.log(error.message); 	
			})    
		   
	   }
	   else
	   {
		   this.setState({   
				classData: [],
				idarr: []   	
			}); 
	   }
		
	}  	
   componentDidMount() {   
	
	axios.get('/class/getcourses').then(response => {   		
	this.setState({  			
			courseData: response.data.data ? response.data.data : [],	
		});
	})
	.catch(error => {  	   
	   console.log(error.message); 	
    })   
	
}  

render() {  
	
	let courseRows = this.state.courseData; 
	let classRows = this.state.classData;   		
	
	let courseList = courseRows.length > 0	
		&& courseRows.map((item, i) => {
			
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
					<h4>Add Fee Amount</h4>				
				</div>
			</div>
			<div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
				<ol className="breadcrumb">
					<li><a href={`/fee_amount_list`} className="btn bg-blue-soft text-blue"><i className="fa fa-angle-double-left"></i> Back to Fee Amount List</a></li>					
				</ol>
			</div>
		</div> 		
		
		<div className="row">
		  <div className="col-xl-12 col-xxl-12">
			<div className="card">
			  
			  <div className="card-body">
				
				<div className="basic-form form-own className-wise-subject">
				  <form onSubmit={this.handleCreate}>
					<div className="text-center">      
						{this.state.showError ? <div className="error">{this.state.message}</div> : null}
						{this.state.showSuccess ? <div className="success">{this.state.message}</div> : null} 
					</div>
					<div className="form-row">
						
					  <div className="form-group col-md-6">	
						<label>Course Name</label>
						<select className="form-control" id="course_id" name="course_id" value={this.state.course_id}  onChange={this.handleChange}>		
						  <option value="">Select Course</option>						
						  {courseList}			  
						</select>  
					  </div>  					  
					  {
						classRows.length > 0 ?(  
					  <div className="form-group col-md-12 mrb-0">		
						<div className="print-id-card-table">
							  <div className="table-responsive">
								<table className="table table-bordered table-striped verticle-middle table-responsive-sm">
									<thead>
										<tr>	
											<th scope="col"><div className="form-checkbox"><input type="checkbox" className="form-check-input" name={'check_all'} value={'all'} onChange={this.handleCheckAll} checked={(this.state.idarr.includes('check_all'))?true:false}/>Select All</div></th>  
											<th scope="col">Class Name</th>  		   
										</tr>
									</thead>
									<tbody>
									{  										 
                                        classRows.map((item,i)=>(  
										<tr key={i}>		
											<td>
											  <div className="form-checkbox">
												<input type="checkbox" className="form-check-input" name={'check_'+item.classId} onChange={this.handleCheck} checked={(this.state.idarr.includes('check_'+item.classId))?true:false} ref={node =>this.state.chkarr.push(node)} value={item.classId}/>						
											  </div>	
											</td>
											<td>{item.className}</td>   	  
										</tr>
										)    
										  )   
										}   
									</tbody>
								</table>
							</div>
						</div>
					</div>
					 )
					    :''		 
						}       
					  
					  <div className="form-group col-md-12">	
						<label>Category wise Fee Amount Description</label>    						
					  </div>  
					 
					  
					  <div className="form-group col-md-12">
						<div className="Schedule-table">
						  <div className="table-responsive">
							<table className="table table-bordered table-striped verticle-middle table-responsive-sm">
								<thead>
									<tr>
										<th scope="col">Fee Category</th>   										
										<th scope="col">Fee Amount</th>   
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Admission Fee</td>  										
										<td>
											<input type="number" name="admission_fee" ref={this.input} className="form-control" step="0.1" defaultValue="0"/>	 
										</td>   
									</tr>
									<tr>
										<td>Sports</td>  										
										<td>
											<input type="number" name="sport_fee" ref={this.input} className="form-control" step="0.1" defaultValue="0"/>	 
										</td>  
									</tr>
									<tr>
										<td>Library Fund</td>  										
										<td>
											<input type="number" name="library_fee" ref={this.input} className="form-control" step="0.01" defaultValue="0"/>	 
										</td>  
									</tr>
									<tr>
										<td>Fine</td>  										
										<td>
											<input type="number" name="fine_fee" ref={this.input} className="form-control" step="0.01" defaultValue="0"/>	 
										</td>  
									</tr>
									<tr>
										<td>Cultural Fee</td>  										
										<td>
											<input type="number" name="cultural_fee" ref={this.input} className="form-control" step="0.01" defaultValue="0"/>	 
										</td>  
									</tr>
									<tr>
										<td>Science Fest</td>  										
										<td>
											<input type="number" name="fest_fee" ref={this.input} className="form-control" step="0.01" defaultValue="0"/>	 
										</td>   
									</tr>
									<tr>
										<td>Tution Fees</td>  										
										<td>
											<input type="number" name="tution_fee" ref={this.input} className="form-control" step="0.01" defaultValue="0"/>	 
										</td>  
									</tr>  
									<tr>
										<td>H Fee</td>  										
										<td>
											<input type="number" name="h_fee" ref={this.input} className="form-control" step="0.01" defaultValue="0"/>	 
										</td>  
									</tr>     
								</tbody>
							</table>
						</div>
						</div>
					  </div>
					</div>
					<input type="submit" className="btn btn-primary" value="Save"/>
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

export default FeeAmountCreate;	   	