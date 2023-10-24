import React from 'react';
import ProjectRoutes from './routes';
import ProjectProvider from './context/ProjectProvider';
import './App.css';

function App() {
  return (
    <ProjectProvider>
      <ProjectRoutes />
    </ProjectProvider>
  );
}

export default App;
