import React, { useState, useEffect, MouseEvent } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  // Define state with correct types
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Using useEffect with a defined cleanup
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  // If loading, return a loading skeleton
  if (loading) {
    return <div className="h-32 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>;
  }

  // Toggle function type is inferred by useState
  const toggleDetails = (): void => {
    setShowEmail((prevShowEmail) => !prevShowEmail);
  };

  // Event handler type is inferred but can be explicitly typed if needed
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    toggleDetails(); // Trigger toggleDetails on button click
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-4">
      <img
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-4">{user.name}</h2>
      {showEmail && <p className="text-center text-gray-600">{user.email}</p>}
      <button
        onClick={handleClick} // Use a typed event handler
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-auto block"
      >
        Toggle Details
      </button>
    </div>
  );
};

export default UserCard;
