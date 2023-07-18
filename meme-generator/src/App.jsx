import { useState } from 'react'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

    return (
      <body className="min-h-screen">
        <Header />
      </body>
      
    )
}

export default App
