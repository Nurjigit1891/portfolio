import React from 'react'
import './Layout.scss'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Biography from '../biography/Biography'

const Layout = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/biography' element={<Biography />} />
        </Routes>
    </div>
  )
}

export default Layout