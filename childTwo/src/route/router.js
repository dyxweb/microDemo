import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../containers/layout';
import News from '../containers/news';
import Log from '../containers/log';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/childTwo/news" component={News} />
          <Route exact path="/childTwo/log" component={Log} />
          <Redirect from="/childTwo"  to='/childTwo/news' />               
        </Switch>
      </Layout>
    </Router>
  )  
}

export default App;