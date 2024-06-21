//CategoryComponent
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const CategoryComponent = ({ categories }) => {
  const { id } = useParams();
  const category = categories.find((category) => category.id.toString() === id);

  return (
    <Container>
      <Row>
        <Col>
          <h2>{category.name}</h2>
          <p>Posts: {category.posts}</p>
          <p>Followers: {category.followers}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="postContent">
                  <Form.Label>New Post</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryComponent;
