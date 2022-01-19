import {Link} from 'react-router-dom';
import {useState} from 'react';

const Header = () => {
    const data = useState([
        {id: 1},
        {id: 2},
        {id: 3}
    ])
return (
    <>
    {data[0].map( num => 
        <Link key={num.id} to={{pathname : "/component" +num.id}}>
            Component {num.id}
        </Link>
    )} 
    </>
)
}
export default Header;