// AllEntries.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/App.css';

const AllEntries = () => {
    const allPosts = [
        { id: 1, title: 'Post 1', content: 'Contenido del post 1' },
        { id: 2, title: 'Post 2', content: 'Contenido del post 2' },
        { id: 3, title: 'Post 3', content: 'Contenido del post 3' },
        // Agrega más publicaciones según sea necesario
    ];

    return (
        <div className="all-entries">
            <h2>All Entries</h2>
            {allPosts.map(post => (
                <Card key={post.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text className="card-text-custom">{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default AllEntries;


