import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Pages/Layout/Header/Header';
import Home from './Pages/CMS/Home/Home';
import AddCart from './Pages/CMS/AddCart/AddCart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addcart' element={<AddCart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
