//CategoryComments.jsx
// CategoryComments.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, ListGroup, Form, InputGroup, FormControl } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/UseAuth';
import '../styles/App.css';

const CategoryComments = () => {
    const { categoryId } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        // Aquí deberías hacer una llamada a la API para obtener los comentarios de la categoría.
        // Esto es un ejemplo estático.
        setComments([
            { id: 1, user: "User1", text: "This is a comment" },
            { id: 2, user: "User2", text: "This is another comment" },
        ]);
    }, [categoryId]);

    const handleAddComment = () => {
        if (newComment.trim()) {
            const comment = {
                id: comments.length + 1,
                user: user.name,
                text: newComment,
            };
            setComments([...comments, comment]);
            setNewComment('');
        }
    };

    return (
        <div className="category-comments container mx-auto px-4 py-8">
            <h2>Comments for Category {categoryId}</h2>
            <ListGroup className="mb-3">
                {comments.map(comment => (
                    <ListGroup.Item key={comment.id}>
                        <strong>{comment.user}:</strong> {comment.text}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {user && (
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <Button variant="outline-primary" onClick={handleAddComment}>
                        Add Comment
                    </Button>
                </InputGroup>
            )}
        </div>
    );
};

export default CategoryComments;
