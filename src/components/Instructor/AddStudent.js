import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Header from './Header';
import { Table,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';


export default class AddStudent extends React.Component {
        state = {
            email:"",
           name :""
        }
        handleEmailChange(event) {
            this.setState({email: event.target.value});
            
        }
        handleNameChange(event) {
            this.setState({name: event.target.value});
           
        }
    
      addStudent = e=> {
        e.preventDefault();
        var errorfield=document.getElementById("error");;
        var email = this.state.email;
        var name = this.state.name;
        alert("email"+email+name);
        if(email.length > 0 && name.length > 0){
            errorfield.innerHTML="";
            var data = {
                email:email,
                name:name
            }
            var user = sessionStorage.getItem("user");
            var token = sessionStorage.getItem(user);
            const config = {
                method: 'post',
                url: "http://localhost:8383/api/students",
                headers: { 'i-token': token },
                data:data
                
            }
            
            axios(config)
            .then(response => {
              
              console.log(response);
              if(response.data.status){
                alert(response.data.message);
                this.props.history.push('/instructor/home');
              }
              else {
                var error = "";
                response.data.error.map((val)=>{
                    error+=val.msg;
                });
                errorfield.innerHTML="<div class='alert-danger px-3 py-1 rounded shadow-sm' >"+error+"</div>";
                
               
                 }
            })
            .catch(error => {
              console.log('error ', error);
            });
        }
        else{
            errorfield.innerHTML="<div class='alert-danger px-3 py-1 rounded shadow-sm' >* Name and email are required.</div>";
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
                      <strong>Add new student here</strong>
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
                        <Label for="email" sm={3}>Email</Label>
                        <Col sm={8}>
                            <Input type="email" name="email" id="email" placeholder="some@some.com" onChange={this.handleEmailChange.bind(this)}/>
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label for="name" sm={3}>Student Name</Label>
                        <Col sm={8}>
                            <Input type="name" name="name" id="name" placeholder="student name" onChange={this.handleNameChange.bind(this)}/>
                        </Col>
                        </FormGroup>
                       
                            <Button type="submit" onClick={this.addStudent}>Add Student</Button>
                        
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








                    