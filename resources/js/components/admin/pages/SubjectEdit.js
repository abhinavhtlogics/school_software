import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class SubjectEdit extends Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      showSuccess:false,
      messgae:'',
      subjectName:'',
      status:1,
      remark:'',
      shortCode:'',
      editId:window.location.href.split('/')[4]
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  
  
  }
  handleChangeEvent(event){
    event.preventDefault();
    console.log("gdtyy");
    console.log(event.target);
    

      this.setState({ [event.target.name]: event.target.value });
    
   
    
     
    }
    


  formSubmit(event){
    event.preventDefault();
   
    if(this.state.subjectName == ''){
      this.setState({ showError: true, message:"Subject Name can't be empty" });
    }

  
   else{
  
   
    axios.post(`http://127.0.0.1:8000/api/edit_subject_process`, {
       
        subjectName:this.state.subjectName,
        remark:this.state.remark,
        id:this.state.editId,
        shortCode:this.state.shortCode

      })  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ showError: false,showSuccess:true,message:res.data.message});
       window.location.href = "http://127.0.0.1:8000/subject_list";
     }
    
     if(res.data.status == false){
        this.setState({ showError: true,showSuccess:false,message:res.data.message});
     }
    })  

  }

  
 
}
componentDidMount() {
 
    axios.get(`http://127.0.0.1:8000/api/subject_by_id/${this.state.editId}`)  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ subjectName:res.data.data[0].subjectName,shortCode:res.data.data[0].shortCode, remark:res.data.data[0].Remark});
        //window.location.href = "http://127.0.0.1:8000/users";
      
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
                  <h4>Edit Subject</h4>
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
                            <label>Subject Name</label>
                            <div className="form-checkbox-grid">
                              <div className=" col-md-10">
                                <input type="text" className="form-control" name="subjectName" value={this.state.subjectName} onChange={this.handleChangeEvent} />
                               
                              </div>
                             
                            </div>
                          </div>

                          <div className="form-group col-md-6">
                            <label>Remark</label>
                            <div className="form-checkbox-grid">
                              <div className=" col-md-10">
                                <input type="text" className="form-control" name="remark" value={this.state.remark} onChange={this.handleChangeEvent} />
                               
                              </div>
                             
                            </div>
                          </div>

                          <div className="form-group col-md-6">
                            <label>Short Code</label>
                            <div className="form-checkbox-grid">
                              <div className=" col-md-10">
                                <input type="text" className="form-control" name="shortCode" value={this.state.shortCode} onChange={this.handleChangeEvent} />
                               
                              </div>
                             
                            </div>
                          </div>
                         
                        </div>{/*/ form-row */}
                        <input type="hidden" name="id" value={this.editId}></input>
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

export default SubjectEdit;
