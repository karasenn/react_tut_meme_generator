import { useState, useEffect } from 'react'

export default function Header() {
    const [count, setCount] = useState(0)
    (['topText', 'bottomText'])
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemes, setAllMemes] = useState([])

    // Make API call when the component loads for the first time
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => {
                setAllMemes(data.data.memes)
            })
            .catch(error => {
                console.log(error('Error fetching data:', error))
            })
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: value
            }
        })
    }


    function buttonClick() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMemeData => ({
            ...prevMemeData,
            randomImage: url
        }))
    }

    return (
        <main className="flex flex-col justify-start items-center h-screen my-6">
                <div className="flex items-center mb-4 md:flex-row md:items-center">
                    <input 
                        type="text" 
                        id="top" 
                        placeholder='Top Text' 
                        className="mx-[1rem] w-[14rem] h-[2rem] shadow appearance-none border rounded-md p-5 text-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-indigo-300 focus:border-indigo-400 focus:outline-none focus:ring-0 md:max-w-[50%]"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        id="bottom" 
                        placeholder='Bottom Text'
                        className="w-[14rem] h-[2rem] shadow appearance-none border rounded-md p-5 text-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-indigo-300 focus:border-indigo-500 focus:outline-none focus:ring-0"
                        name="bottomText"
                        value={meme.bottomText} 
                        onChange={handleChange}
                    />
                </div>
            <div className="flex justify-center">
                <button 
                    onClick={buttonClick} 
                    className="bg-violet-600 text-white hover:bg-violet-800 font-bold text-xl tracking-[-0.1rem] py-2 px-4 rounded-md flex-auto max-w-[32rem] w-full">Get a New Meme Image 🖼️
                </button>
            </div>
                <div className="relative my-6">
                    <img 
                        src={meme.randomImage}
                        className="max-w-full"
                        name="randomImage"
                        value={meme.randomImage}
                        onChange={handleChange}
                    />
                    <h2
                        className="absolute max-w-[80%] text-center left-[50%] -translate-x-2/4 text-[2em] uppercase text-white trackig-[1px] mx-0 my-[15px] px[5px] py-0 font-impact meme--text top-0">{meme.topText}
                     </h2> 
                    <h2 
                        className="absolute max-w-[80%] text-center left-[50%] -translate-x-2/4 text-[2em] uppercase text-white trackig-[1px] mx-0 my-[15px] px[5px] py-0 font-impact meme--text bottom-0">{meme.bottomText}
                    </h2>   
                </div>
        </main>
    )
}