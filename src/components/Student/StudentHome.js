import React, { useState } from 'react';
import Header from './Header';
import { Table,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import axios from 'axios';

const StudentHome = () => {

    const c = [
        {
        }
        ];
  const [courses, setCourses] = useState(c);
  
  var user = sessionStorage.getItem("user");
  var token = sessionStorage.getItem(user);
  const config = {
      method: 'post',
      url: "http://localhost:8383/api/students/registeredClasses",
      headers: { 'i-token': token }
  }

  axios(config)
.then(response => {
  var registeredList = response.data.registered;
  console.log(registeredList);
  setCourses(registeredList)
 
})
.catch(error => { 
  console.log('error ', error);
});

  return (
      
    <div>
    <Header />
    <div className="container container-fluid py-3">
      <div className="row">
        <div className="my-4 col-xl d-flex justify-content-center">
          <h3>
            <strong>Registered Courses</strong>
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
          courses.map(data=>{
            return(
              <tr>
                  <td>
                      <div>
                      <Card className="bg-light shadoe-sm">
                      <div className=""></div>
                        <CardBody>
                          <CardTitle><h3>Course Title: <strong>{data.title}</strong></h3></CardTitle>
                          <CardText>Description: {data.description}</CardText>
                          <Button href={"/student/viewRegCourse/"+data._id}>View</Button>
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
    };

export default StudentHome;