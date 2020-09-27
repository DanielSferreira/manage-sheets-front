import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard';

function App() {
  return (
  
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dash" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;