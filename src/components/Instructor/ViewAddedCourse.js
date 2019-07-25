import React, { Component,useState } from 'react';
import Header from './Header';
import { Table,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import axios from 'axios';
  import { Redirect } from 'react-router';
  

export default class Course extends Component {
    state = {
      courses: []
      
    }
    
   
    
  

    componentDidMount () {
     
    var user = sessionStorage.getItem("user");
    var token = sessionStorage.getItem(user);
    const config = {
        method: 'get',
        url: "http://localhost:8383/api/instructors/getMyCourses",
        headers: { 'i-token': token }
    }

        axios(config)
      .then(response => {
        //this.setState({courses:response.data});
       this.setState({courses:response.data});
       console.log(response);
      })
      .catch(error => { 
        console.log('error ', error);
      });
    }

    
    render() {
      if (this.state.toDashboard === true) {
        return <Redirect to='/student/home' />
      }
      return(
      <div>
          <Header/>
          <div className="container container-fluid py-3">
      <div className="row">
        <div className="my-4 col-xl d-flex justify-content-center">
          <h3>
            <strong>Added Courses</strong>
          </h3>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
          <Table>
        <thead>
          <tr>
            <th colSpan='3' className="text-center table border shadow-sm">courses</th>
           
          </tr>
        </thead>
        <tbody>
        {
          this.state.courses.map(data=>{
            return(
              <tr>
                  <td>
                      <div>
                      <Card className="bg-light shadoe-sm">
                      <div className=""></div>
                        <CardBody>
                          <CardTitle><h3>Course Title: <strong>{data.title}</strong></h3></CardTitle>
                          <CardText>Description: {data.description}</CardText>
                          <Button href={`/instructor/viewCourse/${data._id}`} >View</Button>
                        </CardBody>
                      </Card>
                    </div>
                </td>
              </tr>
            );
          })
        }
          
        </tbody>
      </Table>
          </div>
         </div>
      </div>

    </div>

           </div>
         
         
        
      );
    }
  }