import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge } from 'reactstrap';

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  componentDidMount(){
    var user = document.getElementById("userStatus");
    var uname = sessionStorage.getItem("user");
   
    if(uname){
      user.innerHTML = "Welcome "+uname;
    }
    else{
      user.innerHTML = "login"
    }
    
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
    render(){
            return (
              <div style={{backgroundColor:"#000"}}>
              <Navbar color="dark" light expand="md" >
                    <NavbarBrand href="/instructor/home" ><h1 className="text-white"><strong>Learn</strong></h1></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    
                      <Nav className="ml-auto " navbar>
                        <NavItem>
                          <NavLink href="/instructor/addCourse" className="text-white">Add Course</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/instructor/addStudent" className="text-white">Add Student</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/instructor/viewMyCourses" className="text-white">View My Courses</NavLink>
                        </NavItem>
                        
                        <div>
                      
                        <NavItem>
                        <a href="/"><Badge color="secondary" id="userStatus" className="mx-2 px-4 py-2 text-white">
                          
                        </Badge></a>
                        </NavItem>
                          
                        </div>
                        
                      </Nav>
                    </Collapse>
                  </Navbar>
          
          
              </div>
            
            );
    }
}

export default Header;