
import React, { Component } from 'react';


class Sidebar extends Component {
  render() {
    return (
       
       
        
      
        
        <div className="quixnav">
        <div className="quixnav-scroll">
          <ul className="metismenu" id="menu">
            <li><a href="./index.html"><i className="icon icon-single-04" /><span className="nav-text">Dashboard</span></a></li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="icon icon-layout-25" /><span className="nav-text">Utility</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-envelope" />Sms Activation</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Sms Activation</a></li>
                    <li><a href="#">Student Import</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-user-plus" />User Creation</a>
                  <ul aria-expanded="false">
                    <li><a href="./create-user.html">User Master</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-cogs" />Setting</a>
                  <ul aria-expanded="false">
                    <li><a href="#">General Setting</a></li>
                    <li><a href="#">Result Setting</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-key" />Change Password</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Change Password</a></li>
                  </ul>
                </li>
                <li><a href="./login.html"><i className="fa fa-user" />Re-Login</a></li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-users" /><span className="nav-text">Admission</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" /> Master</a>
                  <ul aria-expanded="false">
                    <li><a href="/course_list">Course Master</a></li>
                    <li><a href="#">Class Master</a></li>
                    <li><a href="/section_list">Section Master</a></li>
                    <li><a className="has-arrow"  aria-expanded="false">Subject Master</a>
                      <ul aria-expanded="false">
                        <li><a href="./subject_list">Subjects</a></li>
                        <li><a href="./class-wise-subjects-list.html">Assign Class-wise Subjects</a></li>
                      </ul>
                    </li>
                    <li><a className="has-arrow"  aria-expanded="false">Student Registration</a>
                      <ul aria-expanded="false">
                        <li><a href="#">Registration Fee</a></li>
                        <li><a href="#">Registration Entry</a></li>
                      </ul>
                    </li>
                    <li><a href="./student-admission.html">Student Master</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"> <i className="title fa fa-gavel" /> Transaction</a>
                  <ul aria-expanded="false">
                    <li><a className="has-arrow"  aria-expanded="false">Certificates</a>
                      <ul aria-expanded="false">
                        <li><a href="#">Transfer/SLC Cert.</a></li>
                        <li><a href="#">Character Certificate</a></li>
                        <li><a href="#">Birth Certificate</a></li>
                        <li><a href="#">Completion Of Elementry Edu.</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Admission Form</a></li>
                    <li><a href="#">Promote Students</a></li>
                  </ul>
                </li>
                <li><a href="./student-search.html"><i className="fa fa-search" /> Students Search</a></li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-dot-circle-o" /> Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Class Wise Strength</a></li>
                    <li><a href="#">Total Registration</a></li>
                    <li><a href="#">Student Admitted Through Registration</a></li>
                    <li><a href="#">List of Confirm Students</a></li>
                    <li><a href="#">List of Refunded Fee</a></li>
                    <li><a href="#">List of Total registration Fee</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-id-card" /><span className="nav-text">Student ID Card</span></a>
              <ul aria-expanded="false">
                <li><a href="./print-id-card.html"><i className="fa fa-print" aria-hidden="true" /> Print ID Card</a></li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-money" /><span className="nav-text">Fee</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" /> Master</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Fee Category</a></li>
                    <li><a href="#">Fee Slot</a></li>
                    <li><a href="#">Fee Amount</a></li>
                    <li><a href="#">Fee Settings</a></li>
                    <li><a href="#">Fee Concession</a></li>
                    <li><a href="#">Fee Amount Individual</a></li>
                    <li><a href="#">Payment Mode</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" /> Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="./fee-collection.html">Fee Collection</a></li>
                  </ul>
                </li>
                <li><a href="#"><i className="fa fa-search" /> Student Search</a></li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-dot-circle-o" /> Reports</a>
                  <ul aria-expanded="false">
                    <li><a className="has-arrow"  aria-expanded="false">Fee Collection</a>
                      <ul aria-expanded="false">
                        <li><a href="#">Date Wise</a></li>
                        <li><a href="#">Month Wise</a></li>
                        <li><a href="#">Receipt Wise</a></li>
                        <li><a href="#">Deleted Receipts</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Print Receipt</a></li>
                    <li><a href="#">Pending Fee List</a></li>
                    <li><a href="#">Pending Fee Multiple Months</a></li>
                    <li><a href="#">Pending Fee Category Wise</a></li>
                    <li><a href="#">Total Fee Month Wise</a></li>
                    <li><a href="#">Fee Concession Report</a></li>
                    <li><a href="#">Individual Fee Concession Report	</a></li>
                    <li><a href="#">Fee Chart</a></li>
                    <li><a href="#">Fee Amount To Collect</a></li>
                    <li><a href="#">Yearly Fee Report</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-bus" /><span className="nav-text">Transport</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" /> Master</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Station Master</a></li>
                    <li><a href="#">Route Master</a></li>
                    <li><a href="#">Vechicle Master</a></li>
                    <li><a href="#">Supplier Master</a></li>
                    <li><a href="#">Maintenance Type Master</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" /> Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Vehicle Maintenance Entry</a></li>
                    <li><a href="#">Fuel Consumption Entry</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-dot-circle-o" /> Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">RouteWise Student List</a></li>
                    <li><a href="#">StationWise Student List</a></li>
                    <li><a href="#">Vehicle Maintenance Report</a></li>
                    <li><a href="#">Fuel Consumption Report</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-graduation-cap" /><span className="nav-text">Marks Analysis</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" />Master</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Exam Creation</a></li>
                    <li><a href="#">Exam Date Sheet Entry</a></li>
                    <li><a href="#">Exam Date Sheet Entry Customized</a></li>
                    <li><a href="#">Grades Creation</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Subject Wise Marks Entry</a></li>
                    <li><a href="#">Subject Wise Marks Entry Customized</a></li>
                  </ul>
                </li>
                <li><a href="#"><i className="title fa fa-search" />Student Search</a></li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-edit" />Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Exam Date Sheet</a></li>
                    <li><a href="#">Marks Report</a></li>
                    <li><a href="#">Marks Report Customized</a></li>
                    <li><a href="#">Rank List Preparation</a></li>
                    <li><a href="#">Marks List Consolidated</a></li>
                    <li><a href="#">Compiled Sheet</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-book" /><span className="nav-text">Home Work</span></a>
              <ul aria-expanded="false">
                <li><a href="./assign-home-work.html"><i className="fa fa-edit" aria-hidden="true" /> Assign Home Work</a></li>
                <li><a href="#"><i className="fa fa-eye" aria-hidden="true" /> View Home Work</a></li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-hand-paper-o" /><span className="nav-text">Attendance</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Multiple Attendance Entry</a></li>
                    <li><a href="#">Daily Attendance Report</a></li>
                    <li><a href="#">Modify Attendance Register</a></li>
                  </ul>
                </li>
                <li><a href="#"><i className="title fa fa-search" />Student Search</a></li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-edit" />Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Full Attendance Report</a></li>
                    <li><a href="#">Attendance Calender</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-envelope-open" /><span className="nav-text">SMS</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">SMS Notice</a></li>
                    <li><a href="#">SMS To Absenties</a></li>
                    <li><a href="#">Fee Pending SMS</a></li>
                    <li><a href="#">Bithdays</a></li>
                    <li><a href="#">SMS Report</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-user" /><span className="nav-text">Employee</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" />Master</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Department Master</a></li>
                    <li><a href="#">Designation Master</a></li>
                    <li><a href="#">Qaulification Master</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Employee Master</a></li>
                    <li><a href="#">Assign Subject(s) to Teachers</a></li>
                    <li><a href="#">Experience Certificate</a></li>
                    <li><a href="#">Left Employee Entry</a></li>
                  </ul>
                </li>
                <li><a href="#"><i className="title fa fa-search" />Employee Search</a></li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-edit" />Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Employee's Report</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-hand-paper-o" /><span className="nav-text">Employee Attendance</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Attendance Entry</a></li>
                    <li><a href="#">Modify Attendance</a></li>
                  </ul>
                </li>
                <li><a href="#"><i className="title fa fa-search" />Employee Search</a></li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-edit" />Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Attendance Report</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-money" /><span className="nav-text">Payroll</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" />Master</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Salary Description</a></li>
                    <li><a href="#">PF Master</a></li>
                    <li><a href="#">Salary Description</a></li>
                    <li><a href="#">Salary Amount</a></li>
                    <li><a href="#">Salary Amount Individual</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Process Attendance For Salary</a></li>
                    <li><a href="#">Advance Salary</a></li>
                    <li><a href="#">Salary Transaction</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-edit" />Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Processed Attendance Report</a></li>
                    <li><a href="#">Consolidated Salary Report</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-calculator" /><span className="nav-text">Account</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" />Master</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Account Master</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">School Income</a></li>
                    <li><a href="#">School Expenses</a></li>
                    <li><a href="#">Account Details</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-edit" />Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Income Report</a></li>
                    <li><a href="#">Expense Report</a></li>
                    <li><a href="#">Cash Book</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-pencil" /><span className="nav-text">Inventory</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" />Master</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Ledger Entry</a></li>
                    <li><a href="#">Unit Entry</a></li>
                    <li><a href="#">Items Entry</a></li>
                    <li><a href="#">Supplier's Entry</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Indent Register Entry</a></li>
                    <li><a href="#">P.O Entry</a></li>
                    <li><a href="#">Approved P.O</a></li>
                    <li><a href="#">GRN Entry</a></li>
                    <li><a href="#">Return Request</a></li>
                    <li><a href="#">Return Invoice</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-edit" />Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">All P.O's</a></li>
                    <li><a href="#">Indent Status Report</a></li>
                    <li><a href="#">Stock Report</a></li>
                    <li><a href="#">Pending Bills</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-building-o" /><span className="nav-text">Hostel</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-files-o" />Master</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Hostel Detail</a></li>
                    <li><a href="#">Floor Detail</a></li>
                    <li><a href="#">Room Detail</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Room Allotment</a></li>
                    <li><a href="#">School Income</a></li>
                  </ul>
                </li>
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-edit" />Reports</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Hostel Detail Report</a></li>
                    <li><a href="#">Room Allotment Report</a></li>
                    <li><a href="#">Income Report</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-bell" /><span className="nav-text">Notification</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Parent-Teacher Meeting</a></li>
                    <li><a href="#">Notice Board</a></li>
                    <li><a href="#">Time Table</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-envelope" /><span className="nav-text">Mail Communication</span></a>
              <ul aria-expanded="false">
                <li><a href="./email-compose.html">Compose</a></li>
                <li><a href="./email-inbox.html">Inbox</a></li>
                <li><a href="./email-read.html">Sent</a></li>
              </ul>
            </li>
            <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-calendar" /><span className="nav-text">Holiday Calender</span></a>
              <ul aria-expanded="false">
                <li><a className="has-arrow"  aria-expanded="false"><i className="fa fa-gavel" />Transaction</a>
                  <ul aria-expanded="false">
                    <li><a href="#">Create Holiday</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
        
     
    );
  }
}


export default Sidebar;