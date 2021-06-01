import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import './App.css';
import Nav from './components/Nav'
import MonsterList from './components/MonsterList'
function App() {
  return (
    <div className="App">
      <Nav /> 
      <MonsterList />
    </div>
  );
}

export default App;
