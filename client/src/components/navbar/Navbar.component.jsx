import './navbar.styles.css'
function Navbar() {

  return (
    <div className="navbar-container">

      <div className='social-media'></div>
      <div className="navbar-element">
        <p className='link-class'>Home</p>
      </div>
      <div className="navbar-element">
        <p className='link-class'>Create</p>
      </div>
      <div className="navbar-element">
        <p className='link-class'>About</p>
      </div>
      <div className="navbar-element">
        <p className='link-class'>Logout</p>
      </div>

      <div className='right'></div>
    </div>
  );
}

export default Navbar;