import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Single from './Components/Single';
import Mycategory from './Components/Category';
import Notfound from './Components/notfound';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/single/:id' element={<Single />}/>
      <Route path='/category/:category' element={<Mycategory />}/>
      <Route path='*' element={<Notfound />}/>
    </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
