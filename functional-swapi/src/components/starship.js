import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Starship = ({ match }) => {

    const [ship, setShips] = useState()

    useEffect(() => {
        const fetchStarships = async () => {
            const url = "https://swapi.dev/api/starships/"
            const response = await axios.get(url)
            const data = await response.data.results
            setShips(data)
        }
        fetchStarships()
    }, [])

    const id = req.params.id

    console.log(ship[id])
    console.log(match.params.id)

    

    return (
        <>

            <div>
                <h1>{ship[id].name}</h1>
                <h1>{ship[id].model}</h1>
                <Link to={'/'}>Return</Link>
            </div>

        </>

    )
    

}

export default Starship