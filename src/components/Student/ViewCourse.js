import React, { useState } from 'react';
import Header from './Header';
import { Table,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import axios from 'axios';

export default class Course extends React.Component {
    state = {
      course: {},
      instructor:{},
      courses:[]
      
    }
    
  

    componentDidMount () {
      const { courseId } = this.props.match.params
    var user = sessionStorage.getItem("user");
    var token = sessionStorage.getItem(user);
    const config = {
        method: 'get',
        url: "http://localhost:8383/api/courses/"+courseId+"",
        headers: { 'i-token': token }
    }

        axios(config)
      .then(response => {
        //
        
        this.setState({course:response.data.course,instructor:response.data.instructor,courses:response.data.instructor.courseOffering});
        
        console.log(this.state.courses);
       
      })
      .catch(error => { 
        console.log('error ', error);
      });
    }

    handleAddThisCourse(e){
        var user = sessionStorage.getItem("user");
        var token = sessionStorage.getItem(user);
        const config = {
            method: 'post',
            url: "http://localhost:8383/api/students/courseRegister/"+e.target.getAttribute("data-id"),
            headers: { 'i-token': token }
        }

        axios(config)
      .then(response => {
        if(response.data.status.status){
            alert("Course Added\n"+response.data.status.message);
        }
        else{
            console.log(response)
            alert(response.data.status.message);
        }
       
       
      })
      .catch(error => { 
        console.log('error ', error);
      });

    }
    render() {
      return(
      <div>
          <Header/>
          <div className="container container-fluid py-4">
          <div className="row"><div><a  className="shadow-sm" href="/student/viewAllCourses">&lt;&lt;Back</a></div><br></br>
                    </div>
            <div className="row">
                    <div className="bg-light py-3 my-4 col-xl d-flex justify-content-center shadow-sm">
                    <h3>
                        <strong>Course Details</strong>
                    </h3>
                    </div>
                    <div className="row w-100">
                        
                            
                            <CardBody >
                            <div className=" rounded jumbotron shadow-sm">
                                <CardTitle><h3 className="py-2 px-4">Course Title: <strong>{this.state.course.title}</strong></h3></CardTitle>
                                <CardText className="py-2 px-4">Description: {this.state.course.description}</CardText>
                            
                            <hr/>
                            

                                
                                <CardTitle><h3 className="py-2 px-4">Instructor name: <strong>{this.state.instructor.name}</strong></h3></CardTitle>
                                <CardText className="py-2 px-4">Email: {this.state.instructor.email}</CardText>
                                <CardText className="py-2 px-4">Phone: {this.state.instructor.phone}</CardText>
                                    
                             <hr></hr>
                            <div className=" text-center"><strong>Courses offered</strong></div>
                            <hr/>
                                {
                                    this.state.courses.map((data)=>{
                                       return <div className="rounded mx-4 py-2 border bg-light text-center my-3">Course Name: {data.courseName}&nbsp;&nbsp;<a  className="btn btn-secondary shadow-sm" href={`/student/viewCourse/${data.courseCode}`}>View </a></div>;
                                    })
                                }
                            </div>
                            <Button type="button" onClick = {this.handleAddThisCourse} data-id={this.state.course._id}>Add this course +</Button>
                            </CardBody>
                    
                      </div>
                    
                </div>
           </div>
           </div>
         
         
        
      );
    }
  }