import {NavLink} from 'react-router-dom';
import Search from './Search.jsx';

export default function NavBar () {
  return (
    <>
      <nav>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/home/create'}>Create your own activities</NavLink>
      </nav>
      <Search/>
    </>
  )
}
