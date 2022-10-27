import { useState } from 'react'
import styled from 'styled-components';
import FontStyles from './fontStyles';
import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Foot from './components/Footer';
import './index.css'

function App() {

  return (
    <div>
    <Navigation/>
    <HeroSection/>
    <About/>
    <Foot/>
    </div>

  )
}

export default App
