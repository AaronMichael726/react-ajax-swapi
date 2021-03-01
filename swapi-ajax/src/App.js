import React from 'react'

export default class FetchStarships extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loading: true,
            starships: []
        }
    }
    
    async componentDidMount() {
        const url = "https://swapi.dev/api/starships/"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ starships: data.results, loading: false})
    }

    

    render(){
        if(this.state.loading){
            return <div>loading...</div>
        }

        if (!this.state.starships.length){
            return <div>didn't get a starship</div>
        }

        console.log(this.state.starships[0].name)
        console.log(typeof this.state.starships)

        return(
            <>
                <header>star wars starships</header>
                {this.state.starships.map((i, idx) => (
                    <button key={idx}>{i.name}</button>
                ))}
            </>
        )
    }

}