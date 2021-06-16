import React,{useState} from "react";
import { useHistory } from "react-router";
import {  Container,  Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useSelector } from 'react-redux'



export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()
  
  function handleSignOut(params) {
    setIsAuthenticated(false)
   

    history.push("")
  }

  function handleSigned(params) {
    setIsAuthenticated(true)
  }




  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
           {cartItems.length>0&&<CartSummary/>}
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>: <SignedOut signedIn={handleSigned} />}

            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
