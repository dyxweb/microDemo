import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from "../containers/layout";
import Des from '../containers/des';
import Home from '../containers/home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/des" component={Des} />
          <Redirect exact from='/' to='/home' />               
        </Switch>
      </Layout>
    </Router>
  )  
}

export default App;