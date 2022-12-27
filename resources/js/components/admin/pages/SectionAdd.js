import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class SectionAdd extends Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      showSuccess:false,
      messgae:'',
      courseList:[],
      classList:[],
      courseId:'',
      classId:'',
      sectionName:'',
      status:1,
      remark:''
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.getClasslist = this.getClasslist.bind(this);    
  
  }
  handleChangeEvent(event){
    event.preventDefault();
    console.log("gdtyy");
    console.log(event.target);
    if (event.target.name == 'courseId'){
    this.setState({ [event.target.name]: event.target.value },this.getClasslist);
    }
    else{

      this.setState({ [event.target.name]: event.target.value });
    }
     console.log(this.state.courseId);
    
     
    }
    getClasslist(event){
      axios.get(`http://127.0.0.1:8000/api/class_list_by_id/${this.state.courseId}`)  
      .then(res => {  
       console.log(res.data);
       if(res.data.status == true){
          this.setState({ classList:res.data.data});
          //window.location.href = "http://127.0.0.1:8000/users";
    
          console.log(this.state.classList);
       }
      
      
      })  
    }


  formSubmit(event){
    event.preventDefault();
   
    if(this.state.courseId == ''){
      this.setState({ showError: true, message:"Course can't be empty" });
    }

    else if(this.state.classId == ''){
      this.setState({ showError: true, message:"Class can't be empty" });
    }
    else if(this.state.sectionName == ''){
      this.setState({ showError: true, message:"Section Name can't be empty" });
    }
   else{
  
   
    axios.post(`http://127.0.0.1:8000/api/add_section_process`, {
        courseId: this.state.courseId,
        classId: this.state.classId,
        sectionName:this.state.sectionName,
        status:this.state.status,
        remark:this.state.remark

      })  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ showError: false,showSuccess:true,message:res.data.message});
       window.location.href = "http://127.0.0.1:8000/section_list";
     }
    
     if(res.data.status == false){
        this.setState({ showError: true,showSuccess:false,message:res.data.message});
     }
    })  

  }

  
 
}
componentDidMount() {
 
   

  axios.get(`http://127.0.0.1:8000/api/course_list/`)  
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
                  <h4>Add Section</h4>
                </div>
              </div>
              <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol className="breadcrumb">
                  <li><a href="/section_list" className="btn bg-blue-soft text-blue"><i className="fa fa-angle-double-left" /> Back to Section List</a></li>
                </ol>
              </div>
            </div>
            {/* row */}
            <div className="row">
              <div className="col-xl-12 col-xxl-12">
                <div className="card">
                  {/*div class="card-header"><h4 class="card-title">All Class List</h4></div*/}
                  <div className="card-body">
                    <div className="basic-form form-own">
                      <form onSubmit={this.formSubmit}>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>Course Name</label>
                            <select className="form-control" id="courseid" name="courseId" onChange={this.handleChangeEvent} value={this.state.courseId}>
                              <option value="">Select Course</option>
                              {this.state.courseList.map( (item, key) => {
                                return (
                              <option value={item.courseId}>{item.courseName}</option>
                              )
                            })}
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label>Class Name</label>
                            <select className="form-control" id="classid" name="classId" onChange={this.handleChangeEvent} value={this.state.classId}>
                              <option value="">Select Class</option>
                              {this.state.classList.map( (item, key) => {
                                return (
                              <option value={item.classId}>{item.className}</option>
                              )
                            })}
                            </select>
                          </div>
                          <div className="form-group col-md-12">
                            <label>Section Name</label>
                            <div className="form-checkbox-grid">
                              <div className=" col-md-4">
                                <input type="text" className="form-control" name="sectionName" value={this.state.sectionName} onChange={this.handleChangeEvent} />
                               
                              </div>
                             
                            </div>
                          </div>

                          <div className="form-group col-md-12">
                            <label>Remark</label>
                            <div className="form-checkbox-grid">
                              <div className=" col-md-4">
                                <input type="text" className="form-control" name="remark" value={this.state.remark} onChange={this.handleChangeEvent} />
                               
                              </div>
                             
                            </div>
                          </div>
                          <div className="form-group col-md-12">
                            <label>Status Of Section</label>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" value="1" checked={this.state.status === 1} onChange={this.handleChangeEvent} />
                              <label className="form-check-label">Enable</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" value="1" checked={this.state.status === 0} onChange={this.handleChangeEvent}/>
                              <label className="form-check-label">Disable</label>
                            </div>
                          </div>
                        </div>{/*/ form-row */}
                        <input type="submit" className="btn btn-primary" defaultValue="Submit" />
                     
                        <div className="text-center">
                                                   
                                                   {this.state.showError ?  <div className="error">{this.state.message}</div> : null }
                                             
                                                   {this.state.showSuccess ?  <div className="success">{this.state.message}</div> : null }
                                             
                                               </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>  
            </div>{/*/ row */}
          </div>
        </div>
        {/***********************************
          Content body end
    
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

export default SectionAdd;
