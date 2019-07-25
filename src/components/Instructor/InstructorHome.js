import React, { useState,useEffect } from 'react';
import Header from './Header';
import { Table,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import axios from 'axios';
  import { Redirect } from 'react-router';



const InstructorHome = () => {

    const ini = [
        {
        }
        ];
  const [Students, setStudent] = useState(ini);
  const [Courses, setCourses] = useState(ini);
  useEffect(()=>{
    var user = sessionStorage.getItem("user");
    var token = sessionStorage.getItem(user);
    const config = {
      method: 'get',
      url: "http://localhost:8383/api/instructors/getStudents",
     headers: { 'i-token': token }
    
     }
     axios(config)
     .then(response => {
       var students = response.data.students;
       setStudent(students);
       console.log(response.data.students);
       
       
     })
     .catch(error => {
       console.log('error ', error);
     });

     const aconfig = {
      method: 'get',
      url: "http://localhost:8383/api/instructors/getMyCourses",
      headers: { 'i-token': token }
  }

      axios(aconfig)
    .then(response => {
      //this.setState({courses:response.data});
     setCourses(response.data);
     console.log(response);
    })
    .catch(error => { 
      console.log('error ', error);
    });
  
  },[]);
  

  return (
      
    <div>
    <Header/>
    <div className="container  py-4">
          
            <div className="row">
                    <div className="bg-light py-3 my-4 col-xl d-flex rounded justify-content-center shadow-sm">
                    <h3>
                        <strong>Home</strong>
                    </h3>
                    </div>
                    <div className="row w-100">
                        
                    <div className=" py-3 my-4 col-xl d-flex justify-content-center">
                      <div className="card shadow " style={{width:'100%'}}>
                          <div className="card-header" style={{background:'#7557'}}>Students Enrolled in your courses</div>
                          <div className="card-body" style={{height:'400px',overflow:'auto'}}>
                            {Students.map((d)=>{
                              return <div className="card-body shadow-sm border border-danger my-2 rounded" style={{background:'#ddd'}}><h6>Student Name: &nbsp;{d.name}</h6>
                                      <h6>Email: &nbsp;{d.email}</h6>
                                      <h6>Phone: &nbsp;{d.phone}</h6>
                                      <h6>Date of Join: &nbsp;{d.dateOfJoin}</h6></div>
                            })
                             
                            }
                          </div>
                      </div>
                    </div>
                    <div className=" py-3 my-4 col d-flex justify-content-center">
                    <div className="card shadow"style={{width:'100%'}}>
                          <div className="card-header px-3" style={{background:'#7557'}}><h6>Your Courses</h6></div>
                          <div className="card-body" style={{height:'400px',overflow:'auto'}}>
                          {Courses.map((d)=>{
                              return <div className="card-body shadow-sm border my-2 border-danger rounded" style={{background:'#ddd'}}><h6>Student Name: &nbsp;{d.name}</h6>
                                      <h6>Email: &nbsp;{d.title}</h6>
                                      <h6>Phone: &nbsp;{d.description}</h6>
                                      </div>
                            })
                             
                            } 
                          </div>
                      </div>
                    </div>
                    
                      </div>
                    
                </div>
           </div>
    </div>
  );
    };

export default InstructorHome;