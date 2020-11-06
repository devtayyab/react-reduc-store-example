import React , {useEffect}from 'react';
import Card from 'react-bootstrap/Card'
import {CardDeck} from 'react-bootstrap'
import img1 from '../assets/house3.jpg'
import {connect} from 'react-redux'
import './style.css'
const Products=({items})=>{
  console.log(items)
    return(
    <CardDeck>
          {items.products.map((v,i)=>
        <Card key={i}>
          <Card.Img variant="top" src={v.img} />
          <Card.Body>
          <Card.Title>{v.name}</Card.Title> 
            <Card.Text>
              {v.detail}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
          )}
              </CardDeck>
    )
}
const mapStateToProps=(state) =>{
  return {
    items : state
  }
}
export default connect(mapStateToProps, null)(Products)