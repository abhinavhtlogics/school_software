import React, { Component } from "react";
import axios from 'axios'; 
import { Link } from 'react-router-dom';  
import Swal from 'sweetalert2';		    

import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

axios.defaults.baseURL='http://127.0.0.1:8000/api';			

class RouteList extends Component {
	
   constructor(props) {
  super(props)
  this.state = {
   items: []		
  }
  this.handleDelete = this.handleDelete.bind(this);  
 }
 handleDelete(id) {
        
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
				axios.delete(`route/delete/${id}`)						
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
  
   axios.get('route/index').then((response) => {	  		
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
    }).
	catch((error) => {
		console.log(error.message); 	
	})   
  
  
 }   

  render() { 
	  
	let items  = this.state.items;    	
	
	let itemLists = [];	
      if (items.length) {
        itemLists = items.map((item) => {	
		
		  return (
				<tr key={item.routeId}>
				  <td>{item.routeNo}</td>  
				  <td>{item.stations}</td> 				     				  	
				  <td>
					<Link to={`/route_view/${item.routeId}`} className='btn'>		
				   <i className="fa fa-eye" aria-hidden="true"></i></Link>		
				   <Link to={`/route_edit/${item.routeId}`} className='btn'>		
				   <i className="fa fa-edit" aria-hidden="true"></i></Link>									  				  
				  <button className="btn" onClick={() => this.handleDelete(`${item.routeId}`)}>		
				  <i className="fa fa-trash" aria-hidden="true"></i>  		
				  </button>
				  </td>                  
				</tr>  
			  );    		
          
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
                            <h4>Route List</h4>		
                        </div>
                    </div>
                    <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                        <ol className="breadcrumb breadcrumb-btn">
                            <li>
							 <Link to={`/route_add`} className="btn bg-blue-soft text-blue">  
							 <i className="fa fa-user-plus">Add New Route</i>  
							 </Link>
							 </li>						
                        </ol>
                    </div>
                </div>                

                <div className="row">
                    <div className="col-12">
                        <div className="card">                           
							
                            <div className="card-body create-user-table">									
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped verticle-middle table-responsive-sm display" id="example">
                                        <thead>
                                            <tr>
                                                <th scope="col">Route No.</th>	
                                                <th scope="col">Station List</th>                                    
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
export default RouteList;  