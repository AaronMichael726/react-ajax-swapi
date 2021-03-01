import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/home'
import Starship from './components/starship'

const App = (props) => {

    return(
        <>

            <Router>
                <Route path='/' exact component={Home} />
                <Route path='/:id' component={Starship} />
            </Router>
        </>
    )
}

export default App