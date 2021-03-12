import { createContext, useContext } from 'react';
import { matchRoutes } from './helpers';
import { RouterContext } from './Router';

const RouteContext = createContext({ params: {} });

const Routes: React.FC = (props) => {
  const { location } = useContext(RouterContext);

  const match = matchRoutes(props.children, location);

  console.log(match.route);

  if (!match) return null;

  return (
    <RouteContext.Provider value={{ params: match.route.params }}>
      {match.route}
    </RouteContext.Provider>
  );
};

export default Routes;
