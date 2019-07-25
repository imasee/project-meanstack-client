import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


export default class Login extends React.Component {
       
    render() {
      return (
          <div className="container py-5" style={{width:'100vw'}}>
                <div className="my-5  row d-flex justify-content-center">
                <div className="card w-50" >
                <div className="card-header bg-info text-white">
                        <h3 className="text-center"><strong>Welcome</strong></h3>
                </div>
                <div className="card-body ">
                    <div className="row my-5 py-5 d-flex justify-content-center">
                    <div className="col-4"> 
                        <a href='/s-login'><div className="card text-center py-3 bg-info text-white">
                                Student
                        </div></a>
                    </div>
                    <div className="col-4"> 
                    <a href='/i-login'><div className="card text-center py-3 bg-info text-white">
                                Instructor
                        </div></a>
                    </div>
                </div>
                </div>
            </div>

                </div>
            </div>
        
      );
    }
  }