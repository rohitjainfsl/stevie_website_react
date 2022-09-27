import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='hero'>
      <h1 className='title'>SITE TITLE</h1>
      <Link className='link'>View Portfolio</Link>
    </section>
  )
}

export default Hero