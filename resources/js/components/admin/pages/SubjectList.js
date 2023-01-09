import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class SubjectList extends Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      showSuccess:false,
      messgae:'',
      remark:'',
      courseName:'',
      subjectList:[]
     
    };
   
   
   
    
  
  }
 

  componentDidMount() {
 
   

    axios.get(`http://127.0.0.1:8000/api/subject_list`)  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ subjectList:res.data.data});
        //window.location.href = "http://127.0.0.1:8000/users";

       // console.log(this.state.courseList);
     }
    
    
    })  

    
}
  render() {
    
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
                    <h4>Subject List</h4>
                  </div>
                </div>
                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                  <ol className="breadcrumb breadcrumb-btn">
                    <li><a href="/subject_add" className="btn bg-blue-soft text-blue"><i className="fa fa-user-plus" /> Add New Subject</a></li>
                  </ol>
                </div>
              </div>
              {/* row */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    {/*div class="card-header"><h4 class="card-title">Basic Datatable</h4></div*/}
                    <div className="card-body create-user-table">
                      <div className="table-responsive">
                        <table className="table table-bordered table-striped verticle-middle table-responsive-sm" id="example">
                          <thead>
                            <tr>
                            <th scope="col">Subject Name</th>
                           
                              <th scope="col">Remark</th>
                              <th scope="col">Short Code</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                           
                            {this.state.subjectList.map( (item, key) => {
                                return (
                            <tr>
                              
                                 <td>{item.subjectName} </td>
                              <td>{item.Remark}  </td>
                              <td>{item.shortCode}  </td>
                              <td><a className="btn" href={`/subject_edit/${item.subjectId}`}><i className="fa fa-edit" aria-hidden="true" /></a>
                                <a className="btn" href="#"><i className="fa fa-trash" aria-hidden="true" /></a></td>
                            </tr>
                            )
                        })}
                          </tbody>
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

export default SubjectList;
