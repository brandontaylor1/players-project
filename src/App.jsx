import React from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import PlayerCard from './components/PlayerCard/PlayerCard.jsx'
import PlayersList from './components/PlayerCard/PlayersList.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import './App.css'

const App = () => {

  return (
    <>
    <Header />
    <PlayersList />
    </>
  )
}

export default App
