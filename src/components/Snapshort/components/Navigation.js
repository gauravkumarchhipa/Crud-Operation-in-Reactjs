import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <nav className='main-nav'>
        <ul>
          <li><Link to="/snapshort/mountain">Mountain</Link></li>
          <li><Link to="/snapshort/beaches">Beaches</Link></li>
          <li><Link to="/snapshort/birds">Birds</Link></li>
          <li><Link to="/snapshort/food">Food</Link></li>

        </ul>
      </nav>
    </>
  )
}

export default Navigation