//Forum.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/App.css";

const Forum = ({ categories, setCategories }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleFollowClick = (id) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        if (category.id === id) {
          const following = !category.following;
          const followers = following
            ? category.followers + 1
            : category.followers - 1;
          return { ...category, following, followers };
        }
        return category;
      })
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleCreateNewEntry = () => {
    if (user) {
      if (selectedCategory) {
        navigate(`/forum/${selectedCategory.id}`);
      }
    } else {
      navigate("/login");
    }
  };

  const handleCommentClick = (category) => {
    if (user) {
      navigate(`/forum/${category.id}/comment`);
    } else {
      alert("You need to sign up or log in to write a comment.");
    }
  };

  return (
    <div className="forum-container container mx-auto px-4 py-8">
      <Navbar
        bg="light"
        expand="lg"
        className="navbar no-margin-padding navbar-rounded"
      >
        <Navbar.Brand href="#home" className="forum-title">
          True Traveller: Traveler Community
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/all-entries">
              <Button variant="outline-secondary" className="me-4">
                All entries
              </Button>
            </Link>
            <Link to="/my-entries">
              <Button variant="outline-secondary" className="me-4">
                My entries
              </Button>
            </Link>
            {user && (
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  Create New Entry
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map((category) => (
                    <Dropdown.Item
                      key={category.id}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="no-margin-padding">
        <Row className="no-margin-padding">
          <Col md={12}>
            <h1 className="h1">Categories</h1>
            <Form className="d-flex mb-3 no-margin-padding">
              <InputGroup className="no-margin-padding">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="no-margin-padding"
                />
                <Button type="submit">Search</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row className="no-margin-padding">
          {categories
            .filter((category) =>
              category.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((category) => (
              <Col key={category.id} md={4} className="no-margin-padding">
                <Card className="mb-3 card">
                  <Card.Header className="card-header">
                    <span style={{ fontWeight: "bold" }}>{category.name}</span>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ marginRight: "10px" }}>
                        Posts: {category.posts}
                      </span>
                      <span style={{ marginRight: "10px" }}>
                        Followers: {category.followers}
                      </span>
                      <Button
                        variant={category.following ? "secondary" : "primary"}
                        onClick={() => handleFollowClick(category.id)}
                        size="sm"
                        className="btn-sm"
                      >
                        {category.following ? "Following" : "Follow"}
                      </Button>
                    </span>
                  </Card.Header>
                  <Card.Body className="card-body">
                    <Card.Text>
                      Describe your forum category. Engage your audience and
                      entice them to continue reading.
                    </Card.Text>
                    <Link to={`/forum/${category.id}`}>
                      <Button className="mt-5 btn-sm">View Posts</Button>
                    </Link>
                    <Button
                      className="mt-3 btn-sm"
                      onClick={() => handleCommentClick(category)}
                    >
                      Write a Comment
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Forum;
