import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


export default class Login extends React.Component {
        state = {
            email:"",
            password :""
        }
        handleEmailChange(event) {
            this.setState({email: event.target.value})
        }
        handlePasswordChange(event) {
            this.setState({password: event.target.value})
        }
    
      login = e=> {
        e.preventDefault();
        var errorfield=document.getElementById("error");;
        var email = this.state.email;
        var password = this.state.password;
        if(email.length > 0 && password.length > 0){
            errorfield.innerHTML="<div class='alert-danger px-3 py-1 rounded shadow-sm' ></div>";
            var data = {
                email:email,
                password:password
            }
            axios
            .post('http://localhost:8383/api/login/i-login',data)
            .then(response => {
              
              console.log(response.data);
              if(response.data.status){
                sessionStorage.setItem("user",""+email+"");
                sessionStorage.setItem(""+email+"",response.data.token);
                this.props.history.push('/instructor/home');
              }
              else {
                errorfield.innerHTML="<div class='alert-danger px-3 py-1 rounded shadow-sm' >* User name or password invalid.</div>";
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
                        <h3 className="text-center"><strong>Instructor Login</strong></h3>
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
                            <Input type="email" name="email" id="email" placeholder="with a placeholder" onChange={this.handleEmailChange.bind(this)}/>
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Label for="password" sm={3}>Password</Label>
                        <Col sm={8}>
                            <Input type="password" name="password" id="passwordassword" placeholder="password placeholder" onChange={this.handlePasswordChange.bind(this)}/>
                        </Col>
                        </FormGroup>
                        <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button type="submit" onClick={this.login}>Submit</Button>
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