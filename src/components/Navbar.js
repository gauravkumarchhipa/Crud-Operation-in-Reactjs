import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Home /API
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/home/fetchapi">FetchApi</Link>
          <Link className="dropdown-item" to="/home/axiosapi">AxiosApi</Link>
          <Link className="dropdown-item" to="/home/form">Form</Link>
          <Link className="dropdown-item" to="/home/array1">Array1</Link>
        </div>
      </li>
   
      <li className="nav-item">
        <Link className="nav-link" to="/calculator">Calculator</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/snapshort">SnapShort</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/weather">Weather</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/emojisearch">Emojis Search</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contactus">ContactUs</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    </div>
  )
}

export default Navbar