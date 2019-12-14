import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Storage from '../services/Storage'
import image from '../screens/Images/nav.png'
import './nav.css'
const NavCr =({ changeTab,tab})=>{
const signOut=()=>{
  changeTab("LOGIN");
  Storage.clear()
}
    return (
     <Navbar className="nav justify-content-between navBar" bg="dark" variant="dark">
        <Nav>
      <Nav.Link style={{color:"white"}} onClick={()=>changeTab("HOME")} ><h3>BlogNews <span>📰</span></h3></Nav.Link>
    </Nav>
    <Nav>
     {!Storage.get("token") && <Nav.Link style={{color:"white"}} onClick={()=>changeTab("LOGIN")} >Login</Nav.Link>} 
    {(Storage.get("token") && tab !=="WORKSPACE") ? <Nav.Link style={{color:"white"}} onClick={()=>changeTab("WORKSPACE")} >WorkSpace</Nav.Link> : ""}
    {Storage.get("token") && <Nav.Link style={{color:"white"}} onClick={signOut} >Sign out</Nav.Link>}
    </Nav>
     </Navbar>
  
    )
}

export default NavCr