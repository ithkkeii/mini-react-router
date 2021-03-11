import React, { createContext, useCallback, useEffect, useState } from 'react';

export const RouterContext = createContext({
  location: '',
  push: (newLocation: string) => {},
});

const Router: React.FC = (props) => {
  const [location, setLocation] = useState<string>(window.location.pathname);

  const handlePush = (newLocation: string) => {
    window.history.pushState({}, '', newLocation);
    setLocation(newLocation);
  };

  const handleHashChange = useCallback(() => {
    setLocation(window.location.pathname);
  }, []);

  useEffect(() => {
    // window.addEventListener('popstate', () => console.log('hi'));
  }, [handleHashChange]);

  return (
    <RouterContext.Provider value={{ location, push: handlePush }}>
      {props.children}
    </RouterContext.Provider>
  );
};

export default Router;
