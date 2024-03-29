import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class ClassWiseSubjectEdit extends Component {
  constructor() {
    super();
    this.state = {
      showError: false,
      showSuccess:false,
      courseList:[],
      classList:[],
     subjectList:[],
     sectionList:[],
     sectionListVal:[],
      courseId:'',
      classId:'',
      messgae:'',
      subjectName:'',
      status:1,
      shortCode:'',
      remark:'',
      subject_arr:[],
      subjectId_arr:[],
      compulsary_arr:[],
      compulsary_arr_bool:[],
      additional_arr:[],
      additional_arr_bool:[],
      priority_arr:[],
      elective_arr:[],
      elective_arr_bool:[],
      section_arr:[],
      showMidSec:false,
      showEnd:false,
      na:false,
      tempSectionId:'',
      subjectChecked:[]
    };
    this.formSubmit = this.formSubmit.bind(this);
    this.subAdd = this.subAdd.bind(this);
    this.sectionAdd = this.sectionAdd.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.getClasslist = this.getClasslist.bind(this);  
    this.handleSubChange = this.handleSubChange.bind(this);  
    this.handleSubElective = this.handleSubElective.bind(this);
    this.handleSubAdditional = this.handleSubAdditional.bind(this);
    this.handleSubPriority = this.handleSubPriority.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.getClasslist_load = this.getClasslist_load.bind(this);
    this.getSectionlistLoad = this.getSectionlistLoad.bind(this);
    this.getSubject_load=this.getSubject_load.bind(this);
  
  
  }
  handleChangeEvent(event){
    event.preventDefault();
    console.log("gdtyy");
    console.log(event.target);
    if (event.target.name == 'courseId'){
    this.setState({ [event.target.name]: event.target.value },this.getClasslist);
    }

   else if (event.target.name == 'classId'){
      this.setState({ [event.target.name]: event.target.value },this.getSectionlist);
      }

   
        
        
    else{

      this.setState({ [event.target.name]: event.target.value });
    }
     console.log(this.state.courseId);
    
     
    }
    handleAdd(){
      this.setState({ showEnd:true});
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


      getSectionlist(event){
        axios.get(`http://127.0.0.1:8000/api/section_list_by_course_class/${this.state.courseId}/${this.state.classId}`)  
        .then(res => {  
         console.log(res.data);
         if(res.data.status == true){
            this.setState({ sectionList:res.data.data,showMidSec:true,na:false});
            //window.location.href = "http://127.0.0.1:8000/users";
      
            console.log(this.state.classList);
         }else{
          this.setState({ sectionList:res.data.data,showMidSec:true,na:true});
         }
        
         
         for (let i = 0; i < res.data.data.length; i++) {
          this.state.sectionListVal[i] = false;
      } 
        
        })  
      }


      getSectionlistLoad(event){
        axios.get(`http://127.0.0.1:8000/api/section_list_by_course_class/${this.state.courseId}/${this.state.classId}`)  
        .then(res => {  
         console.log(res.data);
         if(res.data.status == true){
            this.setState({ sectionList:res.data.data,showMidSec:true,na:false});
            //window.location.href = "http://127.0.0.1:8000/users";
      
            console.log(this.state.classList);
         }else{
          this.setState({ sectionList:res.data.data,showMidSec:true,na:true});
         }
        
         
         for (let i = 0; i < res.data.data.length; i++) {
            if(res.data.data[i].sectionId == this.state.tempSectionId){
                this.state.sectionListVal[i] = true;
               
                
            }
            else{
                this.state.sectionListVal[i] = false;
            }
          
      } 
        
        })  
      }



      sectionAdd(event){
        console.log(event);
        var checked = event.target.checked;
        console.log(checked)
        

        var index=event.target.attributes.getNamedItem('data-index').value;

        console.log(index);

       
          if(event.target.checked){

            console.log(this.state.sectionListVal.length);
            for (let i = 0; i < this.state.sectionListVal.length; i++) {

                if(index == i){
                    console.log(index)
                    
                     
                    this.state.section_arr[0]= event.target.value ;
                       this.state.sectionListVal[index]= true ;
                       this.state.tempSectionId=event.target.value
                }
               
                  else{
                    var newArray2 = [...this.state.section_arr]; // make a separate copy of the array

                    
                      newArray2.splice(index, 1);
                      this.setState({section_arr: newArray2});
                      this.state.sectionListVal[i]= false ;
                            }
                   
                  
            
            }
            
          }
          else{

           
            var newArray2 = [...this.state.section_arr]; // make a separate copy of the array

            if (index !== -1) {
              newArray2.splice(index, 1);
              this.setState({section_arr: newArray2});
                    }
            this.state.sectionListVal[index]= false ;

          
          }

          console.log(this.state.section_arr);
        
      }
      selectAll(event){
        console.log('testing');
        console.log(event.target.checked);
        var len=document.getElementsByClassName("testing").length;
        for (let i = 0; i < len; i++) {
          if(event.target.checked){
            if(! document.getElementsByClassName("testing")[i].checked){
              document.getElementsByClassName("testing")[i].click()
            }
          }
          else{
            if(document.getElementsByClassName("testing")[i].checked){
              document.getElementsByClassName("testing")[i].click()
            }
          }
         
          
          
      } 

      console.log();

      
      }

      getClasslist_load(event){
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

      getSubject_load(event){
        const cid = window.location.href.split('/')[4];
        axios.get(`http://127.0.0.1:8000/api/class_wise_sub_desc_id/${cid}`)  
        .then(res => {  
         console.log(res.data);
         if(res.data.status == true){


            console.log("legth");
            console.log(res.data.data.length);
            var newArray = this.state.subject_arr.slice();
            var newArrayId = this.state.subjectId_arr.slice();
            var newArray2 = this.state.compulsary_arr_bool.slice(); 
            var newArray20 = this.state.compulsary_arr.slice(); 
            var newArray3 = this.state.elective_arr_bool.slice(); 
            var newArray4 = this.state.additional_arr_bool.slice(); 

            var newArray30 = this.state.elective_arr.slice(); 
            var newArray40 = this.state.additional_arr.slice(); 
            var newArray100 = this.state.priority_arr.slice(); 
            var newArray5 = this.state.subjectChecked.slice(); 
            var newArray55 = this.state.section_arr.slice(); 

            console.log(this.state.subjectList.length);
           
            for (let j = 0; j < this.state.subjectList.length; j++) {
                newArray5.push(false); 
                
            }
            this.setState({subjectChecked:newArray5})
            for (let i = 0; i < res.data.data.length; i++) {

                console.log(res.data.data[i].compulsary);
                
                for (let k = 0; k < this.state.subjectList.length; k++) {
                          if(this.state.subjectList[k].subjectName == res.data.data[i].subjectName){

                            var index = k;
                            break;
                          }else{
                            index=-1;
                          }

                
                }
                console.log("index");
                console.log(index);
                newArray5[index]=true;
                newArray.push(res.data.data[i].subjectName); 
                newArrayId.push(res.data.data[i].subjectId); 
                newArray55.push(res.data.data[i].subjectId); 
                newArray100.push(res.data.data[i].priority); 
                if(res.data.data[i].compulsary == 1){
                   
                    newArray2.push(true); 
                    newArray20.push(1); 
                } 
                else{
                    
                    newArray2.push(false); 
                    newArray20.push(0); 
                }


                if(res.data.data[i].elective == 1){
                   
                    newArray3.push(true); 
                    newArray30.push(1); 
                } 
                else{
                    
                    newArray3.push(false); 
                    newArray30.push(0); 
                }

                if(res.data.data[i].addition == 1){
                   
                    newArray4.push(true); 
                    newArray40.push(1); 
                } 
                else{
                    
                    newArray4.push(false); 
                    newArray40.push(0); 
                }
                console.log(newArray2);
                
            }
            this.setState({subjectChecked:newArray5})
            console.log(newArray2);
            this.setState({subject_arr:newArray})
            this.setState({subjectId_arr:newArrayId})
           // this.setState({section_arr:newArray55})
            this.setState({compulsary_arr_bool:newArray2})
            this.setState({compulsary_arr:newArray20})
            this.setState({elective_arr_bool:newArray3})
            this.setState({elective_arr:newArray30})
            this.setState({additional_arr_bool:newArray4})
            this.setState({additional_arr:newArray40})
            this.setState({priority_arr:newArray100})
            console.log(this.state.compulsary_arr_boo4);

          
    
            //window.location.href = "http://127.0.0.1:8000/users";
      
            console.log(this.state.compulsary_arr);
    
            
         }
        
        
        })  
      }

      stateChange(){

        
      }
      handleSubChange(event){

        var key=event.target.attributes.getNamedItem('data').value;
        console.log(key);

        var array= [...this.state.compulsary_arr]
        var array2= [...this.state.compulsary_arr_bool]
        if(event.target.checked){
          array[key] = 1;
          array2[key] = true;
        }
        else{
          array[key] = 0;
          array2[key] = false;
        }
        
        
        this.setState({compulsary_arr: array});
        this.setState({compulsary_arr_bool: array2});
        
       
      }


      handleSubAdditional(event){

        var key=event.target.attributes.getNamedItem('data').value;
        console.log(key); 
        var array= [...this.state.additional_arr]
        var array2= [...this.state.additional_arr_bool]

        if(event.target.checked){
          array[key] = 1;
          array2[key] = true;
        }
        else{
          array[key] = 0;
          array2[key] = false;
        }
        
        
        this.setState({additional_arr: array});
        this.setState({additional_arr_bool: array2});
        
        console.log(event.target);
        console.log(this.state.additional_arr);
      }


      handleSubPriority(event){

        var key=event.target.attributes.getNamedItem('data').value;
        console.log(key);

        var array= [...this.state.priority_arr]

        
          array[key] = event.target.value;
       
          
      
        
        
        this.setState({priority_arr: array});
        
        
        
        console.log(event.target);
        console.log(this.state.priority_arr);
      }

      handleSubRank(event){

        var key=event.target.attributes.getNamedItem('data').value;
        console.log(key);

        if(event.target.checked){
          this.state.compulsary_arr[key] = 1;
        }
        else{
          this.state.compulsary_arr[key] = 0;
        }
        
        
        
        
        console.log(event.target);
        console.log(this.state.compulsary_arr);
      }

      handleSubElective(event){

        var key=event.target.attributes.getNamedItem('data').value;
        console.log(key);

        var array= [...this.state.elective_arr]
        var array2= [...this.state.elective_arr_bool]

        if(event.target.checked){
          array[key] = 1;
          array2[key] = true;
        }
        else{
          array[key] = 0;
          array2[key] = false;
        }
        
        
        this.setState({elective_arr: array});
        
        this.setState({elective_arr_bool: array2});
        
        
        console.log(event.target);
        console.log(this.state.elective_arr);
      }



subAdd(event){
  console.log(event);
  var checked = event.target.checked;
  console.log(checked);
 // var index=event.target.attributes.getNamedItem('data-index').value;


  if(checked){

    var newArray10 = this.state.subjectChecked.slice();    
   newArray10[event.target.attributes.getNamedItem('data-index').value] = true; 
    this.setState({subjectChecked:newArray10})

    var newArray = this.state.subject_arr.slice();    
    newArray.push(event.target.value);   
    this.setState({subject_arr:newArray})


    var newArray2 = this.state.subjectId_arr.slice();    
    newArray2.push(event.target.attributes.getNamedItem('data').value);   
    this.setState({subjectId_arr:newArray2})




    var comArray = this.state.compulsary_arr.slice();    
    comArray.push(0);   
    this.setState({compulsary_arr:comArray})
  
    console.log(this.state.subject_arr);
  
  
  
  
    var additionalArray = this.state.additional_arr.slice();    
    additionalArray.push(0);   
    this.setState({additional_arr:additionalArray})
  
    console.log(this.state.additional_arr);
  
  
  
  
  
    var elecArray = this.state.elective_arr.slice();    
    elecArray.push(0);   
    this.setState({elective_arr:elecArray})
  
    console.log(this.state.elective_arr);
  
  
  
  
    var priorArray = this.state.priority_arr.slice();    
    priorArray.push(0);   
    this.setState({priority_arr:priorArray})
  
    console.log(this.state.priority_arr);
  }
else{


    var newArray10 = this.state.subjectChecked.slice();    
   newArray10[event.target.attributes.getNamedItem('data-index').value] = false; 
    this.setState({subjectChecked:newArray10})



  var newArray = [...this.state.subject_arr]; // make a separate copy of the array
var index = newArray.indexOf(event.target.value)
  console.log(newArray);
  if (index !== -1) {

    console.log('abfg');
    newArray.splice(index, 1);
    this.setState({subject_arr: newArray});
    console.log(this.state.subject_arr);
  }
 

  var newArray2 = [...this.state.subjectId_arr]; // make a separate copy of the array

  if (index !== -1) {
    newArray2.splice(index, 1);
    this.setState({subjectId_arr: newArray2});
  }




  var newArray3 = [...this.state.compulsary_arr]; // make a separate copy of the array

  if (index !== -1) {
    newArray3.splice(index, 1);
    this.setState({compulsary_arr: newArray3});
  }



  var newArray4 = [...this.state.elective_arr]; // make a separate copy of the array

  if (index !== -1) {
    newArray4.splice(index, 1);
    this.setState({elective_arr: newArray4});
  }



  var newArray5 = [...this.state.additional_arr]; // make a separate copy of the array

  if (index !== -1) {
    newArray5.splice(index, 1);
    this.setState({additional_arr: newArray5});
  }


  var newArray5 = [...this.state.priority_arr]; // make a separate copy of the array

  if (index !== -1) {
    newArray5.splice(index, 1);
    this.setState({priority_arr: newArray5});
  }



  var newArray7 = [...this.state.additional_arr_bool]; // make a separate copy of the array

  if (index !== -1) {
    newArray7.splice(index, 1);
    this.setState({additional_arr_bool: newArray7});
  }


  var newArray8 = [...this.state.elective_arr_bool]; // make a separate copy of the array

  if (index !== -1) {
    newArray8.splice(index, 1);
    this.setState({elective_arr_bool: newArray8});
  }



  var newArray9 = [...this.state.compulsary_arr_bool]; // make a separate copy of the array

  if (index !== -1) {
    newArray9.splice(index, 1);
    this.setState({compulsary_arr_bool: newArray9});
  }
 // this.setState({subject_arr:newArray})



  //this.setState({subjectId_arr:newArray2})
 
}
  

this.setState({showEnd:true})
 


 
}

  formSubmit(event){
    event.preventDefault();
   
    if(this.state.courseId == ''){
      this.setState({ showError: true, message:"Course can't be empty" });
    }

  
   else{
  
   
    axios.post(`http://127.0.0.1:8000/api/edit_class_wise_sub_process`, {
       
        sectionName:this.state.tempSectionId,
        classId:this.state.classId,
        courseId:this.state.courseId,
        subjectId:this.state.subjectId_arr,
        compulsary:this.state.compulsary_arr,
        elective:this.state.elective_arr,
        priority:this.state.priority_arr,
        addition:this.state.additional_arr,
        editId:window.location.href.split('/')[4]


      })  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ showError: false,showSuccess:true,message:res.data.message});
       window.location.href = "http://127.0.0.1:8000/class_wise_subject_list";
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

    const cid = window.location.href.split('/')[4];
        // console.log("hello"+ cid);

        axios.get(`http://127.0.0.1:8000/api/class_wise_sub_list_id/${cid}`)
            .then(res => {
                console.log(res.data);
                if (res.data.status == true) {
                    this.setState({ courseId: res.data.data[0].courseId },this.getClasslist_load);
                    this.setState({ classId: res.data.data[0].classId,tempSectionId:res.data.data[0].sectionId },this.getSectionlistLoad);
                    this.setState({ showMidSec:true,showEnd:true },this.getSubject_load);
                    this.state.section_arr[0]=this.state.tempSectionId
                }
            })

        


    axios.get(`http://127.0.0.1:8000/api/subject_list/`)  
    .then(res => {  
     console.log(res.data);
     if(res.data.status == true){
        this.setState({ subjectList:res.data.data});
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
                  <h4>Edit Class Wise Subject</h4>
                </div>
              </div>
              <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol className="breadcrumb">
                  <li><a href="/class_wise_subject_list" className="btn bg-blue-soft text-blue"><i className="fa fa-angle-double-left" /> Back to Class Wise Subject List</a></li>
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

                         
                       
                        

{this.state.showMidSec ?  
                        <div className="form-group col-md-12">
          <label>Section Name</label>
          <div className="Schedule-section">
            <div className="form-checkbox-grid">
            {this.state.sectionList.map( (item, key) => {
                                return (
              <div className="form-check form-checkbox col-md-2">
                <input type="checkbox" className="form-check-input testing" data-index={key} checked={this.state.sectionListVal[key]} id="check1" value={item.sectionId} onClick={this.sectionAdd} />
                <label className="form-check-label" htmlFor="check1">{item.sectionName}</label>
              </div>
             )
            })}

{this.state.na ? 
<div className="form-check form-checkbox col-md-2">
                
                <label className="form-check-label" htmlFor="check1">N/A</label>
              </div>

:null}


            </div>
            <div className="form-checkbox-grid select-grid-bg">
              <div className="form-check form-checkbox col-md-2">
                <input type="checkbox" className="form-check-input" id="check3" defaultValue onClick={this.selectAll}/>
                <label className="form-check-label" htmlFor="check3" >Select All</label>
              </div>
            </div>
          </div>
        </div>
          : null }
        
         
        <div className="form-group col-md-12">
       
        {this.state.showMidSec ? 
          <h5>Select Subjects from the list showing below &amp; then Click Add Button</h5>
        : null}
          <div className="Schedule-subject">
          {this.state.showMidSec ? 
            <div className="form-checkbox-grid">
            {this.state.subjectList.map( (item, key) => {
                                return (
              <div className="form-check form-checkbox col-md-3">
                <div className="bg-padd">
                  <input type="checkbox" className="form-check-input" checked={this.state.subjectChecked[key]} id="check1" data={item.subjectId} data-index={key} value={item.subjectName} onClick={this.subAdd} />
                  <label className="form-check-label" htmlFor="check1">{item.subjectName}</label>
                </div>
              </div>
               )
              })}
              <div className="form-group col-md-12 text-right">
          {/* <input type="button" className="btn btn-primary" value="Add" onClick={this.handleAdd} /> */}
        </div>
        </div>
        
        
       
        : null }
      {this.state.showEnd ? 
        <div className="form-group col-md-12">
          <div className="Schedule-table">
            <div className="table-responsive">
              <table className="table table-bordered table-striped verticle-middle table-responsive-sm">
                <thead>
                  <tr>
                    <th scope="col">Subject</th>
                    <th scope="col">Taken For Rank</th>
                    <th scope="col">Elective</th>
                    <th scope="col">Additional</th>
                    <th scope="col">Priority</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.subject_arr.map( (item, key) => {
                                return (
                              
                             
                  <tr>
                    <td>{item} </td>

                    <td><div className="form-check form-checkbox"><input type="checkbox" className="form-check-input"  checked={this.state.compulsary_arr_bool[key]} value={ this.state.compulsary_arr[key]} data={[key]} onClick={this.handleSubChange} /></div></td>
                    <td><div className="form-check form-checkbox"><input type="checkbox" className="form-check-input"  checked={this.state.elective_arr_bool[key]} value={ this.state.elective_arr[key]} data={[key]} onClick={this.handleSubElective} /></div></td>
                    <td><div className="form-check form-checkbox"><input type="checkbox" className="form-check-input"  checked={this.state.additional_arr_bool[key]} value={ this.state.additional_arr[key]} data={[key]} onClick={this.handleSubAdditional} /></div></td>
                    <td><input name="newsubject[0].priority" type="text" value={ this.state.priority_arr[key]} aria-invalid="false" className="form-control" data={[key]} onChange={this.handleSubPriority} /></td>
                  </tr>
                   )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        :null }
        </div>
        {/*/ form-row */}
        <br/>
        {this.state.showEnd ? 
        <input type="button" className="btn btn-primary" defaultValue="Update" onClick={this.formSubmit} />
       
    

        :null }

<div className="text-center">
                                                   
                                                   {this.state.showError ?  <div className="error">{this.state.message}</div> : null }
                                             
                                                   {this.state.showSuccess ?  <div className="success">{this.state.message}</div> : null }
                                             
                                                   </div>
       
      
       </div>
       

    
       </div>
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

export default ClassWiseSubjectEdit;
