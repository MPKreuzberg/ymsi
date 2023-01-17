import './App.css';
import { CreateUserPage } from './components/CreateUserPage/CreateUserPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { ResetPassword } from './components/ResetPassword/ResetPassword';
import Nav from './components/Navigation/Nav.jsx';
import Post from './components/Post/Post';
import SideBarLeft from './components/SideBarLeft/SideBarLeft';
import SideBarRight from './components/SideBarRight/SideBarRight';
import Trending from './components/Trending/Trending';

function App() {
  return (
    <div className="App">
      {/* <ResetPassword /> */}
      {/* <CreateUserPage /> */}
      {/* <LoginPage /> */}
      <Nav />
      <div className='flex-app'>
        <SideBarLeft />
        <div className='mainContent'>
          <Trending />
          <Post />
        </div>
          <SideBarRight />
      </div>
    </div>
  );
}

export default App;
