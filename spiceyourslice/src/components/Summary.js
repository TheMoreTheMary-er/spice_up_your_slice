import React from 'react'
import {Card, Form, Row, Col, Button} from 'react-bootstrap';



 function Summary(props) {
  const {formik} = props;
  return (
    <Card  >
      <Card.Img variant="top" 
      src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <Card.Text>
          <pre >{JSON.stringify(formik.values, null, 2)}</pre>
        </Card.Text>
      
      </Card.Body>
      <Button variant="danger" type="Submit">
        Place Order
      </Button>
      <hr></hr>
      
      <Row>
            <Card.Img  src="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/18631-hamburger-caramelized-onion-pizza-600x600.jpg?ext=.jpg"></Card.Img>
            <div>Size: Large &nbsp; Crust: Hand Tossed &nbsp; Cheese: Regular</div>
            <div>Sauce: Ranch &nbsp; Non-Meat: Diced Tomatoes & Peppers &nbsp; Meat: Beef</div>
            </Row>
            <hr></hr>
            <Row>
            <Card.Img  src="https://www.budgetbytes.com/wp-content/uploads/2020/06/BBQ-Chicken-Pizza-one-slice-500x500.jpg"></Card.Img>
            <div>Size: Medium &nbsp; Crust: Hand Tossed &nbsp; Cheese: Regular</div>
            <div>Sauce: Tomato Sauce &nbsp; Non-Meat: Jalapeno Peppers & Onions &nbsp; Meat: Premium Chicken</div>
            </Row>
            <hr></hr>
    </Card>
  )
}

export default Summary;
