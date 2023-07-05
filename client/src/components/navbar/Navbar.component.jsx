import './navbar.styles.css'
import Filter from '../filter/Filter.component';
import { Link } from 'react-router-dom';
import SearchBar from '../search/Searchbar.component';


function Navbar() {

  return (
<div>
    <div className="home-container">

    <Filter />

<div className='navbar-container'>


<div className='social-media'></div>

      <div className="navbar-element">
      <SearchBar/>
      </div>

      <div className='navbar-element'>
        <button className='link-class'>
          <Link to="/home" className='link'>Home</Link>
        </button>
      </div>

      <div className="navbar-element">
        <button className='link-class'>
          <Link to="/create" className='link'>Create</Link>
        </button>
      </div>

      {/* <div className="navbar-element">
        <button className='link-class'>
          <Link to="/about" className='link'>About</Link>
        </button>
      </div> */}
      
      <div className="navbar-element">
        <button className='link-class'>
          <Link to="/" className='link'>Logout</Link>
        </button>
      </div>


      <div className='right'></div>
    </div>

    </div>

    <div className='empty-box'></div>
    </div>
  );
}

export default Navbar;