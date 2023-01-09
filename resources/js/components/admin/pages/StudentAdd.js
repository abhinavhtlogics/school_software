import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class StudentAdd extends Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      showSuccess:false,
      messgae:'',
      remark:'',
      courseName:'',
      courseList:[],
      classList:[],
      courseId:'',
      classId:'',
      studentName:'',
      email:'',
      bloodGroup:'',
      mobile:'',
      aadhar:'',
      perm_addr:'',
      temp_addr:'',
      pincode:'',
      accountNo:'',
      ifsc:'',
      branch_addr:'',
      errors:[]
     
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
    this.setState({ showError: false, showSuccess:false });
  



    axios.post(`http://127.0.0.1:8000/api/add_student_process`, {
        studentName: this.state.studentName,
        email:this.state.email,
        bloodGroup:this.state.bloodGroup,
        mobile:this.state.mobile,
        aadhar:this.state.aadhar,
        perm_addr:this.state.perm_addr,
        temp_addr:this.state.temp_addr,
        pincode:this.state.pincode,
        accountNo:this.state.accountNo,
        ifsc:this.state.ifsc,
        branch_addr:this.state.branch_addr


      })  
    .then(res => {  
     console.log(res);

     if(res.data.errors){
        this.setState({ errors: res.data.errors, showError: true});
      //  window.location.href = "http://127.0.0.1:8000/course_list";
     
     }
     console.log(this);
     if(res.data.status == true){
        this.setState({ showError: false,showSuccess:true,message:res.data.message});
      //  window.location.href = "http://127.0.0.1:8000/course_list";
     }
    
     if(res.data.status == false){
        this.setState({ showError: true,showSuccess:false,message:res.data.message});
     }
    }).catch(
        function (error) {
          console.log(error);
          console.log(error.response);
         
        } ) 
   
    
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
                <h4>Add Student</h4>
              </div>
            </div>
            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
              <ol className="breadcrumb">
                <li><a href="./student-admission.html" className="btn bg-blue-soft text-blue"><i className="fa fa-angle-double-left" /> Back to Admitted Student List</a></li>
              </ol>
            </div>
          </div>
          {/* row */}
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="profile-tab">
                <div className="custom-tab-1">
                  <ul className="nav nav-tabs">
                    <li className="nav-item"><a href="#personal-details" data-toggle="tab" className="nav-link active show">Personal Details</a></li>
                    <li className="nav-item"><a href="#parents-details" data-toggle="tab" className="nav-link">Parents Details</a></li>
                    <li className="nav-item"><a href="#admission-details" data-toggle="tab" className="nav-link">Admission Details</a></li>
                    <li className="nav-item"><a href="#subjects-details" data-toggle="tab" className="nav-link">Subjects Details</a></li>
                    <li className="nav-item"><a href="#settings" data-toggle="tab" className="nav-link">Misc. Settings</a></li>
                  </ul>
                  <div className="tab-content">
                    <div id="personal-details" className="tab-pane fade active show">
                      <div className="pt-3">
                        <div className="settings-form">
                          <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                              <div className="card">
                                <div className="card-header"><h4 className="card-title">Upload Student Photo</h4></div>
                                <div className="card-body text-center account-profile">
                                  <img className="img-account-profile rounded-circle mb-2 img-thumbnail" src="./images/student.jpg" alt="" />
                                  <div className="small font-italic text-muted mb-4">JPG or PNG not larger than 100 KB</div>
                                  <div className="upload-grid">
                                    <img src="./images/upload-icon.png" alt="" />
                                    <input type="file" id="upload" name="myfile" className="btn btn-primary" placeholder="Upload new image" />
                                    <label htmlFor="forDesign">Upload new image</label>
                                  </div>
                                </div>
                              </div>{/*/ card */}
                            </div>{/*/ col-4 */}
                            <div className="col-xl-8 col-lg-8 col-md-8">
                              <div className="card">
                                <div className="card-body">
                                  <div className="basic-form form-own">
                                    <form onSubmit={this.formSubmit}>
                                      <div className="form-row">
                                        <div className="form-group col-md-6">
                                          <label>Student Name</label>
                                          <input type="text" className="form-control" placeholder value={this.state.studentName} name="studentName" onChange={this.handleChangeEvent}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Date of Birth</label>
                                          <div className="example">
                                            <input type="text" className="form-control input-daterange-timepicker" name="daterange" defaultValue="10/10/2022 2:00 PM" />
                                          </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Gender</label>
                                          <div className="form-check settings-form-radio">
                                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option2" defaultChecked />
                                            <label className="form-check-label">Male</label>
                                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option2" />
                                            <label className="form-check-label">Female</label>
                                          </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Nationality</label>
                                          <div className="form-check settings-form-radio">
                                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option2" defaultChecked />
                                            <label className="form-check-label">Indian</label>
                                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option2" />
                                            <label className="form-check-label">Non-Indian</label>
                                          </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Caste</label>
                                          <select className="form-control" id="caste" name="caste"><option value>General</option><option>General</option><option>OBC</option><option>SC</option><option>ST</option><option>Other</option></select>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Religion</label>
                                          <select className="form-control" id="religion" name="religion"><option value>Hindu</option><option>Hindu</option><option>Muslim</option><option>Sikh</option><option>Christian</option><option>Jain</option><option>Buddh</option></select>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Maritial Status</label>
                                          <select className="form-control" id="Maritial_status" name="Maritial_status"><option value>Un-Married</option><option>Un-Married</option><option>Married</option></select>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Mobile No.</label>
                                          <input type="number" className="form-control" placeholder value={this.state.mobile} name="mobile" onChange={this.handleChangeEvent} />
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Email</label>
                                          <input type="text" className="form-control" placeholder value={this.state.email} name="email" onChange={this.handleChangeEvent} />
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Blood Group</label>
                                          <input type="text" className="form-control" placeholder value={this.state.bloodGroup} name="bloodGroup" onChange={this.handleChangeEvent} />
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Aadhar No.</label>
                                          <input type="text" className="form-control" placeholder value={this.state.aadhar} name="aadhar" onChange={this.handleChangeEvent} />
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Permanent Address</label>
                                          <textarea className="form-control" placeholder value={this.state.perm_addr} name="perm_addr" onChange={this.handleChangeEvent} />
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Temporary Address</label>
                                          <textarea className="form-control" placeholder value={this.state.temp_addr} name="temp_addr" onChange={this.handleChangeEvent} />
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>State</label>
                                          <select className="form-control" id="state" name="state" onchange="getdistt();"><option value>Select State</option><option value={67}>ANDAMAN &amp; NICOBAR</option><option value={36}>ANDHRA PRADESH</option><option value={38}>ARUNACHAL PRADESH</option><option value={37}>ASSAM</option><option value={40}>BIHAR</option><option value={66}>CHANDIGARH</option><option value={70}>CHATTISGARH</option><option value={65}>DADRA &amp; NAGAR</option><option value={64}>DAMAN &amp; DIU</option><option value={60}>DELHI</option><option value={61}>GOA</option><option value={39}>GUJRAT</option><option value={2}>H.P</option><option value={3}>HARYANA</option><option value={4}>J&amp; K</option><option value={69}>JHARKHAND</option><option value={44}>KARNATAKA</option><option value={45}>KERALA</option><option value={63}>LAKSHDWEEP</option><option value={46}>MADHYA PRADESH</option><option value={47}>MAHARASHTRA</option><option value={48}>MANIPUR</option><option value={49}>MEGHALAYA</option><option value={50}>MIZORAM</option><option value={51}>NAGALAND</option><option value={52}>ORISSA</option><option value={62}>PONDICHERY</option><option value={1}>Punjab</option><option value={54}>RAJASTHAN</option><option value={55}>SIKKIM</option><option value={56}>TAMIL NADU</option><option value={57}>TRIPURA</option><option value={58}>UTTAR PRADESH</option><option value={68}>UTTARANCHAL</option><option value={59}>WEST BENGAL</option></select>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>District</label>
                                          <select className="form-control" id="district" name="district"><option value>Select District</option></select>
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Pincode</label>
                                          <input className="form-control" id="pincode"  type="number" value={this.state.pincode} name="pincode" onChange={this.handleChangeEvent} />
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Account No.</label>
                                          <input className="form-control"  type="text" value={this.state.accountNo} name="accountNo" onChange={this.handleChangeEvent} />
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>IFSC Code</label>
                                          <input className="form-control" type="text" value={this.state.ifsc} name="ifsc" onChange={this.handleChangeEvent}  />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <label>Branch Address</label>
                                          <textarea className="form-control" placeholder value={this.state.branch_addr} name="branch_addr" onChange={this.handleChangeEvent} />
                                        </div>

                                        {this.state.showError ?  <div className="error">{this.state.errors.map((error, i) => <p key={i}>{error.value}</p>)}</div> : null }
                                      </div>{/*/ form-row */}
                                    </form>
                                  </div>
                                </div>{/*/ card-body */}
                              </div>{/*/ card */}
                            </div>{/*/ col-8 */}
                          </div>{/*/ row */}
                        </div>{/*/ settings-form */}
                      </div>
                    </div>{/*/ tab-pane */}
                    <div id="parents-details" className="tab-pane fade">
                      <div className="pt-3">
                        <div className="settings-form">
                          <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                              <div className="card">
                                <div className="card-header"><h4 className="card-title">Upload Father Image</h4></div>
                                <div className="card-body text-center account-profile">
                                  <img className="img-account-profile rounded-circle mb-2 img-thumbnail" src="./images/male.jpg" alt="" />
                                  <div className="small font-italic text-muted mb-4">JPG or PNG not larger than 100 KB</div>
                                  <div className="upload-grid">
                                    <img src="./images/upload-icon.png" alt="" />
                                    <input type="file" id="upload" name="myfile" className="btn btn-primary" placeholder="Upload new image" />
                                    <label htmlFor="forDesign">Upload new image</label>
                                  </div>
                                </div>
                              </div>{/*/ card */}
                              <div className="card">
                                <div className="card-header"><h4 className="card-title">Upload Mother Image</h4></div>
                                <div className="card-body text-center account-profile">
                                  <img className="img-account-profile rounded-circle mb-2 img-thumbnail" src="./images/female.jpg" alt="" />
                                  <div className="small font-italic text-muted mb-4">JPG or PNG not larger than 100 KB</div>
                                  <div className="upload-grid">
                                    <img src="./images/upload-icon.png" alt="" />
                                    <input type="file" id="upload" name="myfile" className="btn btn-primary" placeholder="Upload new image" />
                                    <label htmlFor="forDesign">Upload new image</label>
                                  </div>
                                </div>
                              </div>{/*/ card */}
                            </div>{/*/ col-4 */}
                            <div className="col-xl-8 col-lg-8 col-md-8">
                              <div className="card">
                                <div className="card-body">
                                  <div className="basic-form form-own">
                                    <form>
                                      <div className="form-row">
                                        <div className="form-group col-md-12">
                                          <label>Father Name</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <label>Mother Name</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <label>Father's Occupation</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <label>Father's Annual Income</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <label>Designation</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <label>Mobile No (For SMS)</label>
                                          <input type="number" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <label>E-Mail ID</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-12">
                                          <label>Phone(Office/Res.)</label>
                                          <input type="number" className="form-control" placeholder />
                                        </div>
                                      </div>{/*/ form-row */}
                                    </form>
                                  </div>
                                </div>{/*/ card-body */}
                              </div>{/*/ card */}
                            </div>{/*/ col-8 */}
                          </div>{/*/ row */}
                        </div>{/*/ settings-form */}
                      </div>
                    </div>{/*/ tab-pane */}
                    <div id="admission-details" className="tab-pane fade">
                      <div className="pt-3">
                        <div className="settings-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card">
                                <div className="card-body">
                                  <div className="basic-form form-own">
                                    <form>
                                      <div className="form-row">
                                        <div className="form-group col-md-6">
                                          <label>Date of Admission</label>
                                          <input type="text" className="form-control" placeholder="10-October-2022 name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Admission No.</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Course Name</label>
                                          <select className="form-control" id="courseid" name="courseId" onChange={this.handleChangeEvent} value={this.state.courseId}>
                              <option value="">Select Course</option>
                              {this.state.courseList.map( (item, key) => {
                                return (
                              <option value={item.courseId}>{item.courseName}</option>
                              )
                            })}
                            </select> </div>
                                        <div className="form-group col-md-4">
                                          <label>Class Name</label>
                                          <select className="form-control" id="classid" name="classId" onChange={this.handleChangeEvent} value={this.state.classId}>
                              <option value="">Select Class</option>
                              {this.state.classList.map( (item, key) => {
                                return (
                              <option value={item.classId}>{item.className}</option>
                              )
                            })}
                            </select>    </div>
                                        <div className="form-group col-md-4">
                                          <label>Section Name</label>
                                          <select className="form-control valid" id="nameid" name="nameid" onchange="FillSections()" aria-invalid="false"><option value={0}>--Select Name--</option></select>
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Student Roll No.</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Registration No.</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-4">
                                          <label>Board Roll No.</label>
                                          <input type="text" className="form-control" placeholder />
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Whether Submitted Original School Leaving Certificate(S.L.C)</label>
                                          <div className="form-check settings-form-radio">
                                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option2" defaultChecked />
                                            <label className="form-check-label">Yes</label>
                                            <input className="form-check-input" type="radio" name="gridRadios" defaultValue="option2" />
                                            <label className="form-check-label">No</label>
                                          </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                          <label>Class of Student at the time of Admission*</label>
                                          <div className="form-row">
                                            <div className="form-group col-md-6">
                                              <select className="form-control" id="courseid_first" name="courseid_first" onchange="fillclassfirst()"><option value>Select Course</option><option value="C001">Pre - Primary</option><option value="C002">Primary</option><option value="C003">Middle</option><option value="C0037">High</option><option value="C00102">adta</option><option value="C00110">Test</option><option value="C004150">JBT</option></select>
                                            </div>
                                            <div className="form-group col-md-6">
                                              <select className="form-control" id="classid_first" name="classid_first"><option value>Select Class</option></select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>{/*/ form-row */}
                                    </form>
                                  </div>
                                </div>{/*/ card-body */}
                              </div>{/*/ card */}
                            </div>{/*/ col-8 */}
                          </div>{/*/ row */}
                        </div>{/*/ settings-form */}
                      </div>
                    </div>{/*/ tab-pane */}
                    <div id="subjects-details" className="tab-pane fade">
                      <div className="pt-3">
                        <div className="settings-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card">
                                <div className="card-body">
                                  <div className="basic-form form-own subjects-checkbox">
                                    <form>
                                      <div className="form-row">
                                        <div className="form-group col-md-4 sc-red">
                                          <h4>Compulsory Subjects</h4>
                                          <div className="form-check form-checkbox">
                                            <div className="bg-padd">
                                              <input type="checkbox" className="form-check-input" id="check1" defaultValue />
                                              <label className="form-check-label" htmlFor="check1">English</label>
                                            </div>
                                          </div>
                                          <div className="form-check form-checkbox">
                                            <div className="bg-padd">
                                              <input type="checkbox" className="form-check-input" id="check1" defaultValue />
                                              <label className="form-check-label" htmlFor="check1">Hindi</label>
                                            </div>
                                          </div>
                                          <div className="form-check form-checkbox">
                                            <div className="bg-padd">
                                              <input type="checkbox" className="form-check-input" id="check1" defaultValue />
                                              <label className="form-check-label" htmlFor="check1">Maths</label>
                                            </div>
                                          </div>
                                          <div className="form-check form-checkbox">
                                            <div className="bg-padd">
                                              <input type="checkbox" className="form-check-input" id="check1" defaultValue />
                                              <label className="form-check-label" htmlFor="check1">Maths</label>
                                            </div>
                                          </div>
                                          <div className="form-check form-checkbox">
                                            <div className="bg-padd">
                                              <input type="checkbox" className="form-check-input" id="check1" defaultValue />
                                              <label className="form-check-label" htmlFor="check1">Social Science </label>
                                            </div>
                                          </div>
                                          <div className="form-check form-checkbox">
                                            <div className="bg-padd">
                                              <input type="checkbox" className="form-check-input" id="check1" defaultValue />
                                              <label className="form-check-label" htmlFor="check1">Physical Education</label>
                                            </div>
                                          </div>
                                        </div>{/*/ form-group */}
                                        <div className="form-group col-md-4 sc-green">
                                          <h4>Elective Subjects</h4>
                                          <div className="form-check form-checkbox">
                                            <div className="bg-padd">
                                              <input type="checkbox" className="form-check-input" id="check1" defaultValue />
                                              <label className="form-check-label" htmlFor="check1">I.T</label>
                                            </div>
                                          </div>
                                        </div>{/*/ form-group */}
                                        <div className="form-group col-md-4 sc-purple">
                                          <h4>Additional Subjects</h4>
                                          <div className="form-check form-checkbox">
                                            <div className="bg-padd">
                                              <input type="checkbox" className="form-check-input" id="check1" defaultValue />
                                              <label className="form-check-label" htmlFor="check1"> Physical Education </label>
                                            </div>
                                          </div>
                                        </div>{/*/ form-group */}
                                      </div>{/*/ form-row */}
                                    </form>
                                  </div>
                                </div>{/*/ card-body */}
                              </div>{/*/ card */}
                            </div>{/*/ col-8 */}
                          </div>{/*/ row */}
                        </div>{/*/ settings-form */}
                      </div>
                    </div>{/*/ tab-pane */}
                    <div id="settings" className="tab-pane fade">
                      <div className="pt-3">
                        <div className="settings-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="card">
                                <div className="card-body">
                                  <div className="basic-form form-own">
                                    <form>
                                      <div className="form-row">
                                        <div className="form-group col-md-12">
                                          <h5>Transportation Required</h5>
                                          <div className="form-check settings-form-radio mrb-15">
                                            <input className="form-check-input" type="radio" name="Transportation" defaultValue="True" />
                                            <label className="form-check-label">Yes</label>
                                            <input className="form-check-input" type="radio" name="Transportation" defaultValue="False" />
                                            <label className="form-check-label">No</label>
                                          </div>
                                          <div className="form-row"> 
                                            <div className="form-group col-md-4">
                                              <select className="form-control selectpicker" id="StationID" name="StationID" onchange="BindRoute()" tabIndex={-98}><option value>Select Station</option><option value={2405}>Bilaspur</option><option value={1359}>Chandigarh</option><option value={5861}>Darlaghat</option><option value={1358}>Kharar</option><option value={1360}>Mohali</option><option value={5859}>Secto 70</option></select>
                                            </div>{/*/ form-group */}
                                            <div className="form-group col-md-4">
                                              <select className="form-control valid" id="routeid" name="routeid" onchange="bindbus()" aria-invalid="false"><option value={0}>--Select Route--</option><option value="R002047">Route 1</option><option value="R001032">Route 2</option></select>
                                            </div>{/*/ form-group */}
                                            <div className="form-group col-md-4">
                                              <select className="form-control valid" id="busno" name="busno" aria-invalid="false"><option value={0}>--Select Bus No--</option><option value={1035}>HP23C9700</option><option value={1034}>PB-9700</option></select>
                                            </div>{/*/ form-group */}
                                          </div>{/*/ form-row */}
                                        </div>
                                        <div className="form-group col-md-12">
                                          <h5>Transportation Concession</h5>
                                          <div className="form-check settings-form-radio mrb-15">
                                            <input className="form-check-input" type="radio" name="TransportConcession" defaultValue="True" />
                                            <label className="form-check-label">Yes</label>
                                            <input className="form-check-input" type="radio" name="TransportConcession" defaultValue="False" />
                                            <label className="form-check-label">No</label>
                                          </div>
                                          <div className="form-row"> 
                                            <div className="form-group col-md-4">
                                              <input type="text" id="busfare" name="busfare" className="form-control text-box single-line valid" placeholder="Station Fare" readOnly aria-invalid="false" />
                                            </div>{/*/ form-group */}
                                            <div className="form-group col-md-4">
                                              <input className="form-control text-box single-line" data-val="true" data-val-number="The field TransConcessionAmount must be a number." id="TransConcessionAmount" name="TransConcessionAmount" onkeyup="totalbusfare()" placeholder="Enter Concession Amount" type="text" defaultValue />
                                            </div>{/*/ form-group */}
                                            <div className="form-group col-md-4">
                                              <input type="text" id="totfare" name="totfare" className="form-control text-box single-line" placeholder="After Concession" readOnly />
                                            </div>{/*/ form-group */}
                                          </div>{/*/ form-row */}
                                        </div>
                                        <div className="form-group col-md-12">
                                          <h5>Staff Child</h5>
                                          <div className="form-check settings-form-radio mrb-15">
                                            <input className="form-check-input" type="radio" name="StaffChild" defaultValue="True" />
                                            <label className="form-check-label">Yes</label>
                                            <input className="form-check-input" type="radio" name="StaffChild" defaultValue="False" />
                                            <label className="form-check-label">No</label>
                                          </div>
                                          <div className="form-row"> 
                                            <div className="form-group col-md-4">
                                              <select className="form-control valid" data-val="true" data-val-number="The field Select Child must be a number." id="staffChildNo" name="staffChildNo" aria-invalid="false" aria-describedby="staffChildNo-error"><option value={0}>Select Child</option><option value={1}>1st Child</option><option value={2}>2nd Child</option></select>
                                            </div>{/*/ form-group */}
                                          </div>{/*/ form-row */}
                                        </div>
                                        <div className="form-group col-md-12">
                                          <h5>Management Concession</h5>
                                          <div className="form-check settings-form-radio">
                                            <input className="form-check-input" type="radio" name="ManagementConcession" defaultValue="True" />
                                            <label className="form-check-label">Yes</label>
                                            <input className="form-check-input" type="radio" name="ManagementConcession" defaultValue="False" />
                                            <label className="form-check-label">No</label>
                                          </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                          <h5>Applicable</h5>
                                          <div className="form-check settings-form-radio">
                                            <input className="form-check-input" type="radio" name="Applicable" defaultValue="True" defaultChecked />
                                            <label className="form-check-label">Yes</label>
                                            <input className="form-check-input" type="radio" name="Applicable" defaultValue="False" />
                                            <label className="form-check-label">No</label>
                                          </div>
                                        </div>
                                      </div>{/*/ form-row */}
                                    </form>
                                  </div>
                                </div>{/*/ card-body */}
                              </div>{/*/ card */}
                            </div>{/*/ col-8 */}
                          </div>{/*/ row */}
                        </div>{/*/ settings-form */}
                      </div>
                    </div>{/*/ tab-pane */}
                    <div className="profile-tab-btn text-right">
                      <input type="submit" className="btn btn-primary" defaultValue="Save & Pay" />
                      <input type="submit" className="btn btn-primary" onClick={this.formSubmit} defaultValue="Save Details" />
                      <input type="submit" className="btn btn-primary" defaultValue="Save & Print Admission Form" />
                    </div>{/*/ tab-content */}
                  </div>{/*/ tab-content */}
                </div>{/*/ custom-tab-1 */}
              </div>{/*/ profile-tab */}
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

export default StudentAdd;
