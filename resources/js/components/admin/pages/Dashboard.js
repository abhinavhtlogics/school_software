import React, { Component } from "react";


import Script from "@gumgum/react-script-tag";

import Copyright from "../basic/Copyright";

import Preloader from "../basic/Preloader";
import HeaderPart from "../layout/HeaderPart";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Preloader />
                <HeaderPart />

                <div id="main-wrapper">

                <div className="content-body">
            
            <div className="container-fluid">
                
				<div className="row">
                            <div className="col-xl-4 mb-4 home-box">
                                
                                <a className="card lift h-100" href="#!">
                                    <div className="card-body d-flex justify-content-center flex-column">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="me-3">
                                                <i className="fa fa-users feather mb-3 text-primary"></i>
                                                <h5>Total <br/>Students</h5>
                                                <div className="small home-title">250</div>
                                            </div>
                                            <img src="./images/img-01.jpg" alt="..." style={{"width": "10rem"}}/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 mb-4 home-box">
                               
                                <a className="card lift box-area h-100" href="#!">
                                    <div className="card-body d-flex justify-content-center flex-column">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="me-3">
                                                <i className="fa fa-rupee feather mb-3 text-secondary"></i>
                                                <h5>Today's <br/>Fee Collection</h5>
                                                <div className="small home-title">Rs. 125797.00</div>
                                            </div>
                                            <img src="./images/img-02.jpg" alt="..." style={{"width": "10rem"}}/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 mb-4 home-box">
                               
                                <a className="card lift h-100" href="#!">
                                    <div className="card-body d-flex justify-content-center flex-column">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="me-3">
                                                <i className="fa fa-calendar fa-calendar-days feather text-green mb-3 text-green"></i>
                                                <h5>Today's <br/>Absentees</h5>
                                                <div className="small home-title">12</div>
                                            </div>
                                            <img src="./images/img-03.jpg" alt="..." style={{"width": "10rem"}}/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
				
                <div className="row">
                    <div className="col-xl-6 col-lg-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Class Wise Strength [41]</h4>
                            </div>
                            <div className="card-body Chart-body">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-8">
                                        <canvas id="barChart" style={{"height": "230px"}}></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4">
                        <div className="card">
                            <div className="card-body text-center">
                                 <div id="calendar" className="app-fullcalendar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Vehicle Insurance Reminder</h4>
                            </div>
                            <div className="card-body card-body-padd">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped verticle-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">Vehicle Reg. No.</th>
                                                <th scope="col">Insurance Due Date</th>
                                                <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-primary">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-success">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-danger">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-primary">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-success">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-danger">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Vehicle Tax Reminder</h4>
                            </div>
                            <div className="card-body card-body-padd">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped verticle-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">Vehicle Reg. No.</th>
                                                <th scope="col">Tax Due Date</th>
                                                <th scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-primary">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-success">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-danger">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
											<tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-primary">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-success">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td><span className="badge badge-danger">04-02-2021</span></td>
                                                <td>5,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                     
                    </div>
					
					<div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Vehicle Passing Reminder</h4>
                            </div>
                            <div className="card-body card-body-padd">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped verticle-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">Vehicle Reg. No.</th>
                                                <th scope="col">Vehicle Passing Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                     
                    </div>
					
					<div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Vehicle Permit Renewal Reminder</h4>
                            </div>
                            <div className="card-body card-body-padd">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped verticle-middle">
                                        <thead>
                                            <tr>
                                                <th scope="col">Vehicle Reg. No.</th>
                                                <th scope="col">Vehicle Permit Renewal Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                            <tr>
                                                <td>PB12Z4745</td>
                                                <td>04-02-2021</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>






                    <Copyright />




                </div>
               
            </div>
        );
    }
}

export default Dashboard;
