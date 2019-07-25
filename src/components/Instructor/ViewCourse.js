import React, { Component,useState } from 'react';
import Header from './Header';
import { Table,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import axios from 'axios';
  import { Redirect } from 'react-router';
  

export default class Course extends Component {
    state = {
      course:{}
    }
    
    componentDidMount () {
      const { courseId } = this.props.match.params;
      console.log(courseId);
    var user = sessionStorage.getItem("user");
    var token = sessionStorage.getItem(user);
    const config = {
        method: 'get',
        url: "http://localhost:8383/api/instructors/getCourse/"+courseId+"",
        headers: { 'i-token': token }
    }

        axios(config)
      .then(response => {
        //
        
        this.setState({course:response.data[0]});
        
        console.log(response.data[0]);
       
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
          <div className="row"><div><a  className="shadow-sm" href="/instructor/viewMyCourses">&lt;&lt;Back</a></div><br></br>
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
                            

                           </div>
                                    </CardBody>
                    
                      </div>
                    
                </div>
           </div>
           </div>
         
         
        
      );
    }
  }