//MyEntries.jsx
import React from 'react';
import { Container, Card } from 'react-bootstrap'; 
import '../styles/App.css';

const MyEntries = () => {
    const myPosts = [
        { id: 1, title: 'My Post 1', content: 'Contenido de mi post 1' },
        { id: 2, title: 'My Post 2', content: 'Contenido de mi post 2' },
    ];

    return (
        <Container className="my-entries mt-5">
            <h2 className="text-center mb-4">My Entries</h2>
            {myPosts.map(post => (
                <Card key={post.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text className="card-text-custom">{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default MyEntries;
