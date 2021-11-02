import {Link} from 'react-router-dom';

export default function Country ({id,name,flag,continent}) {
  return (
    <Link to={`/home/detail/${id}`}>
      <img src={flag} alt=' '/>
      <h1>{name}</h1>
      <h3>{continent}</h3>
    </Link>
  )
}
