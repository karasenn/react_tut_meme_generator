import { useState } from 'react'

export default function Header() {
    const [count, setCount] = useState(0)

    return (
        <header className="sticky top-0 z-10 bg-gradient-to-r from-violet-500 to-purple-500 text-white">
          <section className="flex max-w-4xl items-center p-4">
            <img src="/img/troll-face.png" className="flex m-3 w-8 h-7" />
            <h1 className="font-weight-700 text-2xl mr-1 font-karla font-bold tracking-wider">Meme Generator</h1>
          </section>
        </header>
    )
}