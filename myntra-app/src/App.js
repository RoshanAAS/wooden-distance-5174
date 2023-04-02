// import logo from './logo.svg';
// import './App.css';
import Navbar from './pages/Navbar';
import {Footer} from './Components/Footer.jsx'
import { Allroutes } from './Components/Allroutes';




function App() {
  return (
    <div className="App">
       <Navbar/>
        <Allroutes/>
       
       <Footer/>
    </div>
  );
}

export default App;
