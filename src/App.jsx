import { useState, useEffect } from 'react'
import axios from "axios"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios("https://express-three-teal.vercel.app/")
            .then(({data}) => setData(data.users))
            .catch((err) => alert(err))
    }, [])
    console.log(data)
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                {data.map((i) => (
                    <div key={i.id}>
                        <p>{i.id}</p>
                        <h1 className="title">{i.name}</h1>
                        <p className="subtitle">{i.password}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default App
