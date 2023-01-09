import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class FeeCatAdd extends Component {
    constructor() {
        super();
        this.state = {
            showError: false,
            showSuccess: false,
            messgae: '',
            remark: '',
            courseName: '',

        };
        this.formSubmit = this.formSubmit.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);




    }
    handleChangeEvent(event) {
        event.preventDefault();
        console.log("gdtyy");
        console.log(event.target);
        this.setState({ [event.target.name]: event.target.value });
    }




    formSubmit(event) {
        event.preventDefault();
        this.setState({ showError: false, showSuccess: false });

        if (this.state.courseName == '') {
            this.setState({ showError: true, message: "Course Name can't be empty" });
        }

        // else if(this.state.remark == ''){
        //   this.setState({ showError: true, message:"Remark can't be empty" });
        // }
        else {


            axios.post(`http://127.0.0.1:8000/api/add_course_process`, {
                remark: this.state.remark,
                courseName: this.state.courseName

            })
                .then(res => {
                    console.log(res.data);
                    if (res.data.status == true) {
                        this.setState({ showError: false, showSuccess: true, message: res.data.message });
                        window.location.href = "http://127.0.0.1:8000/course_list";
                    }

                    if (res.data.status == false) {
                        this.setState({ showError: true, showSuccess: false, message: res.data.message });
                    }
                })
        }

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
                                        <h4>Add Fee Category</h4>
                                    </div>
                                </div>
                                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                                    <ol className="breadcrumb">
                                        <li><a href="/feecat_list" className="btn bg-blue-soft text-blue"><i className="fa fa-angle-double-left" /> Back to Fee Category List</a></li>
                                    </ol>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row">
                                <div className="col-xl-12 col-xxl-12">
                                    <div className="card">

                                        <div className="card-body">
                                            <div className="basic-form form-own">
                                                <form onSubmit={this.formSubmit}>
                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <label>Fee Category</label>
                                                            <input type="text" className="form-control" name="FeeCatDesc" onChange={this.handleChangeEvent} value={this.state.FeeCatDesc} />

                                                        </div>
                                                        <div className="form-group col-sm-6">
                                                            <label>Fee Type</label>
                                                            <div className="form-check fee-form-radio">
                                                                <input className="form-check-input" type="radio" name="FeeType" value="Tution" checked={this.state.FeeType === 'Tution'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Tution</label>

                                                                <input className="form-check-input" type="radio" name="FeeType" value="Fine" checked={this.state.FeeType === 'Fine'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Fine</label>

                                                                <input className="form-check-input" type="radio" name="FeeType" value="Transport" checked={this.state.FeeType === 'Transport'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Transport</label>

                                                                <input className="form-check-input" type="radio" name="FeeType" value="Others" checked={this.state.FeeType === 'Others'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Others</label>
                                                            </div>
                                                        </div>

                                                    </div>{/*/ form-row */}

                                                    <div className="form-row">

                                            
                                                        <div className="form-group col-sm-4">
                                                            <label>Applicable</label>
                                                            <div className="form-check fee-form-radio">
                                                                <input className="form-check-input" type="radio" name="Applicable" value="All" checked={this.state.FeeType === 'All'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">All</label>

                                                                <input className="form-check-input" type="radio" name="Applicable" value="Old" checked={this.state.FeeType === 'Old'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Old</label>

                                                                <input className="form-check-input" type="radio" name="Applicable" value="New" checked={this.state.FeeType === 'New'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">New</label>
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-4">
                                                            <label>Printable</label>
                                                            <div className="form-check settings-form-radio">
                                                                <input className="form-check-input" type="radio" name="Printable" value="Yes" checked={this.state.FeeType === 'Yes'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Yes</label>

                                                                <input className="form-check-input" type="radio" name="Printable" value="No" checked={this.state.FeeType === 'No'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">No</label>
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-4">
                                                            <label>Changeable</label>
                                                            <div className="form-check settings-form-radio">
                                                                <input className="form-check-input" type="radio" name="Changeable" value="Yes" checked={this.state.FeeType === 'Yes'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">Yes</label>

                                                                <input className="form-check-input" type="radio" name="Changeable" value="No" checked={this.state.FeeType === 'No'} onChange={this.handleChangeEvent} />
                                                                <label className="form-check-label">No</label>
                                                            </div>
                                                        </div>

                                                    </div>{/*/ form-row */}

                                                    <div className="form-row">
                                                        <div className="form-group col-sm-6">
                                                            <input type="submit" className="btn btn-primary" defaultValue="Submit" />
                                                        </div>
                                                    </div>{/*/ form-row */}

                                                    <div className="text-center">

                                                        {this.state.showError ? <div className="error">{this.state.message}</div> : null}

                                                        {this.state.showSuccess ? <div className="success">{this.state.message}</div> : null}

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

export default FeeCatAdd;
