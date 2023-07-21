import { useState } from 'react'

export default function Header() {
    const [count, setCount] = useState(0)

    return (
        <section className="text-center">
            <div className="inline-block text-align-center">
                <input type="text" id="top" placeholder='Top Text' className="mt-9 mr-4 w-56 h-9 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-left" />
                <input type="text" className="mb-6 w-56 h-9 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-left " id="bottom" placeholder='Bottom Text'/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <button className="bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:bg-purple-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-2/3 h-10">Get a New Meme Image 🖼️</button>
            </div>
        </section>
    )
}