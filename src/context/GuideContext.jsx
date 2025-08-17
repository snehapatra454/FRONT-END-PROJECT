import React, { createContext, useContext, useState } from 'react';

const GuideContext = createContext();

export const useGuide = () => {
  const context = useContext(GuideContext);
  if (!context) {
    throw new Error('useGuide must be used within a GuideProvider');
  }
  return context;
};

export const GuideProvider = ({ children }) => {
  const [guide, setGuide] = useState(() => {
    const saved = localStorage.getItem('plantGuide');
    return saved ? JSON.parse(saved) : { title: "", subtitle: "", description: "" };
  });

  const updateGuide = (newGuide) => {
    setGuide(newGuide);
    localStorage.setItem('plantGuide', JSON.stringify(newGuide));
  };

  return (
    <GuideContext.Provider value={{ guide, setGuide: updateGuide }}>
      {children}
    </GuideContext.Provider>
  );
};