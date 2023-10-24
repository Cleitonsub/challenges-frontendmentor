import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProjectContext from './ProjectContext';

function ProjectProvider({ children }) {
  const [user, setUser] = useState({});

  const setLocalStorage = (key, info) => {
    localStorage.setItem(key, JSON.stringify(info));
  };

  const contextValue = useMemo(() => ({
    user
  }), [user]);

  return (
    <ProjectContext.Provider value={ contextValue }>
      {children}
    </ProjectContext.Provider>
  );
}

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectProvider;
