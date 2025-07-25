import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import ChatBot from './ChatBot';
import Prime from './Prime';
import Sos from './Sos';


export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Prime/>
      <ChatBot/>
      <Sos/>
      <Footer/>
    </>
  )
}