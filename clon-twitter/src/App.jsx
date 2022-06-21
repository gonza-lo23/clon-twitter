import React, { useState } from 'react'
import { Stack, Text } from '@chakra-ui/react'
import { Route, Routes} from 'react-router-dom'
import FeedScreen from './components/FeedScreen'
import MessagesScreen from './components/MessagesScreen.jsx'
import SideBar from './components/SideBar.jsx'
import Home from './components/Home.jsx'
import Widgets from './components/Widgets.jsx'
import Layout from "./components/layout.jsx";
import './App.css'

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route exact component={FeedScreen} path="/" />
        <Route component={MessagesScreen} path="/messages"/>
      </Routes>
    </Layout>
  )};

export default App;
