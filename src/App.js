import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Test from './components/Test/Test';
import React, { Fragment } from 'react';
import RoutingTest from './components/RoutingTest/RoutingTest';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Fragment key="test key">
      <div className="App">
        <ErrorBoundary>
          <Test />
        </ErrorBoundary>
      </div>
      <hr />
      <Router>
        <RoutingTest />
      </Router>
    </Fragment>
  );
}

export default App;
