import { Routes,Route } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css'
import Admin from './components/Admin'
import Reg from './components/Reg';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Admin}/>
        <Route path='/add' Component={Reg}/>
        <Route path='/edit/:id' Component={Edit}/>

      </Routes>
    </div>
  );
}

export default App;
