import { useState } from 'react'
import './App.css'
import Header from './Header'
import Meme from './Meme'

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
