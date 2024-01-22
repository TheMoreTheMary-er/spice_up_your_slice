import {Nav, Card, Container, Form, Row,Col} from 'react-bootstrap';
import Order from "./components/Order";
import Summary from "./components/Summary";
import {useFormik} from "formik";

const validate=() => {}; 

function App() {

  const formik = useFormik({
    initialValues: {
      size: " ",
      crust:" ",
      cheese:{
        includes: false, value: "",
      },
      sauce:{
        includes: false,
        value:"",
      },
      toppingMeat: [],
      toppingNonMeat: [],
      specialInstruction: " ",
    },
    onSubmit: (values) => { },
    validate
  });

  return (
    <div>
     <Nav
      activeKey="/home"
      style={{background:"#0d6efd"}}>
      <Nav.Item>
        <Nav.Link href="/home" style={{color:"white"}}>
          <h4> Pizza Builder Form</h4>
        
        </Nav.Link>
      
      </Nav.Item>
    </Nav>
    <Container className="my-4">
    <Card className="shadow-lg p-4">
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={8}> 
          <Order formik={formik}></Order>
          </Col>
          <Col md={4}>
          <Summary formik={formik}></Summary>
          </Col>
        </Row>
      </Form>
      
    </Card>
    </Container>

    </div>
  );
}

export default App;
