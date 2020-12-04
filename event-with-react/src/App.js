import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EventPage from './pages/event.page';
import PageNotFound from './pages/not-found.page';

const App = () => (
  <React.Fragment>
        <Switch>
            <Route exact path="/events" component={EventPage} />
            <Route exact path="/">
                <Redirect to="/events"/>
            </Route>
            <Route exact path="*" component={PageNotFound} />
            
        </Switch>
    </React.Fragment>
);
export default App;