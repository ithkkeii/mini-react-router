import React from 'react';
import './App.css';
import Link from './react-router/Link';
import Route from './react-router/Route';
import Routes from './react-router/Routes';
import useParams from './react-router/useParams';

const Menu = () => {
  return <div>Menu</div>;
};

const Profile = () => {
  const params: any = useParams();
  return (
    <div>
      Profile {params.id} {params.user}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/menu">Menu</Link>
        <Link to="/profile/1/john">Profile</Link>
        <Link to="/hihi">HiHi</Link>
      </div>
      <Routes>
        {/* <Route path="/">
          <Menu />
        </Route> */}
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/profile/:id/:user">
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
