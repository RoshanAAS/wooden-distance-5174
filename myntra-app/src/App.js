// import logo from './logo.svg';
// import './App.css';
import Navbar from './pages/Navbar';
// import { Home } from './pages/Home';
import {Footer} from './Components/Footer.jsx'
import { Allroutes } from './Components/Allroutes';



function App() {
  return (
    <div className="App">
       <Navbar/>
       {/* <Home/> */}
        <Allroutes/>
       <Footer/>
    </div>
  );
}

export default App;
