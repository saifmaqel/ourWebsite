import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComments,
  faUser,
  faBuilding,
  faCheckCircle,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons'
function MegaMenu() {
  return (
    <div className='mega-menu'>
      <ul className='links'>
        <li>
          <Link to='/other-links/testimonials' className='e-link'>
            <FontAwesomeIcon icon={faComments} className='e-font' />{' '}
            <h5>Testimonials</h5>
          </Link>
        </li>
        <li>
          <Link to='/other-links/team-members' className='e-link'>
            <FontAwesomeIcon icon={faUser} /> <h5>Team Members</h5>
          </Link>
        </li>
        <li>
          <Link to='/other-links/services' className='e-link'>
            <FontAwesomeIcon icon={faBuilding} className='font-awesome' />{' '}
            <h5>Services</h5>
          </Link>
        </li>
        <li>
          <Link to='/other-links/our-skills' className='e-link'>
            <FontAwesomeIcon icon={faCheckCircle} /> <h5>Our Skills</h5>
          </Link>
        </li>
        <li>
          <Link to='/other-links/how-it-works' className='e-link'>
            <FontAwesomeIcon icon={faClipboard} /> <h5>How It Works</h5>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MegaMenu
