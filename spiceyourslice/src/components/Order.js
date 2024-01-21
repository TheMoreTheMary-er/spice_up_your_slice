import React from 'react'
import {Card, Form, Row, Col} from 'react-bootstrap';
 function Order() {
  return <React.Fragment>
    <Card>{/* Pizza Sizing */}
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

   <Row> {/* Cheese & Sauce */}
    <Col md={6}>
    <Card className="my-2">
      <Card.Body>
        <Card.Title style={{display: "flex"}}>
        Cheese
        <Form.Check type="checkbox" className=""id={`default`} />
        </Card.Title>
        
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="ch-regular">Regular</option>
      <option value="ch-extra">More Cheese</option>
      <option value="ch-none">No Cheese</option>
    </Form.Select>
    </Card.Body>
    </Card>
    </Col>
    <Col md={6}>
    <Card className="my-2">
      <Card.Body>
        <Card.Title style={{display: "flex"}}>
        Sauce
        <Form.Check type="checkbox" className=""id={`default`} />
        </Card.Title>
        
        <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="tomato-sauce">Tomato Sauce</option>
      <option value="banana-ketchup">Banana Ketchup</option>
      <option value="ranch">Ranch</option>
    </Form.Select>

        </Card.Body>
    </Card>
    </Col>
   </Row>
   <Card className="my-2"> {/* Meat Toppings*/}
      <Card.Body>
        <Card.Title style={{display: "flex"}}>Toppings - Meat</Card.Title>
        <Row className="mt-4">
            <Col>
            <Form.Check type="checkbox" className=""id={`default`} label="chicken"/>
            </Col>
            <Col>
            <Form.Check type="checkbox" className=""id={`default`} label="chicken"/>
            </Col>
            <Col>
            <Form.Check type="checkbox" className=""id={`default`} label="chicken"/>
            </Col>
        </Row>
            
    </Card.Body>
    </Card>
    <Card className="my-2"> {/* Non Meat Toppings*/}
      <Card.Body>
        <Card.Title style={{display: "flex"}}>Toppings - Non-Meat</Card.Title>
        <Row className="mt-4">
            <Col>
            <Form.Check type="checkbox" className=""id={`default`} label="chicken"/>
            </Col>
            <Col>
            <Form.Check type="checkbox" className=""id={`default`} label="chicken"/>
            </Col>
            <Col>
            <Form.Check type="checkbox" className=""id={`default`} label="chicken"/>
            </Col>
        </Row>
            
    </Card.Body>
    </Card>
    <Card className="my-2"> {/* Non Meat Toppings*/}
      <Card.Body>
        <Card.Title style={{display: "flex"}}>Special Instructions</Card.Title>
        <Row className="mt-4">
        <Form.Control
          as="textarea"
          /*placeholder="Leave a comment here"*/
          style={{ height: '100px' }}
        />
        </Row>
            
    </Card.Body>
    </Card>
    </React.Fragment>
}

export default Order
