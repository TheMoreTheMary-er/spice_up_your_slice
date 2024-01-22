import React from 'react'
import {Card, Form, Row, Col, Button} from 'react-bootstrap';
export default function Summary() {
  return (
    <Card>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>JSON</Card.Title>
        <Card.Text>
          <pre>JSON</pre>
        </Card.Text>
      
      </Card.Body>
      <Button variant="danger" type="Submit">Place Order</Button>
    </Card>
  )
}
