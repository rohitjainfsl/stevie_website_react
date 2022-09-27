import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';

function TopHeader() {
  return (
    <div className="py-3 phone">
      <div className='container'>
        <p className='mb-0'><PhoneIcon /> <span>+91-882 445 3320</span></p>
      </div>
    </div>
  )
}

export default TopHeader