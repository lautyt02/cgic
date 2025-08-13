import { useState } from 'react'
import './App.css'
import { Layout } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Projects, HubDeInovacion } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/projects/' element={<Projects />} />
            <Route path='/projects/hub-de-inovacion' element={<HubDeInovacion/>} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App
