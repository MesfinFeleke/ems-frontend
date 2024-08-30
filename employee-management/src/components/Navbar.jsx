import React from 'react'

function Navbar() {

  return (
    <div>
      <nav className="display: flex navbar navbar-light bg-dark">
      <div className="container-fluid">
       <a className="navbar-brand text-white">Navbar</a>
       <form className="d-flex">
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    
    </div>
  )
}

export default Navbar

 