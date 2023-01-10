import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class ClassWiseSubjectList extends Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      showSuccess:false,
      messgae:'',
      remark:'',
      courseName:'',
      ajaxdata:[]
     
    };
   
   
   
    
  
  }
 

  componentDidMount() {
 
   

    axios.get(`http://127.0.0.1:8000/api/class_wise_subject`)  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ ajaxdata:res.data.data});
        //window.location.href = "http://127.0.0.1:8000/users";

        console.log(this.state.ajaxdata);
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
                <h4>Class Wise Subjects List</h4>
              </div>
            </div>
            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
              <ol className="breadcrumb breadcrumb-btn">
                <li><a href="./class_wise_subject_add" className="btn bg-blue-soft text-blue"><i className="fa fa-user-plus" /> Add Class Wise Subjects</a></li>
              </ol>
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Color Indicator &nbsp; &nbsp; &nbsp; <span className="btn bg-red-soft text-red" /> <small className="text-red">Compulsory Subject</small> <span className="btn bg-green-soft text-green" /> <small className="text-green">Elective Subject</small> <span className="btn bg-purple-soft text-purple" /> <small className="text-purple">Additional Subject</small></h4>
                </div>
                <div className="card-body create-user-table">
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped verticle-middle table-responsive-sm" id="example34">
                      <thead>
                        <tr>
                          <th scope="col">Course Name</th>
                          <th scope="col">Class Name</th>
                          <th scope="col">Section Name</th>
                          <th scope="col">Subject List</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.ajaxdata.map( (item, key) => {
                                return (
                        <tr>
                          <td>{ item.courseName}</td>
                          <td>{ item.className}</td>
                          <td>{ item.sectionName}</td>
                          <td>
                            <span className="badge bg-green-soft text-green">English</span>
                            <span className="badge bg-red-soft text-red">Hindi</span>
                            <span className="badge bg-purple-soft text-purple">Maths</span>
                            <span className="badge bg-red-soft text-red">Science</span>
                            <span className="badge bg-red-soft text-red">Social Science</span>
                          </td>
                          <td><a className="btn" href={`/class_wise_subject_edit/${item.id}`}><i className="fa fa-edit" aria-hidden="true" /></a>
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

export default ClassWiseSubjectList;
