import { NavLink } from 'react-router-dom'

// Styles
import './Navbar.css'

// Components
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
          <NavLink to="/" className="brand"><h1>CoockBook</h1></NavLink>
          <Searchbar />
          <NavLink to="/create">Create Recipe</NavLink>
          {/* <NavLink to="/search">Search Recipe</NavLink> */}
        </nav>
    </div>
  )
}
