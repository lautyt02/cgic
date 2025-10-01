import './App.css'
import { Layout } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HubDeInovacion } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<HubDeInovacion/>} />
            <Route path='/projects/' element={<HubDeInovacion/>} />
            <Route path='/projects/hub-de-inovacion' element={<HubDeInovacion/>} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App
