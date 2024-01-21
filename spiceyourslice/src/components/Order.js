import React from 'react'
import {Card, Form, Row, Col} from 'react-bootstrap';
 function Order() {
  return <React.Fragment>
    <Card>
    <Card.Body>
        <Card.Title>Size & Crust</Card.Title>
        <Form.Group className="py-3"> {/*Size */}
            <Row>
            <Col md={6}>
                <div className="mb-3">
                        <Col md={6}>
                         <Form.Check type="radio" id={`default-`} label={`Small`}/>
                         </Col>
                </div>
            </Col>
            <Col md={6}>
                <div className="mb-3">
                         <Col md={6}>
                        <Form.Check type="radio" id={`default-`} label={`Small`}/>
                         </Col>
                </div>
                </Col>
                <Col md={6}>
                <div className="mb-3">
                        <Col md={6}>
                        <Form.Check type="radio" id={`default-`} label={`Small`}/>
                        </Col>
                </div>
                </Col>
                <Col md={6}>
                <div className="mb-3">
                        <Col md={6}>
                        <Form.Check type="radio" id={`default-`} label={`Small`}/>
                        </Col>
                </div>
                </Col>
                <Col md={6}>
                <div className="mb-3">
                        <Col md={6}>
                        <Form.Check type="radio" id={`default-`} label={`Small`}/>
                        </Col>
                </div>
                </Col>
                <Col md={6}>
                <div className="mb-3">
                        <Col md={6}>
                        <Form.Check type="radio" id={`default-`} label={`Small`}/>
                        </Col>
                </div>
                </Col>
                
                
            </Row>
        </Form.Group>
        <hr></hr>
        <Form.Group className="py-3"> {/*Crust*/}
            <Row>
            <Col md={6}>
                <div className="mb-3">
                        <Col md={6}>
                         <Form.Check type="radio" id={`default-`} label={`Thin`}/>
                         </Col>
                </div>
            </Col>
            <Col md={6}>
                <div className="mb-3">
                         <Col md={6}>
                        <Form.Check type="radio" id={`default-`} label={`Thick`}/>
                         </Col>
                </div>
                </Col>
            </Row>
        </Form.Group>
      </Card.Body>
    </Card>
    </React.Fragment>
}

export default Order
