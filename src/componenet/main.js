import React from 'react'
import Product from './products'
import Header from './header' 
import Additem from './additem'
import {Button} from 'react-bootstrap'
import {
    BrowserRouter as Router,
   Route,
   Link
  } from "react-router-dom";
function Main() {
  return (
    <div className="App">
        <Router>
        <Button> <Link to="/add" style={{color : "white"}}>Add item</Link> </Button>
          
            <Route path="/" exact><Header></Header></Route>
            <Route path="/" exact><Product></Product></Route>
            <Route path="/add" exact><Additem></Additem></Route>
           
            
   
      </Router>
    </div>
  );
}

export default Main;
