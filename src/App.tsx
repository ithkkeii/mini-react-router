import React from 'react';
import './App.css';
import Link from './react-router/Link';
import Route from './react-router/Route';
import Routes from './react-router/Routes';

const Menu = () => {
  return <div>Menu</div>;
};

const Profile = () => {
  return <div>Profile</div>;
};

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/menu">Menu</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/hihi">HiHi</Link>
      </div>
      <Routes>
        {/* <Route path="/">
          <Menu />
        </Route> */}
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/hihi">
          <div>hihi</div>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
