import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import './App.css';
import Nav from './components/Nav'
import MonsterList from './components/MonsterList'
import SavedMonsters from './components/SavedMonsters'
import KilledMonsters from './components/KilledMonsters'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route  path="/savedmonsters" component={SavedMonsters}/>
          <Route path="/killedmonsters" component={KilledMonsters}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
     <form className='search-form'>
          <input className='search-bar' placeholder='input monster' type="text" />
          <button className='search-button' type='submit'>
            Search
          </button>
        </form>
        <MonsterList />
  </div>
)
export default App;
