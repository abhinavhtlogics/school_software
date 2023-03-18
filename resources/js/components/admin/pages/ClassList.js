import React, { Component } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';  
import Swal from 'sweetalert2';		    

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';			

class ClassList extends Component {
	
   constructor(props) {
  super(props)
  this.state = {
   items: []		
  }
  this.handleDelete = this.handleDelete.bind(this);  
 }
 handleDelete(id) {
        // remove from local state
        		
        //axios.get(`/class/delete/${id}`);	
		Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
		if (result.value) {		//
				axios.delete(`/class/delete/${id}`)						
				  .then((response) => {			
					
					if(response.data.status=='successed')
					{
						Swal.fire({
							icon:"success",  
							text:response.data.message    	
						});
					}
					else
					{
						Swal.fire({
							icon:"error",  
							text:response.data.message    	
						});
					}						 
					this.getData();							
				  })
				  .catch((error) => {
					console.log(error.message); 	
					Swal.fire({
						text:error.message,
						icon:"error"		
					})	
				  });
				//		
				}
			});
		
    }
 componentDidMount() {
    this.getData();
 }
 getData(){
	 
  /* axios.get('/class/index').then(response => {
   this.setState({
    items: response.data		
   })
  }) */
  
   axios.get('/class/index').then((response) => {
        if (response.status === 200) {
        this.setState({
            items: response.data.data ? response.data.data : [],		
        });
        }
        if (
        response.data.status === "failed" &&
        response.data.success === false
        ) {
        this.setState({
            items: [],		
        });
        }
    });
  
  
 }   

  render() { 
	  
	const { items } = this.state;
	var status_row=''; 
	var path = location.protocol + '//' + location.host + '/';  
	
	let itemLists = [];	
      if (items.length) {
        itemLists = items.map((item) => {	
		
		  if (item.status) { 
			  
			  return (
				<tr key={item.classId }>
				  <td>{item.courseName }</td>  
				  <td>{item.className}</td>
				  <td><span className="badge bg-green-soft text-green">Enable</span></td>    
				  <td>{item.Remark}</td>
				  <td> 
				   <a href={`/class_edit/${item.classId}`} className='btn'>
				   <i className="fa fa-edit" aria-hidden="true"></i></a>									  				  
				  <button className="btn" onClick={() => this.handleDelete(`${item.classId}`)}>
				  <i className="fa fa-trash" aria-hidden="true"></i>  
				  </button>
				  </td>                  
				</tr>  
			  );
		  }	  
		  else
		  { 			  	
			  return (
				<tr key={item.classId }>
				  <td>{item.courseName }</td>  
				  <td>{item.className}</td>
				  <td><span className="badge bg-red-soft text-red">Disable</span></td>    
				  <td>{item.Remark}</td>		
				  <td>
				  <a href={`/class_edit/${item.classId}`} className='btn'>
				   <i className="fa fa-edit" aria-hidden="true"></i></a>  				  				  
				  <button className="btn" onClick={() => this.handleDelete(`${item.classId}`)}>
				  <i className="fa fa-trash" aria-hidden="true"></i>  
				  </button>		
				  </td>                 
				</tr>
			  );
		  } 		  
		
          
        });
      }    	
	
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




<HeaderPart />


 {/***********************************
  HaderPart end
************************************/}






   {/***********************************
    Main wrapper start
************************************/}

<div id="main-wrapper">




          {/***********************************
            Content body start
        ************************************/}
          
		  <div className="content-body">
            <div className="container-fluid">
                <div className="row page-titles mx-0">
                    <div className="col-sm-6 p-md-0">
                        <div className="welcome-text">
                            <h4>Class List</h4>			
                        </div>
                    </div>
                    <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <ol className="breadcrumb breadcrumb-btn">
                            <li>
							 <a href={`/class_add`} className="btn bg-blue-soft text-blue">
							 <i className="fa fa-user-plus">Add New Class</i>  
							 </a>			
							 </li>						
                        </ol>
                    </div>
                </div>                

                <div className="row">
                    <div className="col-12">
                        <div className="card">                           
							
                            <div className="card-body create-user-table">									
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped verticle-middle table-responsive-sm" id="example">
                                        <thead>
                                            <tr>
                                                <th scope="col">Course Name</th>
                                                <th scope="col">Class Name</th>                                                 
                                                <th scope="col">Status</th>
												<th scope="col">Remark</th>  
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                          <tbody>{itemLists}</tbody>  
                                    </table>
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

export default ClassList;  