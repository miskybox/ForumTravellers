//AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseConfig  from '../firebase.config';

// Crear el contexto
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseConfig.app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    const auth = getAuth(firebaseConfig.app);
    auth.signOut().then(() => setUser(null));
  };

  const updateProfilePicture = async (file) => {
    const storage = getStorage(firebaseConfig.app);
    const storageRef = ref(storage, `profilePictures/${user.uid}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    const auth = getAuth(firebaseConfig.app);
    await updateProfile(auth.currentUser, { photoURL: url });
    setUser({ ...user, photoURL: url });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfilePicture }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
