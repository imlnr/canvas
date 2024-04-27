import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import First from '../pages/First'
import Custom from '../pages/Custom'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path='/kfc' element={<First/>}/>
        <Route path='/custom-ad' element={<Custom/>}/>
    </Routes>
  )
}

export default MainRoutes