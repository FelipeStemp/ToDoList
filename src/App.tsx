
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import InicioPage from './pages/Inicio/Inicio';
import CelPage from './pages/celularPage/celular';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<InicioPage />} />
        <Route path='/Tarefas' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
