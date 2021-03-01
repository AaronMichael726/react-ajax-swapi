import React from 'react'
import { Link } from 'react-router-dom'

const Starship = ({ location }) => {
    console.log(location.state.name)

    return(
        <>
            <p>Name: {location.state.name}</p>
            <p>Model: {location.state.model}</p>
            <Link to='/'>Return</Link>
        </>
    )
}

export default Starship