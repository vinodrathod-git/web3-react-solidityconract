import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import ViewAll from './ViewAll';
import App_All from './App_all';
import ViewByPH from './ViewByPN';
import Home from './Home';
import Add from './Add';

export default class App extends React.Component{

render() {
    return(
      <body>
        <div className = 'app-body'>
          <main className = 'main'>
        <Switch> 
            <Route path="/viewbyphn" exact component={ViewByPH} />  
            <Route path="/viewall" exact component={ViewAll} />  
            <Route exact path="/add" component={Add} />                 
            <Route path="/" exact component={Home}  />  
          </Switch>
          </main>
          </div>
      </body>
  );
}
}