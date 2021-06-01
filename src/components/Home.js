import React, {useState, useEffect} from 'react'
import MonsterList from './MonsterList'

function Home() {

  const [searchInput, setSearchInput] = useState('')
  const [monsterInfos, setMonsterInfos] = useState([]);
  const [query, setQuery] = useState(''); 

  useEffect(() => {
    getMonsters()
  }, [])

  const getMonsters = async () => {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${query}`)
    const data = await response.json(); 
    setMonsterInfos(data)
  }

  const updateSearch = e => {
    setSearchInput(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault(); 
    setQuery(searchInput)
  }
    
return (
  <div>
     <form className='search-form'>
          <input className='search-bar' placeholder='input monster' type="text" value={searchInput} />
          <button className='search-button' type='submit'>
            Search
          </button>
        </form>
        <MonsterList />
  </div>
)
}

export default Home
