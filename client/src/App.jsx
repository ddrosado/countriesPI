import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import Create from './pages/create/Create'
import Landing from './pages/landing/Landing'

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='home/:id' element={<Detail/>}/>
                    <Route path='create' element={<Create/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
