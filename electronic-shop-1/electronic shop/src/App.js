import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/about' element={ <About/>}/>
    <Route path='login' element={ <Login/>}/>
    <Route path='/contact' element={ <Contact/>}/>
    <Route path='/register' element={ <Register/>}/>
    <Route path='/products' element={ <Products/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
    
    </div>
  );
}

export default App;
