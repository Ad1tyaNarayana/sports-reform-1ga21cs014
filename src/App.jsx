import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOTfP3ne7c_6Tyo4T9t-D6OLMFineFGQg",
  authDomain: "sports-reform.firebaseapp.com",
  projectId: "sports-reform",
  storageBucket: "sports-reform.appspot.com",
  messagingSenderId: "34758246514",
  appId: "1:34758246514:web:d94956c3992e0389fa02eb",
  measurementId: "G-ED26YZ3JBZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [idea, setIdea] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "sports-reform"), {
        name,
        email,
        idea,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setSubmitStatus("success");
      setIdea("");
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting idea: ", error);
      setSubmitStatus("error");
      alert(`Error submitting idea: ${error.message}`);
    }
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Sports Reform India</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#reforms">Current Reforms</Nav.Link>
              <Nav.Link href="#impact">Impact</Nav.Link>
              <Nav.Link href="#submit">Submit Idea</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row className="mb-5" id="home">
          <Col>
            <h1 className="text-center mb-4">Sports Reforms in India</h1>
            <p className="lead text-center">
              Transforming the landscape of Indian sports through innovative
              reforms and policies.
            </p>
          </Col>
        </Row>

        <Row className="mb-5" id="reforms">
          <Col>
            <h2 className="mb-4">Recent Sports Reforms</h2>
            <Card>
              <Card.Body>
                <Card.Title>National Sports Education Board</Card.Title>
                <Card.Text>
                  The National Sports Education Board (NSEB) of India is an
                  initiative focused on integrating sports education into the
                  academic curriculum across the country. The primary goal of
                  the NSEB is to develop a robust sports ecosystem that
                  encourages physical fitness, athletic skills, and overall
                  sports culture among students at all levels of education.
                </Card.Text>
                <img
                  src="https://static.toiimg.com/thumb/msid-112764482,imgsize-48102,width-400,resizemode-4/112764482.jpg"
                  alt="Description of the image"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    objectFit: "cover",
                    maxHeight: "300px",
                  }}
                ></img>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Khelo India Programme</Card.Title>
                <Card.Text>
                  Khelo India is a flagship program launched by the Government
                  of India to promote sports at the grassroots level and develop
                  a strong sports culture across the country. The initiative was
                  introduced in 2018 and aims to encourage youth participation
                  in sports, identify and nurture talent, and improve sports
                  infrastructure nationwide.
                </Card.Text>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfItuYZ1PIwpniTp5WafT3vWvKsySQhMrUzw&s"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    objectFit: "cover",
                    maxHeight: "300px",
                  }}
                ></img>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5" id="impact">
          <Col>
            <h2 className="mb-4">Impact of Reforms</h2>
            <Card>
              <Card.Body>
                <Card.Title>Increased Participation</Card.Title>
                <Card.Text>
                  Recent reforms have led to a 30% increase in youth
                  participation in organized sports activities.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Grassroots Talent Development</Card.Title>
                <Card.Text>
                  Initiatives like Khelo India have successfully identified and
                  nurtured young talent, leading to a stronger pipeline of
                  future athletes.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Olympic Success</Card.Title>
                <Card.Text>
                  India's performance in the Olympics and other international
                  events has improved, with more athletes winning medals and
                  gaining global recognition.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Improved Infrastructure</Card.Title>
                <Card.Text>
                  Over 1000 new sports facilities have been developed across the
                  country in the last 5 years.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="submit" className="mb-5">
          <Col md={8} className="mx-auto">
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Submit Your Reform Idea</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Idea</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit" size="lg">
                      Submit Idea
                    </Button>
                  </div>
                </Form>
                {submitStatus === "success" && (
                  <Alert variant="success" className="mt-3">
                    Your idea has been submitted successfully!
                  </Alert>
                )}
                {submitStatus === "error" && (
                  <Alert variant="danger" className="mt-3">
                    There was an error submitting your idea. Please try again.
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-light py-4 mt-5">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 Sports Reform India. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
