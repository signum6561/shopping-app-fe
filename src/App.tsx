// App.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import './customStyles.css'; // Custom styles for Ant Design

const App: React.FC = () => {
  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
    >
      <Outlet />
    </div>
  );
};

export default App;
