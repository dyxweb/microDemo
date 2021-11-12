import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../containers/layout';
import List from '../containers/list';
import Operate from '../containers/operate';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/childOne/list" component={List} />
          <Route exact path="/childOne/operate" component={Operate} />
          <Redirect from="/childOne"  to='/childOne/list' />               
        </Switch>
      </Layout>
    </Router>
  )  
}

export default App;