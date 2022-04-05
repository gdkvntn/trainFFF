import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Card from './Card';
import RoutComponent from './RoutComponent';
import { BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <BrowserRouter>
      <div>
        <NavLink to={'/fc'}>FC</NavLink>
        <NavLink to={'/'}>Rout</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<RoutComponent/>}/>
        <Route path='/fc'element={<Fcomponent/>}/>
      </Routes>
     
      </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
console.log('asdsdsa')