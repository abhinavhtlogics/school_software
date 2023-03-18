import React, { Component } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';   

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';  		

class FeeAmountInd extends Component {   
	
constructor (props) {		
  super(props)
  this.state = { 	 
	isChecked:false, 	  	 	
    showError: false,		
	showSuccess: false,	   
	courseData: [],
	classData: [],  
	chkarr:[],      
	idarr:[],
    admissionNo:'',
    sport_fee:'',
    library_fee:'',
    fine_fee:'',
    cultural_fee:'',
    science_fee:'',
    tution_fee:'',
    h_fee:'',
    suggestions: [],
    admission_fee:'',
    feeCatList:[],
    FeeIndVal:[]      	
	
  }
	   			    	   
	   this.handleCheck = this.handleCheck.bind(this);	 	     
	   this.handleCreate = this.handleCreate.bind(this);    
	   this.handleChange = this.handleChange.bind(this);
	   this.handleCheckAll = this.handleCheckAll.bind(this);
       this.handleAdmNo = this.handleAdmNo.bind(this);
       this.getIndFee = this.getIndFee.bind(this);		
       this.handleAdmission=this.handleAdmission.bind(this);
       this.setAdmission=this.setAdmission.bind(this);
       this.formSubmit=this.formSubmit.bind(this);
       this.formSubmit2=this.formSubmit2.bind(this);
       this.handleChangeEvent=this.handleChangeEvent.bind(this);
       this.handleChangeEvent2=this.handleChangeEvent2.bind(this);
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
	class_set:unique_arr,
    student_name:'',
    father_name:'',
    class:''  
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

   handleAdmNo(event){
    this.setState({ admissionNo:event.target.value});
   }


   handleAdmission(event){		
    event.preventDefault(); 
	const search = event.target.value; 	
    this.setState({ [event.target.name]: event.target.value });   
	
	 if (search.length > 0) {
        // make api call				
			axios.get(`/studentregister/getsuggestion2/${search}`).then(response => {
				console.log(response.data);    	
				this.setState({   
					suggestions: response.data.data ? response.data.data :[]	   			
				}); 
			})
			.catch(error => {  	   
			   console.log(error.message); 	
			})   
      } 
	  else {
			this.setState({
			  suggestions: []			
			});
      }
	
} 

formSubmit(event){
    event.preventDefault();
   
 
  
   
    axios.post(`http://127.0.0.1:8000/api/add_fee_amt_ind`, {
       
    admission_fee:this.state.admission_fee,
    sport_fee:this.state.sport_fee,
    library_fee:this.state.library_fee,
    fine_fee:this.state.fine_fee,
    cultural_fee:this.state.cultural_fee,
    science_fee:this.state.cultural_fee,
    tution_fee:this.state.tution_fee,
    h_fee:this.state.h_fee,
    admission_no:this.state.sibling_admission_no

      })  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ showError: false,showSuccess:true,message:res.data.message});
      window.location.href = "http://127.0.0.1:8000/fee_amount_ind";
     }
    else{
        window.location.href = "http://127.0.0.1:8000/fee_amount_ind";
    }
     if(res.data.status == false){
        this.setState({ showError: true,showSuccess:false,message:res.data.message});
     }
    })  

  

  
 
}


