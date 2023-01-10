import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './login';
import Users from './admin/pages/Users';
import SectionAdd from './admin/pages/SectionAdd';
import SubjectAdd from './admin/pages/SubjectAdd';
import SectionEdit from './admin/pages/SectionEdit';
import SubjectEdit from './admin/pages/SubjectEdit';
import CourseAdd from './admin/pages/CourseAdd';
import StudentAdd from './admin/pages/StudentAdd';
import CourseList from './admin/pages/CourseList';
import SubjectList from './admin/pages/SubjectList';
import SectionList from './admin/pages/SectionList';
import Dashboard from './admin/pages/Dashboard';
import CourseEdit from './admin/pages/CourseEdit';
import ClassWiseSubjectAdd from './admin/pages/ClassWiseSubjectAdd';
import ClassWiseSubjectEdit from './admin/pages/ClassWiseSubjectEdit';

import StationList from './admin/pages/StationList';		
import AddStation from "./admin/pages/AddStation";  
import EditStation from './admin/pages/EditStation'; 
import ViewStation from './admin/pages/ViewStation';            
import RouteList from './admin/pages/RouteList';    
import AddRoute from "./admin/pages/AddRoute";    
import EditRoute from "./admin/pages/EditRoute";   
import ViewRoute from "./admin/pages/ViewRoute";   
import FeeCatList from './admin/pages/FeeCatList';
import FeeCatAdd from './admin/pages/FeeCatAdd';

import ClassWiseSubjectList from './admin/pages/ClassWiseSubjectList';  

function Hello() {
   
  return (
<Router>
<>
<Routes>
        <Route path='/' exact component={Login}></Route>
        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="course_add" element={<CourseAdd />} />
        <Route path="course_list" element={<CourseList />} />
        <Route path="section_list" element={<SectionList />} />
        <Route path="section_add" element={<SectionAdd />} />
        <Route path="subject_add" element={<SubjectAdd />} />
        <Route path="student_add" element={<StudentAdd />} />
        <Route path="subject_list" element={<SubjectList />} />
        <Route path="section_edit/:id" element={<SectionEdit />} />
        <Route path="subject_edit/:id" element={<SubjectEdit />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/course_edit/:id" element={<CourseEdit />} exact />
        <Route path="class_wise_subject_add" element={<ClassWiseSubjectAdd />} />
        <Route path="class_wise_subject_edit/:id" element={<ClassWiseSubjectEdit />} />
        <Route path="station_list" element={<StationList />} />
		<Route path="station_add"  element={<AddStation/>} />  
		<Route path="station_edit/:id"  element={<EditStation/>} />  	 		    
		<Route path="station_view/:id" element={<ViewStation />} /> 
		<Route path="route_list" element={<RouteList />} />    	
		<Route path="route_add"  element={<AddRoute/>} />  		
		<Route path="route_view/:id" element={<ViewRoute />} />          		
		<Route path="route_edit/:id" element={<EditRoute />} />   			
        <Route path="feecat_list" element={<FeeCatList />} />
        <Route path="feecat_add" element={<FeeCatAdd />} />

        <Route path="class_wise_subject_list" element={<ClassWiseSubjectList />} />  

    </Routes>

</>
</Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

export default Hello