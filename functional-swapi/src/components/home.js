import { Link } from 'react-router-dom'

const Home = (props) => {

    const starshipLinks = props.data.map((i, idx) => {
        return (
            <div className='link'>
                <Link to={{
                    pathname:'/starship',
                    state: i
                }}
                key={idx}
                >
                    {i.name}
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h1>starships component</h1>
            {starshipLinks}
        </div>
    );
    }

export default Home;

