import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutOne from './layout/LayoutOne'
import Error from './components/404/Error'
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LayoutOne/>}/>
            <Route index element={<Home/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App