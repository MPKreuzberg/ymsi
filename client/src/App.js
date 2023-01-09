import './App.css';
import Nav from './components/navbar/Nav';
import SideBarLeft from './components/TopicsSideBar/SideBarLeft';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <SideBarLeft />
    </div>
  );
}

export default App;
