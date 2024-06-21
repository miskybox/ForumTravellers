//Firebase.config.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOowjnDYNOud9zxJPFeyMMQktcGSEDakg",
  authDomain: "forumviajeros.firebaseapp.com",
  projectId: "forumviajeros",
  storageBucket: "forumviajeros.appspot.com",
  messagingSenderId: "421622609869",
  appId: "1:421622609869:web:e3426c8b0625450df0b684",
  measurementId: "G-GR3TNH70ZQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default { app, auth };

//no coincide el nombre del proyecto ya que estpy utilizando 
// las claves de un proyecto anterior y no coincide el nombre del proyecto...!!! con lo cual me da error al registrarme

/*
¡Entendido! El error 404 que estás recibiendo indica que la URL a la que Firebase intenta acceder para el proceso de autenticación no es válida o no existe. Este problema suele tener varias causas posibles:

Posibles causas y soluciones:

Configuración Incorrecta de Firebase:

API Key: Verifica que la API Key en tu firebaseConfig.js es la correcta y coincide con la de tu proyecto en la Consola de Firebase.
Dominio de Autenticación (authDomain): Asegúrate de que el valor authDomain en firebaseConfig.js es el dominio correcto para tu proyecto. Debería tener el formato tu-proyecto.firebaseapp.com.
Problemas de Red:

Conexión a Internet: Verifica que tienes una conexión a internet estable. A veces, problemas de red pueden causar errores 404.
Firewall o Proxy: Si estás detrás de un firewall o utilizando un proxy, asegúrate de que Firebase no está bloqueado.
Herramientas de desarrollo: Abre las herramientas de desarrollo de tu navegador (normalmente presionando F12) y revisa la pestaña "Red" para ver si hay algún error específico en la solicitud de autenticación.
Configuración de Autenticación en Firebase:

Habilitar Método de Autenticación: En la Consola de Firebase, ve a la sección "Authentication" y asegúrate de que el método de autenticación "Email/Contraseña" esté habilitado.
Reglas de Seguridad de Firebase: Revisa las reglas de seguridad de Firebase para asegurarte de que no estás bloqueando accidentalmente las operaciones de creación de usuarios. Por ahora, puedes usar las siguientes reglas para permitir todo:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
Problemas de Código:

Llamada a API Incorrecta: Asegúrate de estar utilizando la función correcta de Firebase Authentication para crear usuarios (createUserWithEmailAndPassword) y que los parámetros (correo electrónico y contraseña) son válidos.
Conflictos con Extensiones: Desactiva temporalmente cualquier extensión de navegador que pueda interferir con las solicitudes a Firebase.
Pasos de Depuración:

Verifica la configuración: Revisa minuciosamente tu firebaseConfig.js y la configuración en la Consola de Firebase para asegurarte de que todo coincide.
Consola del navegador: Examina la consola de tu navegador en busca de mensajes de error adicionales que puedan proporcionar más detalles.
Reglas de seguridad: Si has modificado las reglas de seguridad de Firebase, intenta relajarlas temporalmente (como se muestra arriba) para descartar que sean la causa del problema.
Prueba en otro navegador: Si es posible, prueba tu aplicación en un navegador diferente para ver si el error persiste.
Ejemplo de código de Signup corregido:

JavaScript
// Signup.jsx
// ...otras importaciones
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import firebaseConfig from '../../firebase.config'; // Asegúrate de ajustar la ruta

const handleSignup = async (e) => {
    e.preventDefault();

    try {
        const auth = getAuth(firebaseConfig.app); 
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await sendEmailVerification(user);

        // ...
    } catch (error) {
        // Captura el error y muestra un mensaje más específico
        if (error.code === 'auth/email-already-in-use') {
            setError("El correo electrónico ya está en uso.");
        } else if (error.code === 'auth/invalid-email') {
            setError("El correo electrónico no es válido.");
        } else if (error.code === 'auth/weak-password') {
            setError("La contraseña es demasiado débil.");
        } else {
            setError("Se produjo un error al crear la cuenta.");
        }
        console.error("Error al crear la cuenta:", error);
    }
};

// ...resto del componente
Usa el código con precaución.
content_copy
Espero que esto te ayude a identificar y resolver el problema. Si el error persiste después de estas comprobaciones, proporciona más detalles sobre tu configuración y código para que pueda ayudarte de manera más precisa.

Fuentes
info
  */