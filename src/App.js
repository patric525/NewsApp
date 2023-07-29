import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Search from './component/Search';
import Finance from './component/Finance';
import Health from './component/Health';
import Sports from './component/Sports';
import Home from './component/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/finance' element={<Finance/>}/>
      <Route path='/search/:query' element={<Search/>}/>
      <Route path='/health' element={<Health/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
