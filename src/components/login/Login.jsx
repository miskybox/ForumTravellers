//LogIn.jsx
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UseAuth";
import firebaseConfig from "../../firebase.config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(firebaseConfig.app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      login({
        email: user.email,
        username: user.displayName,
      });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4 login-heading">LOG IN</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
