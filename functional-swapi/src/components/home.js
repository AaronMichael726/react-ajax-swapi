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
        <div className="links">
            {starshipLinks.length ? starshipLinks: <p>Loading...</p>}
        </div>
    );
    }

export default Home;

