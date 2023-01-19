import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUserPage/CreateUserPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { ResetPassword } from './components/ResetPassword/ResetPassword';
import Home from './Home.jsx';
import React,{ createContext, useContext, useState} from 'react';
import { LoginContext } from './components/Context/LoginContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path="/signup" element={<CreateUserPage />} />
            <Route path='/recover' element={<ResetPassword />} />
          </Routes>
        </div>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;

