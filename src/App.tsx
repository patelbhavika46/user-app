import React from 'react';
import UserList from './Components/User/UserList';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <UserList />
    </div>
  );
};

export default App;
