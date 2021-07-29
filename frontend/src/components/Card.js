import { Link } from 'react-router-dom';

function Card({ park }) {
    const { name, image_url } = park


    return (
        <div>
            <img src={image_url} alt={name} />
            <h4>{name}</h4>
            <Link to={`/parks/${name}`}><button>View Hikes</button></Link>
        </div>
    )
}

export default Card;