formSubmit2(event){
    event.preventDefault();
   
 
  
   
    axios.post(`http://127.0.0.1:8000/api/add_fee_amt_single`, {
       
    feeCat:this.state.feeCatList,
    feeCatVal:this.state.FeeIndVal,
    admission_no:this.state.sibling_admission_no

      })  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ showError: false,showSuccess:true,message:res.data.message});
     // window.location.href = "http://127.0.0.1:8000/fee_amount_ind";
     }
    else{
     //   window.location.href = "http://127.0.0.1:8000/fee_amount_ind";
    }
     if(res.data.status == false){
        this.setState({ showError: true,showSuccess:false,message:res.data.message});
     }
    })  

  

  
 
}

   getIndFee(event){
    event.preventDefault()
    axios.get(`http://127.0.0.1:8000/api/feeamountsingle/${this.state.sibling_admission_no}`)  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == 'success'){
        this.setState({ showMidSec: true});
        console.log('test');
       
        this.setState({ student_name:res.data.data[0].student_name});
        this.setState({ father_name:res.data.data[0].father_name});
        this.setState({ class:res.data.data[0].class_id});
        for (let index = 0; index < res.data.data.length; index++) {
           
            if(res.data.data[index].FeeCatId == 1){
                this.setState({ admission_fee:res.data.data[index].FeeAmount});
            }
            if(res.data.data[index].FeeCatId == 2){
                this.setState({ sport_fee:res.data.data[index].FeeAmount});
            }
            if(res.data.data[index].FeeCatId == 3){
                this.setState({ library_fee:res.data.data[index].FeeAmount});
            }
            if(res.data.data[index].FeeCatId == 4){
                this.setState({ fine_fee:res.data.data[index].FeeAmount});
            }
            if(res.data.data[index].FeeCatId == 5){
                this.setState({ cultural_fee:res.data.data[index].FeeAmount});
            }
            if(res.data.data[index].FeeCatId == 6){
                this.setState({ science_fee:res.data.data[index].FeeAmount});
            }
            if(res.data.data[index].FeeCatId == 7){
                this.setState({ tution_fee:res.data.data[index].FeeAmount});
            }

            if(res.data.data[index].FeeCatId == 8){
                this.setState({ h_fee:res.data.data[index].FeeAmount});
            }

            
        }

        for (let index = 0; index < this.state.feeCatList.length; index++) {

            let id= this.state.feeCatList[index].fee_id;
            
            let temp=false;
            for (let index2 = 0; index2 < res.data.data.length; index2++) {
                
                if(id == res.data.data[index2].FeeCatId){
                     
       
this.state.FeeIndVal[index] =res.data.data[index2].FeeAmount;
                    console.log(id);
                    console.log(res.data.data[index2].FeeAmount);

                    temp=true;
                    break;
                }else{
                    temp=false;
                }
               
               
            }

            if(temp == false){
                this.state.FeeIndVal[index]=0;
            }
        }

        
        
        //window.location.href = "http://127.0.0.1:8000/users";
  
       
     }
     else{
        this.setState({ admission_fee:0});
        this.setState({ sport_fee:0});
        this.setState({ library_fee:0});
        this.setState({ fine_fee:0});
        this.setState({ cultural_fee:0});
        this.setState({ science_fee:0});
        this.setState({ tution_fee:0});
        this.setState({ h_fee:0});
        
     }
    
    
    })  
  }

  setAdmission(event){   	  			
	event.preventDefault();   
	const admission_no = event.target.id; 	
	const f_name = event.currentTarget.attributes['data-f'].value;    	
	const m_name = event.currentTarget.attributes['data-m'].value; 	 
	const f_job = event.currentTarget.attributes['data-o'].value;   
	const f_salary = event.currentTarget.attributes['data-i'].value;  
	const f_title = event.currentTarget.attributes['data-d'].value; 
	const f_cell = event.currentTarget.attributes['data-mo'].value; 
	const f_mail = event.currentTarget.attributes['data-e'].value;    
	const f_residence = event.currentTarget.attributes['data-r'].value;     	
	
	console.log(f_name);  	    
	this.setState({
	  sibling_admission_no:admission_no,
	  father_name:f_name,    
	  mother_name:m_name,
	  f_occupation:f_job,   
	  f_income:f_salary,
	  f_designation:f_title,		
	  f_mobile:f_cell,
	  f_email:f_mail,
	  residence_no:f_residence,     				
	  suggestions: []   	
	}); 
}  


handleChangeEvent(event){
    
    
      this.setState({ [event.target.name]: event.target.value });
      

   
     
    }


    handleChangeEvent2(event){
    
    console.log('here');
   

    var index = event.currentTarget.attributes['data-index'].value; 

console.log(index);
       // this.state.FeeIndVal[index]=event.target.value;
     
        var array= [...this.state.FeeIndVal]

       
        array[index] = event.target.value;
    
      
      
      this.setState({FeeIndVal: array});
      
  
     
       
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



    axios.get(`http://127.0.0.1:8000/api/fee_category`)
    .then(res => {
      console.log(res.data);
      if (res.data.status == 'success') {
        this.setState({ feeCatList: res.data.data });
        //window.location.href = "http://127.0.0.1:8000/users";

        console.log(this.state.feeCatList);
      }


    })
	
}  

