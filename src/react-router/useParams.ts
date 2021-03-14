import { useContext } from 'react';
import { RouteContext } from './Routes';

const useParams = () => {
  const { params } = useContext(RouteContext);
  return params;
};

export default useParams;
