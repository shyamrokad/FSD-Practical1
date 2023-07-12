
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';

function App() 
{
  return(
    <div className='App'>This is practical 2
     
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </div>
);

}

export default App;

