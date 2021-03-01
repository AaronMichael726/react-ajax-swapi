import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const fetchStarships = async() => {
            const url = "https://swapi.dev/api/starships/"
            const response = await axios.get(url)
            const data = await response.data.results
            setStarships(data)
        }
        fetchStarships()
    }, [])

    console.log(starships)

    // const starshipArray = starships.map((i, idx) => {
    //     return <button key={idx}>{i.name}</button>
    // })

    return (
        <div>
            <h1>star wars ships</h1>
            {starships.map((i, idx) => (
                <Link 
                    key={idx} 
                    to={`/${idx}`}
                    ><button type="button">{i.name}</button>
                </Link> 
            ))}
        </div>
    );
    }

export default Home;

