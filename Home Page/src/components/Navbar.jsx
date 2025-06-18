

function Navbar() {
  return (
    <nav className="container">
         <div className="logo">
            <img src="./src/images/brand_logo.png"  alt="Logo" />
         </div>
         <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
         </ul>
         <button>Login</button>
      </nav>
  )
}

export default Navbar