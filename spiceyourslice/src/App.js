import {Nav, Card, Container, Form, Row,Col} from 'react-bootstrap';
import Order from "./components/Order";
import Summary from "./components/Summary";

function App() {
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
      <Form>
        <Row>
          <Col md={8}> 
          <Order></Order>
          </Col>
          <Col md={4}>
          <Summary></Summary>
          </Col>
        </Row>
      </Form>
      
    </Card>
    </Container>

    </div>
  );
}

export default App;
