import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {
  const { role } = useSelector((state) => state.auth);
  
  return (
    <Route {...rest} render={
      props => (
        role === 'admin' ? <Component {...props} /> : <Redirect to="/auth" />
      )} 
    />
  );
};

export default PrivateRoute;
