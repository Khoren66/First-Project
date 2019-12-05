import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Storage from '../services/Storage'
const NavCr =({ changeTab,tab})=>{
const signOut=()=>{
  changeTab("LOGIN");
  Storage.clear()
}
    return (
     <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Nav>
      <Nav.Link style={{color:"white"}} onClick={()=>changeTab("HOME")} >Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
      <Button style={{color:"white"}} variant="outline-info">Search</Button>
    </Form>
    <Nav>
     {!Storage.get("token") && <Nav.Link style={{color:"white"}} onClick={()=>changeTab("LOGIN")} >Login</Nav.Link>} 
    {(Storage.get("token") && tab !=="WORKSPACE") ? <Nav.Link style={{color:"white"}} onClick={()=>changeTab("WORKSPACE")} >WorkSpace</Nav.Link> : ""}
    {Storage.get("token") && <Nav.Link style={{color:"white"}} onClick={signOut} >Sign out</Nav.Link>}
    </Nav>
     </Navbar>
   
                   




    )
}

export default NavCr