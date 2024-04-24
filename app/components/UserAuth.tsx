import React from 'react';
import firebase, { auth } from '../../firebase/firebaseClient';

const Auth: React.FC = () => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      const idToken = await result.user?.getIdToken();

      if (idToken) {
        // Send the idToken to the backend for authentication
        const response = await fetch('/api/auth/google-auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken }),
        });

        if (response.ok) {
          console.log('Google Authentication successful');
        } else {
          console.error('Google Authentication failed');
        }
      }
    } catch (error) {
      console.error('Error during Google Authentication:', error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Auth;