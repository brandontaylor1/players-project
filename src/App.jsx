import { React, useState, useEffect } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PLAYERS } from './data/PLAYERS.js';
import IntroPage from './pages/IntroPage/IntroPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import TeamPage from './pages/TeamPage/TeamPage.jsx';
import PlayersList from './components/PlayerCard/PlayersList.jsx';
import SplashPage from './pages/SplashPage/SplashPage.jsx';
import SelectorPage from './pages/SelectorPage/SelectorPage.jsx';
import TeamDetailPage from '../TeamDetailPage/TeamDetailPage.jsx';
import PlayersPage from './pages/PlayerPage/PlayersPage.jsx';

import './App.css'

const App = () => {



  const [transition, setTransition] = useState(false);
  useEffect(() => {
      const transitionTimer = setTimeout(() => {
        setTransition(true)
      }, 3000)

      return () => clearTimeout(transitionTimer)
    }, [])


    const [cards, setCards] = useState(PLAYERS);

    const handleDelete = (id) => {
      const updatedCards = cards.filter((card) => card.id !== id);
      setCards(updatedCards)
      console.log('deleted: ', id)
      console.log(updatedCards)
    }

    const filterByPosition = (position) => {
      const filtered = cards.filter((card) => card.position === position)
      setCards(filtered) 
    }

  return (
    <>
      <Routes>
        <Route 
          path='/' 
          element={ 
          <TransitionGroup>
            <CSSTransition key='intro' classNames='fade' timeout={300} in={transition}>
              <IntroPage />
            </CSSTransition>
          </TransitionGroup>
        }/>
        <Route 
            path='/splash' 
            element={
            <TransitionGroup>
              <CSSTransition key='splash' classNames='fade' timeout={300} in={transition}>
                <SplashPage />
              </CSSTransition>
            </TransitionGroup>
          }/>
        <Route 
            path='/login' 
            element={
              <TransitionGroup>
                <CSSTransition key='login' classNames='fade' timeout={300} in={transition}>
                  <LoginPage />
                </CSSTransition>
              </TransitionGroup>
            } />
        <Route 
            path='/selector' 
            element={
              <TransitionGroup>
                <CSSTransition key='selector' classNames='fade' timeout={300} in={transition}>
                  <SelectorPage />
                </CSSTransition>
              </TransitionGroup>
            } />

        <Route 
            path='/teampage' 
            element={
              <TransitionGroup>
                <CSSTransition key='teampage' classNames='fade' timeout={300} in={transition}>
                  <TeamPage />
                </CSSTransition>
              </TransitionGroup>
            } />
          <Route
            path='/teampage/:teamId' 
            element={
              <TransitionGroup>
                <CSSTransition key='teamDetails' classNames='fade' timeout={300} in={transition}>
                  <TeamDetailPage />
                </CSSTransition>
              </TransitionGroup>
            } />
          <Route
            path='/teampage/:teamId/players' 
            element={
              <TransitionGroup>
                <CSSTransition key='teamplayers' classNames='fade' timeout={300} in={transition}>
                  <PlayersPage />
                </CSSTransition>
              </TransitionGroup>
            } />


        <Route 
            path='/players' 
            element={
              <TransitionGroup>
                <CSSTransition key='players' classNames='fade' timeout={300} in={transition}>
                  <PlayersList 
                    players={cards} 
                    filterByPosition={filterByPosition}
                    handleDelete={handleDelete}
                    />
                </CSSTransition>
              </TransitionGroup>
            } />
      </Routes>
    </>
  )
} 

export default App
