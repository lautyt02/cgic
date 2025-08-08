import { useState } from 'react'
import './App.css'
import { Layout } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        Children
      </Layout>
    </>
  )
}

export default App
