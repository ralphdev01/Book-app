import React, {component} from 'react';
import logo from './logo.svg';
import './App.css';
import Read from './components/books/Read';
import currentlyReading from './components/books/currentlyReading';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Form from './components/form';



function App() {
  return (
    <div className="App">

    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route exact path="/login" component={Form} />
        <Route exact path="/dashboard" component={Read} />
        <Route exact path="/edit-book/:id" component={currentlyReading} />
      </Switch>
    </Router> 
    </div>
  );
}

export default App;
