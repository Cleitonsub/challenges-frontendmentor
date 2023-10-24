import { Redirect, Switch, Route } from 'react-router-dom';
import CreditCard from '../pages/CreditCard';

export default function ProjectRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/creditCard" />
      </Route>
      <Route exact path="/creditCard" component={ CreditCard } />
    </Switch>
  );
}