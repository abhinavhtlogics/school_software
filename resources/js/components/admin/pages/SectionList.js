import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class SectionList extends Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      showSuccess:false,
      messgae:'',
      remark:'',
      courseName:'',
      courseList:[]
     
    };
   
   
   
    
  
  }
 

  componentDidMount() {
 
   

    axios.get(`http://127.0.0.1:8000/api/section_list`)  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ courseList:res.data.data});
        //window.location.href = "http://127.0.0.1:8000/users";

        console.log(this.state.courseList);
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
                    <h4>Section List</h4>
                  </div>
                </div>
                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                  <ol className="breadcrumb breadcrumb-btn">
                    <li><a href="/section_add" className="btn bg-blue-soft text-blue"><i className="fa fa-user-plus" /> Add New Section</a></li>
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
                            <th scope="col">Course Name</th>
                            <th scope="col">Class Name</th>
                              <th scope="col">Section Name</th>
                              <th scope="col">Status</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                           
                            {this.state.courseList.map( (item, key) => {
                                return (
                            <tr>
                                 <td>{item.courseId} </td>
                                 <td>{item.classId} </td>
                              <td>{item.sectionName}  </td>
                              <td>{item.status == 1 && <span class="badge bg-green-soft text-green">Enable</span> }
                              {item.status == 0 && <span class="badge bg-red-soft text-red">Disable</span> }
                               </td>
                              <td><a className="btn" href="./course-edit.html"><i className="fa fa-edit" aria-hidden="true" /></a>
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

export default SectionList;
