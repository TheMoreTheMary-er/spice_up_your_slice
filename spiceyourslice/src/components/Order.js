import React from 'react'
import {Card, Form, Row, Col, Alert} from 'react-bootstrap';

const size = [
  {
    label: "Small",
    description: "10''",
    value: "small",
  },
  {
    label: "Medium",
    description: "12''",
    value: "medium",
  },
  {
    label: "Large",
    description: "14''",
    value: "large",
  },
  {
    label: "X-Large",
    description: "16''",
    value: "xlarge",
  },
];

const crust = [
  {
    label: "BROOKLYN STYLE",
    description: "Hand stretched to be big, thin and perfectly foldable.",
    value: "brooklynstyle",
  },
  {
    label: "HAND TOSSED",
    description: "Garlic-seasoned crust with a rich, buttery taste.",
    value: "handtossed",
  },
  {
    label: "CRUNCHY THIN CRUST",
    description:
      "Thin enough for the optimum crispy to crunchy ratio and square cut to be perfectly sharable.",
    value: "crunchythincrust",
  },
];
const meat = [
  {
    label: "Beef",
    value: "beef",
  },
  {
    label: "Salami",
    value: "salami",
  },
  {
    label: "Pepperoni",
    value: "pepperoni",
  },
  {
    label: "Italian Sausage",
    value: "Italiansausage",
  },
  {
    label: "Premium Chicken",
    value: "Premiumchicken",
  },
];
const nonmeat = [
  {
    label: "Hot Buffalo Sauce",
    value: "hotbuffalosauce",
  },
  {
    label: "Jalapeno Peppers",
    value: "jalapenopeppers",
  },
  {
    label: "Onions",
    value: "onions",
  },
  {
    label: "Banana Peppers",
    value: "bananapeppers",
  },
  {
    label: "Diced Tomatoes",
    value: "dicedtomatoes",
  },
];

 function Order(props) {
  const {formik} = props;
  return <React.Fragment>
    <Card>{/* Pizza Sizing */}
    <Card.Body>
        <Card.Title>Size & Crust</Card.Title>
        <Form.Group className="py-3"> {/*Size */}
            <Row>
            {size.map((d) => (
              <Col md={6}>
                <div className="mb-3">
                        <Form.Check type="radio" 
                        label={d.label} 
                        value={d.value} 
                        name="size"
                        onChange={formik.handleChange}
                        isInvalid={formik.errors.size && formik.touched.size}
                        />  
                </div>
            </Col>
            ))}
            {formik.errors.size && formik.touched.size? 
            <Alert variant="danger">{formik.errors.size}</Alert>
          : null}
            </Row>
        </Form.Group>
        <hr></hr>
        <Form.Group className="py-3"> {/*Crust*/}
            <Row>
            {crust.map((d) => (
              <Col md={12}>
                <div className="mb-3">
                        <Form.Check type="radio" 
                        label={d.label} 
                        value={d.value} 
                        name="crust"
                        onChange={formik.handleChange}
                        />
                <small className="mx-4">{d.description}</small>  
                </div>
            </Col>
            ))}
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
        <Form.Check 
        type="checkbox" 
        className="mx-2"
        name="cheese.includes"
        onChange={formik.handleChange}/>
        </Card.Title>
        {formik.values.cheese.includes ? (
        <Form.Select className="my-2" name="cheese.value" onChange={formik.handleChange}>
      <option></option>
      <option value="ch-regular">Regular</option>
      <option value="ch-extra">More Cheese</option>
      <option value="ch-none">Less</option>
    </Form.Select>
        ) : (
          false
        )}
        
    </Card.Body>
    </Card>
    </Col>
    <Col md={6}>
    <Card className="my-2">
      <Card.Body>
        <Card.Title style={{display: "flex"}}>
        Sauce
        <Form.Check type="checkbox" 
        className=""
        name="sauce.includes"
        onChange={formik.handleChange} />
        </Card.Title>
        {formik.values.sauce.includes ? (
        <Form.Select className="my-2" name="sauce.value" onChange={formik.handleChange}>
      <option></option>
      <option value="tomato-sauce">Tomato Sauce</option>
      <option value="banana-ketchup">Banana Ketchup</option>
      <option value="ranch">Ranch</option>
    </Form.Select>
        ) : (
          false
        )}
        

        </Card.Body>
    </Card>
    </Col>
   </Row>
   <Card className="my-2"> {/* Meat Toppings*/}
      <Card.Body>
        <Card.Title style={{display: "flex"}}>Toppings - Meat</Card.Title>
        <Row className="mt-4">
          {meat.map((d) => (
            <Col>
            <Form.Check 
            type="checkbox" 
            className="mx-2"
            name="toppingMeat"
            value={d.value}
            label={d.label}
            onChange={formik.handleChange}/>
            </Col>
            ))}
        </Row>
            
    </Card.Body>
    </Card>
    <Card className="my-2"> {/* Non Meat Toppings*/}
      <Card.Body>
        <Card.Title style={{display: "flex"}}>Toppings - Non-Meat</Card.Title>
        <Row className="mt-4">
        {nonmeat.map((d) => (
            <Col>
            <Form.Check 
            type="checkbox" 
            className="mx-2"
            name="toppingNonMeat"
            value={d.value}
            label={d.label}
            onChange={formik.handleChange}/>
            </Col>
            ))}
        </Row>
            
    </Card.Body>
    </Card>
    <Card className="my-2"> {/* Special Instructions*/}
      <Card.Body>
        <Card.Title style={{display: "flex"}}>Special Instructions</Card.Title>
        <Row className="mt-4">
        <Form.Control
          as="textarea"
          onChange={formik.handleChange}
          {...formik.getFieldProps("specialInstruction")}
          style={{ height: '100px' }}
        />
        </Row>
            
    </Card.Body>
    </Card>
    </React.Fragment>
}

export default Order
