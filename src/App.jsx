import { React, useState, useEffect } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import IntroPage from './pages/IntroPage/IntroPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import PlayersList from './components/PlayerCard/PlayersList.jsx';
import SplashPage from './pages/SplashPage/SplashPage.jsx';
import './App.css'

const App = () => {

  const [transition, setTransition] = useState(false);
  useEffect(() => {
      const transitionTimer = setTimeout(() => {
        setTransition(true)
      }, 3000)

      return () => clearTimeout(transitionTimer)
    }, [])

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
            path='/players' 
            element={
              <TransitionGroup>
                <CSSTransition key='players' classNames='fade' timeout={300} in={transition}>
                  <PlayersList/>
                </CSSTransition>
              </TransitionGroup>
            } />
      </Routes>
    </>
  )
} 

export default App
