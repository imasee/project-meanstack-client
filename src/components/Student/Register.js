import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import axios from 'axios';
import { Router } from 'react-router-dom'
var Link = Router.Link;

export default class Register extends React.Component {
        state = {
            email:"",
            password :"",
            name:"",
            confirmPassword:"",
            phone:""
        }
        handleEmailChange(event) {
            this.setState({email: event.target.value})
        }
        handlePasswordChange(event) {
            this.setState({password: event.target.value})
        }
        handleNameChange(event) {
          this.setState({name: event.target.value})
      }
      handleCPasswordChange(event) {
          this.setState({confirmPassword: event.target.value})
      }handlePhoneChange(event) {
        this.setState({phone: event.target.value})
    }
    
    
      login = e=> {
        e.preventDefault();
        var errorfield=document.getElementById("error");;
        var email = this.state.email;
        var password = this.state.password;
        var name = this.state.name;
        var confirmPassword = this.state.confirmPassword;
        var phone = this.state.phone;

        if(email.length > 0 && password.length > 0){
            errorfield.innerHTML="<div class='alert-danger px-3 py-1 rounded shadow-sm' ></div>";
            var data = {
              name:name,
              email:email,
              password:password,
              confirmPassword:confirmPassword,
              phone:phone
              
              }
            axios
            .post('http://localhost:8383/api/students/register',data)
            .then(response => {
              
              console.log(response.data);
              if(response.data.status){
                sessionStorage.setItem("user",email);
                sessionStorage.setItem(""+email+"",response.data.token);
                this.props.history.push('/student/home');
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
            errorfield.innerHTML="<div class='alert-danger px-3 py-1 rounded shadow-sm' >* User name and password required.</div>";
        }
      }
     
      render() {
        return (
            <div className="container py-5" style={{width:'100vw'}}>
                  <div className="my-5  row d-flex justify-content-center">
                  <div className="card w-50" >
                  <div className="card-header bg-info text-white">
                          <h3 className="text-center"><strong>User Register</strong></h3>
                  </div>
                  <div className="card-body ">
                      <div >
                      <Form >
                          <FormGroup row>
                              <div className="col-xl d-flex justify-content-center" id="error">
                                  
                              </div>
                          </FormGroup>

                          <FormGroup row>
                          <Label for="email" sm={3}>Email</Label>
                          <Col sm={8}>
                              <Input type="email" name="email" id="email" placeholder="email" onChange={this.handleEmailChange.bind(this)}/>
                          </Col>
                          </FormGroup>

                          <FormGroup row>
                          <Label for="name" sm={3}>Email</Label>
                          <Col sm={8}>
                              <Input type="text" name="name" id="name" placeholder="name" onChange={this.handleNameChange.bind(this)}/>
                          </Col>
                          </FormGroup>

                          <FormGroup row>
                          <Label for="password" sm={3}>Password</Label>
                          <Col sm={8}>
                              <Input type="password" name="password" id="passwordassword" placeholder="password" onChange={this.handlePasswordChange.bind(this)}/>
                          </Col>
                          </FormGroup>

                          <FormGroup row>
                          <Label for="cpassword" sm={3}>Password</Label>
                          <Col sm={8}>
                              <Input type="password" name="password" id="cpasswordassword" placeholder="password confirm" onChange={this.handleCPasswordChange.bind(this)}/>
                          </Col>
                          </FormGroup>

                          <FormGroup row>
                          <Label for="phone" sm={3}>Password</Label>
                          <Col sm={8}>
                              <Input type="number" name="phone" id="phone" placeholder="phone" onChange={this.handlePhoneChange.bind(this)}/>
                          </Col>
                          </FormGroup>

                          <FormGroup check row>
                          <Col sm={{ size: 10, offset: 2 }}>
                              <Button type="submit" onClick={this.login}>Submit</Button> already have an account?<a href = "/s-login">Log in</a>
                          </Col>
                          </FormGroup>
                      </Form>
                  </div>
                  </div>
              </div>
  
                  </div>
              </div>
          
        );
      }
}