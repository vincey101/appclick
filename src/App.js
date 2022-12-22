import Login from '../src/components/auth/Login'
import Home from '../src/components/home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from 'react'
import './App.css'
import Page from './components/page/Page';

function App() {
    return (
        <div>
            <div >
                <Router>
                    <Routes>
                        <>
                            <Route path="/" exact element={<Login />} />
                            <Route path="/home" exact element={<Home />} />
                            <Route path="*" element={<Login />} />
                        </>
                        <>
                            <Route path="/canvas" element={<Page />} />
                        </>
                    </Routes>
                </Router>
            </div>

        </div>
    )
}

export default App