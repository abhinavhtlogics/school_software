import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from './login';
import Users from './admin/pages/Users';
import SectionAdd from './admin/pages/SectionAdd';
import SectionEdit from './admin/pages/SectionEdit';
import CourseAdd from './admin/pages/CourseAdd';
import CourseList from './admin/pages/CourseList';
import SectionList from './admin/pages/SectionList';
import Dashboard from './admin/pages/Dashboard';

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
        <Route path="section_edit/:id" element={<SectionEdit />} />
        <Route path="dashboard" element={<Dashboard />} />

    </Routes>

</>
</Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello />);

export default Hello