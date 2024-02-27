// Firebase imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

// React imports
import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkifIsCancelled() {
    if (cancelled) {
      return;
    }
  }
  const createUser = async (data) => {
    checkifIsCancelled();
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
