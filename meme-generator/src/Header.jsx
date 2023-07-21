import { useState } from 'react'

export default function Header() {
    const [count, setCount] = useState(0)

    return (
        <header className="sticky top-0 z-10 bg-violet-600 text-white">
          <section className="flex max-w-4xl items-center p-4">
            <img src="/img/troll-face.png" className="flex m-3 w-8 h-7" />
            <h1 className="text-3xl mr-1 font-karla font-bold tracking-tight">Meme Generator</h1>
          </section>
        </header>
    )
}