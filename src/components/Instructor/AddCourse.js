import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Header from './Header';
import { Table,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';
 
  


export default class Login extends React.Component {
        state = {
            title:"",
            description :""
        }
        handleTitleChange(event) {
            this.setState({title: event.target.value})
        }
        handleDescChange(event) {
            this.setState({description: event.target.value})
        }
    
      addCourse = e=> {
        e.preventDefault();
        var errorfield=document.getElementById("error");;
        var title = this.state.title;
        var desc = this.state.description;
        if(title.length > 0 && desc.length > 0){
            errorfield.innerHTML="";
            var data = {
                title:title,
                description:desc
            }
            var user = sessionStorage.getItem("user");
            var token = sessionStorage.getItem(user);
        const config = {
             method: 'post',
             url: "http://localhost:8383/api/courses",
            headers: { 'i-token': token },
            data:data
            }
            axios(config)
            .then(response => {
              
              console.log(response.data);
              if(response.data.status){
                alert(response.data.message);
                this.props.history.push('/instructor/home');
              }
              else {

                errorfield.innerHTML="<div class='alert-danger px-3 py-1 rounded shadow-sm' >* Failed to add course</div>";
              }
            })
            .catch(error => {
              console.log('error ', error);
            });
        }
        else{
            errorfield.innerHTML="<div class='alert-danger px-3 py-1 rounded shadow-sm' >* User name and password required.</div>";
        }
      }
     
    render() {
      return (<div>
        <Header/>
        <div className="container container-fluid py-4">
        <div className="row"><div><a  className="shadow-sm" href="/instructor/viewMyCourses">&lt;&lt;Back</a></div><br></br>
                  </div>
          <div className="row">
                  <div className="bg-light py-3 my-4 col-xl d-flex justify-content-center shadow-sm">
                  <h3>
                      <strong>Create New Course Here</strong>
                  </h3>
                  </div>
                  <div className="row w-100">
                      
                          
                          <CardBody >
                          <div className=" rounded jumbotron shadow-sm">
                          <Form >
                        <FormGroup row>
                            <div className="col-xl d-flex justify-content-center" id="error">
                                
                            </div>
                        </FormGroup>
                        <FormGroup row>
                        <Label for="email" sm={3}>Course Title</Label>
                        <Col sm={8}>
                            <Input type="text" name="title" id="title" placeholder="course ttitle" onChange={this.handleTitleChange.bind(this)}/>
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label for="desc" sm={3}>Course Description</Label>
                        <Col sm={8}>
                            <Input type="text" name="desc" id="desc" placeholder="course description " onChange={this.handleDescChange.bind(this)}/>
                        </Col>
                        </FormGroup>
                       
                            <Button type="submit" onClick={this.addCourse}>Add</Button>
                        
                    </Form>
                          </div>
                            
                        </CardBody>
                  
                    </div>
                  
              </div>
         </div>
         </div>
       
       
      
      );
    }
  }