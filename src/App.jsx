import { useState } from 'react'
import './App.css'

const users = [
  { firstName: "John", id: 1 },
  { firstName: "Emily", id: 2 },
  { firstName: "Michael", id: 3 },
  { firstName: "Sarah", id: 4 },
  { firstName: "David", id: 5 },
  { firstName: "Jessica", id: 6 },
  { firstName: "Daniel", id: 7 },
  { firstName: "Olivia", id: 8 },
  { firstName: "Matthew", id: 9 },
  { firstName: "Sophia", id: 10 }
]

function App() {
  const [search, setSearch] = useState('');

  const handleInputChange = (ev) => {
    const value = ev.target.value;
    setSearch(value);
  }

  return (
    <div>
      <input 
        type='text'
        value={search}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
