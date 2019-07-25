import React, { useState } from 'react';
import Header from './Header';
import { Table,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import axios from 'axios';

const ViewAllCourses = () => {

    const c = [
        {
        }
        ];
  const [courses, setCourses] = useState(c);
  
    axios
      .get('http://localhost:8383/api/courses')
      .then(response => {
        //
        console.log(response.data);
        setCourses(response.data);
      })
      .catch(error => {
        console.log('error ', error);
      });

  return (
      
    <div>
    <Header />
    <div className="container container-fluid py-3">
      <div className="row">
      <div className="row"><div><a  className="shadow-sm" href="/student/home">&lt;&lt;Back</a></div><br></br>
                    </div>
        <div className="my-4 col-xl d-flex justify-content-center">
          <h3>
            <strong>Courses Available</strong>
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
                          <CardText>{data.description}</CardText>
                          <Button href={"/student/viewCourse/"+data._id}>View</Button>
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

export default ViewAllCourses;