import React from 'react';
import './App.css';
import Link from './react-router/Link';
import Route from './react-router/Route';
import Routes from './react-router/Routes';

const ComponentA = () => {
  return (
    <div>
      ComponentA, Click to hello B<Link to="/helloB">Hello</Link>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div>
      ComponentB, Click to hello A<Link to="/helloA">Hello</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <ComponentA />
        </Route>
        <Route path="/helloA/:id">
          <ComponentA />
        </Route>
        <Route path="/helloB/:id">
          <ComponentB />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
