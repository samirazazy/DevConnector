import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/" component={Register} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
