import React ,{useState} from 'react'
import {connect } from 'react-redux'
import {Form, Button } from 'react-bootstrap'
import {Link,
    BrowserRouter as Router,
} from 'react-router-dom'
function Additem({itemarr}){
    var [name ,setname] = useState("")
    var [detail ,setdetail] = useState()
    var [img ,setimg] = useState()

    // console.log(itemarr)

    const Final=(e)=>{
        // e.preventDefault();
        const createitem = {
            name : name,
            detail : detail,
            img : img
        }

        itemarr.products.push(createitem)

    
    }
    

    return(
 <Form>
          
  <Form.Group controlId="formBasicEmail" style={{MinWidth : "200px"}}>
    <Form.Label>Item Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your name" 
    onChange={(e)=>setname(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Detail</Form.Label>
    <Form.Control type="text" placeholder="Detail" 
    onChange={(e)=>setdetail(e.target.value)}/>
    </Form.Group>
 <Form.Group controlId="formBasiimg">
    <Form.Label>please addlink google link of image</Form.Label>
    <Form.Control type="text" placeholder="image link"
 
    onChange={(e)=>setimg(e.target.value)} />
  </Form.Group>

<Button path="/" variant="primary" type="submit" onClick={Final}>
<Link to= "/"  style={{color : "white"}}>   Submit </Link>
  </Button>
</Form>
    )
}
const mapStateToProps = (state) =>{
    return{
        itemarr : state
    }
}
export default connect(mapStateToProps,null)(Additem)