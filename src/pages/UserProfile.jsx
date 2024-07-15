//UserProfile.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/UseAuth';
import "../styles/App.css"; 
import "../styles/UserProfile.css"; 


const UserProfile = () => {
    const { username } = useParams();
    const { user, updateProfilePicture } = useAuth();
    const [file, setFile] = useState(null);

    const userData = {
        name: username || user?.displayName,
        avatar: 'https://i.postimg.cc/hjNg63gB/user-avatar.jpg', // URL de la imagen del avatar
        role: 'Administrador',
        followers: 0,
        following: 0,
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            await updateProfilePicture(file);
        }
    };

    return (
        <Container className="user-profile-container mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Card className="text-center">
                        <Card.Img variant="top" src={userData.avatar} alt="User Avatar" className="user-avatar mt-3" />
                        <Card.Body>
                            <Card.Title className="mb-3">{userData.name}</Card.Title>
                            <Card.Text>
                                <strong>Role:</strong> {userData.role} <br />
                                <strong>Followers:</strong> {userData.followers} <br />
                                <strong>Following:</strong> {userData.following}
                            </Card.Text>
                            {user?.displayName === username && (
                                <div className="mt-3">
                                    <Form.Group>
                                        <Form.Label>Upload Profile Picture</Form.Label>
                                        <Form.Control type="file" onChange={handleFileChange} />
                                    </Form.Group>
                                    <Button variant="primary" className="mt-3" onClick={handleUpload}>
                                        Upload
                                    </Button>
                                </div>
                            )}
                            <div className="user-actions mt-4">
                                <Button variant="primary" className="me-2">Follow</Button>
                                <Button variant="secondary">Message</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfile;