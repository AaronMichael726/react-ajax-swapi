import { useEffect, useState } from 'react'

const useFetch = (url, count) => {
    // create a state to return
    const [state, setState] = useState({ name:'', model:'', length:''})

    // use the useEffect() function -- cannot use async/await keywords un a useFetch for some reason
    useEffect(() => { 
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setState({
                    data,
                })
            })
    }, [url])

    console.log(state)
    return state
}

export default useFetch