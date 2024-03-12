import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Homepage from './pages/Homepage.jsx'
import Footer from './components/Footer/Footer.jsx'
import PlayerCard from './components/PlayerCard/PlayerCard.jsx'
import PlayersList from './components/PlayerCard/PlayersList.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import './App.css'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/players' element={<PlayersList />} />
      </Routes>
    </>
  )
}

export default App
