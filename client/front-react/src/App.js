import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUserPage/CreateUserPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { ResetPassword } from './components/ResetPassword/ResetPassword';
import { CreatePost } from './components/CreatePost/CreatePost';
import { UserProfile } from './components/UserProfile/UserProfile';

import Home from './Home.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/signup" element={<CreateUserPage />} />
          <Route path='/recover' element={<ResetPassword />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/userprofile' element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

