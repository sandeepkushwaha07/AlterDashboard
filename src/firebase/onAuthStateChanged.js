// src/firebase/useAuthStateChanged.js
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

const useAuthStateChanged = (setUser, setLoading) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Update the user if authenticated
      } else {
        setUser(null); // Clear the user if logged out
      }
      setLoading(false); // Stop loading once we have auth state info
    });

    // Cleanup function to unsubscribe from auth state listener
    return () => unsubscribe();
  }, [setUser, setLoading]); // Dependency array ensures effect runs only once or when dependencies change
};

export default useAuthStateChanged;
