import { useState } from 'react'
import './App.css'
import Header from './Header.js'
import Meme from './Meme.js'

function App() {
  const [count, setCount] = useState(0)

    return (
      <body className="font-karla dark:bg-gray-900">
        <Header />
        <Meme />
      </body>
      
    )
}

export default App
