import React from 'react'
import Todo from './Todo'
import Weather from './Weather'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/Weather">Weather</Link>| {" "}
        <Link to="/Todo">Todo</Link>
      </nav>
      <Routes>
        <Route path='/Weather' element={<Weather/>} />
        <Route path='/Todo' element={<Todo/>} />
        <Route path='/' element={<h1>Welcome! Chose Weather or Todo above.</h1>} />
      </Routes>
    </div>
  )
}

export default App