import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    return localStorage.getItem('userRole') || null;
  });

  const updateRole = (newRole) => {
    setRole(newRole);
    if (newRole) {
      localStorage.setItem('userRole', newRole);
    } else {
      localStorage.removeItem('userRole');
    }
  };

  return (
    <RoleContext.Provider value={{ role, setRole: updateRole }}>
      {children}
    </RoleContext.Provider>
  );
};