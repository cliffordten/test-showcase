import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EventPage from './pages/events/events.page';

const App = () => (
  <React.Fragment>
        <Switch>
            <Route exact path="/events" component={EventPage} />
            <Route exact path="/">
                <Redirect to="/events"/>
            </Route>
            
        </Switch>
    </React.Fragment>
);
export default App;