render() {  
	
    const style1 = {
        position: "absolute",
        border: "1px solid #d4d4d4",  
        zIndex: "99",  
      };  

      const style2 = {
        padding: "10px",			
        cursor: "pointer",
        color:"#000",			
        fontFamily: "New Times Roman",  
        fontSize:"15px",	    			
        backgroundColor: "#fff", 
        borderBottom: "1px solid #d4d4d4", 
        width:"325px",  	
      };    
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
				
			</div>
		</div> 		
		
		<div className="row">
		  <div className="col-xl-12 col-xxl-12">
			<div className="card">
			  
			  <div className="card-body">


				
				<div className="basic-form form-own className-wise-subject">
				  <form >
					<div className="text-center">      
						{this.state.showError ? <div className="error">{this.state.message}</div> : null}
						{this.state.showSuccess ? <div className="success">{this.state.message}</div> : null} 
					</div>
					<div className="form-row">
						

                    <div className="form-group col-md-6">	
						
						<input className="form-control" name="application_no" placeholder="Admission No." value={this.state.sibling_admission_no} onChange={this.handleAdmission} />	
                        <div style={style1}>   
											{
											  this.state.suggestions.map((item, index) => (  
												<div id={item.admission_no} data-f={item.father_name} data-m={item.mother_name} data-o={item.f_occupation} data-i={item.f_income} data-d={item.f_designation} data-mo={item.f_mobile} data-e={item.f_email} data-r={item.residence_no} key={item.id} style={style2} onClick={this.setAdmission}>{item.admission_no}-{item.student_name}-{item.className}-{item.father_name}</div>  		   		  
											  ))   		
											} 
										  </div> 
						   
					  </div>  
                      <div className="form-group col-md-6"> <button type="butoon" className="btn btn-primary" onClick={this.getIndFee}>Load</button>	</div>
                      </div>
                     
                      <div className="form-row">
						
 {this.state.showMidSec ?  
                        <div className="form-group col-md-4">	
                            
                            <b>Student Name </b> :  {this.state.student_name}
                               
                          </div>  

                          : null }
                          {this.state.showMidSec ?
                          <div className="form-group col-md-4"> 
                          <b> Father Name </b>: {this.state.father_name}
                          </div>
 : null }
{this.state.showMidSec ?
                          <div className="form-group col-md-4"> 
                         <b> Class </b>: {this.state.class}
                          </div>


: null }
                          </div>

                      <div className="form-row">
										  
					     
					  
					  <div className="form-group col-md-12">	
                      {this.state.showMidSec ?  	<label>Category wise Fee Amount Description</label>    						
					:null }  </div>  
					 
					  {this.state.showMidSec ?
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
											<input type="number" name="admission_fee" className="form-control"  value={this.state.admission_fee} onChange={this.handleChangeEvent}/>	 
										</td>   
									</tr>
									<tr>
										<td>Sports</td>  										
										<td>
											<input type="number" name="sport_fee" className="form-control" step="0.1" value={this.state.sport_fee} onChange={this.handleChangeEvent}/>	 
										</td>  
									</tr>
									<tr>
										<td>Library Fund</td>  										
										<td>
											<input type="number" name="library_fee"  className="form-control" step="0.01" value={this.state.library_fee} onChange={this.handleChangeEvent} />	 
										</td>  
									</tr>
									<tr>
										<td>Fine</td>  										
										<td>
											<input type="number" name="fine_fee"  className="form-control" step="0.01" value={this.state.fine_fee} onChange={this.handleChangeEvent}/>	 
										</td>  
									</tr>
									<tr>
										<td>Cultural Fee</td>  										
										<td>
											<input type="number" name="cultural_fee"  className="form-control" step="0.01" value={this.state.cultural_fee} onChange={this.handleChangeEvent} />	 
										</td>  
									</tr>
									<tr>
										<td>Science Fest</td>  										
										<td>
											<input type="number" name="science_fee"  className="form-control" step="0.01" value={this.state.science_fee} onChange={this.handleChangeEvent} />	 
										</td>   
									</tr>
									<tr>
										<td>Tution Fees</td>  										
										<td>
											<input type="number" name="tution_fee"  className="form-control" step="0.01" value={this.state.tution_fee} onChange={this.handleChangeEvent} />	 
										</td>  
									</tr>  
									<tr>
										<td>H Fee</td>  										
										<td>
											<input type="number" name="h_fee" className="form-control" step="0.01" value={this.state.h_fee} onChange={this.handleChangeEvent} />	 
										</td>  
									</tr>     
								</tbody>
							</table>
						</div>
						</div>






                        {/* <div className="Schedule-table">
						  <div className="table-responsive">
							<table className="table table-bordered table-striped verticle-middle table-responsive-sm">
								<thead>
									<tr>
										<th scope="col">Fee Category</th>   										
										<th scope="col">Fee Amount</th>   
									</tr>
								</thead>
								<tbody>
                                {this.state.feeCatList.map((item, key) => {
                              return (
									<tr>
										<td>{item.name} </td>  										
										<td>
											<input type="number"  className="form-control"  data-index={key} value={this.state.FeeIndVal[key]} onChange={this.handleChangeEvent2}/>	 
										</td>   
									</tr>
									 )
                                    })}
								   
								</tbody>
							</table>
						</div>
						</div> */}
                    
					  </div>



















                      : null }
					</div>
                    {this.state.showMidSec ?  
					<input type="submit" className="btn btn-primary" onClick={this.formSubmit} value="Save"/>
				  :null }
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

export default FeeAmountInd;	   	