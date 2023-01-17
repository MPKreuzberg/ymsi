import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateUserPage } from './components/CreateUserPage/CreateUserPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { ResetPassword } from './components/ResetPassword/ResetPassword';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

