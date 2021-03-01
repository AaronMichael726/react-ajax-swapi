import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/home'
import Starship from './components/starship'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = (props) => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const fetchStarships = async() => {
            const url = "https://swapi.dev/api/starships/"
            let response = await axios.get(url)
            response = await response.data.results
            setStarships(response)
        }
        fetchStarships()
    }, [])

    console.log(starships)

    return(
        <> 
            <Router>
                <header>
                    <h1>Starships</h1>
                </header> 

                <Route exact path='/' render={(props) => <Home {...props} data={starships} />} />
                <Route exact path='/starship' render={ (props) => <Starship {...props} data={starships} />} />
            </Router>
        </>
    )
}

export default App