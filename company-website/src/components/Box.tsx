import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComments,
  faUser,
  faBuilding,
  faCheckCircle,
  faClipboard,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'
import { CareerType } from './Careers'
type PropsType = {
  career: CareerType
}

function Box({ career }: PropsType) {
  return (
    <div className='box'>
      <div className='content'>
        <h3>{career.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quos
          eius expedita amet quam distinctio et{' '}
        </p>
      </div>
      <div className='info'>
        <a href='' className='read-more'>
          Read More
        </a>
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </div>
    </div>
  )
}

export default Box
