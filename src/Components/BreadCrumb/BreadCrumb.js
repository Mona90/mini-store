import React from 'react'
import { Link } from 'react-router-dom'
import { Section } from './style'

function BreadCrumb() {
  return (
    <Section className='mb-3'>
        <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/cart">Shop</Link></li>
            <li className="breadcrumb-item active" >Library</li>
        </ol>
  </Section>
  )
}

export default BreadCrumb