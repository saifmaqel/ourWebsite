import React from 'react'
import Box from './Box'

export type CareerType = {
  id: number
  title: string
}

const data: CareerType[] = [
  { id: 1, title: 'Web Developer' },
  { id: 2, title: 'Ios Developer' },
  { id: 3, title: 'Android Developer' },
  { id: 4, title: 'Data Analyst' },
  { id: 5, title: 'Data Engineer' },
  { id: 6, title: 'Data Siencetest' },
]
function Careers() {
  return (
    <div className='careers'>
      <h2 className='main-title'>Careers</h2>
      <div className='container'>
        {data.map((career) => {
          return <Box key={career.id} career={career} />
        })}
      </div>
    </div>
  )
}

export default Careers
