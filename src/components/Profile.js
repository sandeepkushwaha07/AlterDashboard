// components/Profile.jsx
import React, { useState } from 'react';
import { auth } from '../firebase/firebase-config'; // Correct path
import { updateProfile } from 'firebase/auth';

const Profile = ({ user, setUser }) => {
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(user, {
        displayName,
        photoURL,
      });
      setUser({ ...user, displayName, photoURL });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  const handleSignOut = () => {
    auth.signOut();
    setUser(null); // Clear user after sign out
  };

  return (
    <div>
      <h1>Manage Profile</h1>
      <img src={photoURL} alt="Profile" width="100" />
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div>
        <label>Profile Picture URL: </label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
      </div>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
