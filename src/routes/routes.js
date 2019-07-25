import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentLogin from '../components/sLogin';
import InstructorLogin from '../components/iLogin';
import InstructorHome from '../components/Instructor/InstructorHome'
import StudentHome from '../components/Student/StudentHome'
import ViewCourse from  '../components/Student/ViewCourse'
import ViewAllCourses from '../components/Student/ViewAllCourses';
import ViewRegisteredCourse from '../components/Student/ViewRegisteredCourse';
import ViewMyCourses from '../components/Instructor/ViewAddedCourse'
import iViewCourse from '../components/Instructor/ViewCourse'
import AddCourse from '../components/Instructor/AddCourse'
import AddStudent from '../components/Instructor/AddStudent'
import RegisterStudent from '../components/Student/Register' 
import Home from '../components/Home'
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact  path="/s-login" component={StudentLogin} />
        <Route exact path="/i-login" component={InstructorLogin} />
        
        <Route exact path="/instructor/home" component={InstructorHome} />
        <Route exact path="/student/home" component={StudentHome} />
       
        <Route exact path="/student/viewCourse/:courseId" component={ViewCourse} />
        <Route exact path="/student/viewAllCourses" component={ViewAllCourses} />
        <Route exact path="/student/viewRegCourse/:courseId" component={ViewRegisteredCourse} />
        
        <Route exact path="/instructor/viewMyCourses" component={ViewMyCourses} />
        <Route exact path="/instructor/viewCourse/:courseId" component={iViewCourse} />

        <Route exact path="/instructor/addCourse" component={AddCourse} />
        <Route exact path="/instructor/addStudent" component={AddStudent} />

        <Route exact path="/student/register" component={RegisterStudent} />

        <Route exact path="/" component={Home} />
        

        


      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;