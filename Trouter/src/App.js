import{
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Koti from './components/Koti';
import Tietoja from './components/Tietoja';
import Sivut from './components/Sivu';

const App=()=> {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <Link to='/'>Koti</Link>
          </li>
          <li>
            <Link to='/tietoja'>tietoja</Link>
          </li>
          <li>
            <Link to='/sivu'>Käyttäjät</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Koti/>}/>
        <Route path='tietoja/*' element={<Tietoja/>}/>
        <Route path='sivu/*' element={<Sivut/>}/>
      </Routes>

    </BrowserRouter>
  );
}









export default App;
