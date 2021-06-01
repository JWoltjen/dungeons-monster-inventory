import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import './App.css';
import Nav from './components/Nav'
import MonsterList from './components/MonsterList'


function App() {
  return (
    <div className="App">
      <Nav /> 
      <form className='search-form'>
        <input className='search-bar' placeholder='input monster' type="text" />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <MonsterList />
    </div>
  );
}

export default App;
