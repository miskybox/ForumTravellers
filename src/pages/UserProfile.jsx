//UserProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { username } = useParams(); // Extrae el parámetro username de la URL

    // Simula datos de usuario basados en el parámetro username
    const userData = {
        name: username,
        avatar: 'user-avatar.jpg',
        role: 'Administrador',
        followers: 0,
        following: 0,
    };

    return (
        <div className="user-profile">
            <img src={userData.avatar} alt="User Avatar" />
            <h2>{userData.name}</h2>
            <p>#{userData.role}</p>
            <p>{userData.followers} Followers | {userData.following} Following</p>
            <div className="user-actions">
                <button>Follow</button>
                <button>Message</button>
            </div>
        </div>
    );
};

export default UserProfile;

