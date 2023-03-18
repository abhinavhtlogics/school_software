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
	feeData: [],	
	courseData: [],
	classData: []     
	
  }	   
	   this.handleChange = this.handleChange.bind(this);
	   this.handleSelect = this.handleSelect.bind(this);  
	   this.handleUpdate = this.handleUpdate.bind(this);	  		
   }
  
  
  handleUpdate (event) {  
  event.preventDefault();
  const {id,course_id,class_id,admission_fee,sport_fee,library_fee,fine_fee,cultural_fee,fest_fee,tution_fee,h_fee } = event.target;    
  
  const data = {  		
	course_id: course_id.value,
	class_id: class_id.value,  
	admission_fee: admission_fee.value,
	sport_fee: sport_fee.value,
	library_fee: library_fee.value,
	fine_fee: fine_fee.value,
	fest_fee: fest_fee.value, 
	cultural_fee: cultural_fee.value,
	tution_fee: tution_fee.value,
	h_fee: h_fee.value    
  }	 
  
   axios.post(`/feeamount/update/${id.value}`,data).then(response => { 		
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
   
   handleSelect(event) {  	
		 
		 var id = event.target.value;  			
	   
		   if(id >0)
		   {
			   axios.get(`/class/getclassbycourse/${id}`).then(response => { 
				console.log(response.data.data);			
					this.setState({     
						classData: response.data.data ? response.data.data :[]     
					}); 
				})
				.catch(error => {  	   
				   console.log(error.message); 	
				})    
			   
		   }
		   else
		   {
			   this.setState({   
					classData: []			
				}); 
		   }

		this.setState({ [event.target.name]: event.target.value });     	
		 
	}    
   
   handleChange(event) {  	
		 this.setState({ [event.target.name]: event.target.value });    
	}  	
   componentDidMount() {   
	
	const urlString = window.location.href;
    const url = new URL(urlString);   
    const lastSegment = url.pathname.split('/').pop();	
	const id = lastSegment;  	
	   
	axios.get(`/feeamount/edit/${id}`).then(response => {    
	console.log(response.data);   	
	this.setState({  			 			
			feeData:response.data.data.fee_data?response.data.data.fee_data:[],
			courseData:response.data.data.course_data?response.data.data.course_data:[],
			classData:response.data.data.class_data?response.data.data.class_data:[]   	
		});
	})
	.catch(error => {  	   
	   console.log(error.message); 									
    })    
	
}  

render() {  
	
	let courseRows = this.state.courseData; 		
	let classRows = this.state.classData;   
	const feeRow = this.state.feeData; 
	let row_id = (feeRow.length>0)?feeRow[0].id:0; 	
	let feecourse_id = (feeRow.length>0)?feeRow[0].course_id:0;   
	let feeclass_id = (feeRow.length>0)?feeRow[0].class_id:0; 
	let adminfee = (feeRow.length>0)?feeRow[0].admission_fee:0.0;   
	let sportfee = (feeRow.length>0)?feeRow[0].sport_fee:0.0;  
	let libraryfee = (feeRow.length>0)?feeRow[0].library_fee:0.0;   
	let finefee = (feeRow.length>0)?feeRow[0].fine_fee:0.0;   
	let culturalfee = (feeRow.length>0)?feeRow[0].cultural_fee:0.0;   
	let festfee = (feeRow.length>0)?feeRow[0].fest_fee:0.0;  
	let tutionfee = (feeRow.length>0)?feeRow[0].tution_fee:0.0;   		
	let hfee = (feeRow.length>0)?feeRow[0].h_fee:0.0;          	
	
	let courseList = courseRows.length > 0	
		&& courseRows.map((item, i) => {
			
		return ( 		
				<option key={i} value={item.courseId}>{item.courseName}</option>    
			)  
		
	}, this);  	  
	
	let classList = classRows.length > 0	
		&& classRows.map((item, i) => {		
			
		return ( 		
				<option key={i} value={item.classId}>{item.className}</option>    
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
					<h4>Edit Fee Amount</h4>				
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
				  <form onSubmit={this.handleUpdate}>   
					<div className="text-center">      
						{this.state.showError ? <div className="error">{this.state.message}</div> : null}
						{this.state.showSuccess ? <div className="success">{this.state.message}</div> : null} 
					</div>	feeclass
					<div className="form-row">
					<input type='hidden' name='id' value={row_id} />  				
					  <div className="form-group col-md-6">	
						<label>Course Name</label>
						<select className="form-control" id="course_id" name="course_id" value={this.state.course_id?this.state.course_id:feecourse_id} onChange={this.handleSelect}>		
						  <option value="0">Select Course</option>		  				
						  {courseList}			  
						</select>  
					  </div>  	
					  <div className="form-group col-md-6">	
						<label>Class Name</label>
						<select className="form-control" id="class_id" name="class_id" value={this.state.class_id?this.state.class_id:feeclass_id} onChange={this.handleChange}>		
						  <option value="0">Select Class</option>						
						  {classList}					  
						</select>   
					  </div>   
					  
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
											<input type="number" name="admission_fee" ref={this.input} className="form-control" step="0.1" value={this.state.admission_fee?this.state.admission_fee:adminfee} onChange={this.handleChange}/>	 
										</td>   
									</tr>
									<tr>
										<td>Sports</td>  										
										<td>
											<input type="number" name="sport_fee" ref={this.input} className="form-control" step="0.1" value={this.state.sport_fee?this.state.sport_fee:sportfee} onChange={this.handleChange}/>	 
										</td>  
									</tr>
									<tr>
										<td>Library Fund</td>  										
										<td>
											<input type="number" name="library_fee" ref={this.input} className="form-control" step="0.01" value={this.state.library_fee?this.state.library_fee:libraryfee} onChange={this.handleChange}/>	 
										</td>  
									</tr>
									<tr>
										<td>Fine</td>  										
										<td>
											<input type="number" name="fine_fee" ref={this.input} className="form-control" step="0.01" value={this.state.fine_fee?this.state.fine_fee:finefee} onChange={this.handleChange}/>	 
										</td>  
									</tr>
									<tr>
										<td>Cultural Fee</td>  										
										<td>
											<input type="number" name="cultural_fee" ref={this.input} className="form-control" step="0.01" value={this.state.cultural_fee?this.state.cultural_fee:culturalfee} onChange={this.handleChange}/>	 
										</td>  
									</tr>
									<tr>
										<td>Science Fest</td>  										
										<td>
											<input type="number" name="fest_fee" ref={this.input} className="form-control" step="0.01" value={this.state.fest_fee?this.state.fest_fee:festfee} onChange={this.handleChange}/>	 
										</td>   
									</tr>
									<tr>
										<td>Tution Fees</td>  										
										<td>
											<input type="number" name="tution_fee" ref={this.input} className="form-control" step="0.01" value={this.state.tution_fee?this.state.tution_fee:tutionfee} onChange={this.handleChange}/>	 
										</td>  
									</tr>  
									<tr>
										<td>H Fee</td>  										
										<td>
											<input type="number" name="h_fee" ref={this.input} className="form-control" step="0.01" value={this.state.h_fee?this.state.h_fee:hfee} onChange={this.handleChange}/>	 
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