import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram, faYoutube, faPinterest} from '@fortawesome/free-brands-svg-icons'
import {FooterSection} from './style'
function Footer() {
  return (
    <FooterSection>
        <div className='container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between'>
            <div className='social-media d-flex justify-content-center justify-content-lg-start order-lg-2'>
                <span className='social-label me-3'>Social Media: </span>
                <Link className="social-icon" to='/'><FontAwesomeIcon icon={faFacebookF}/></Link>
                <Link className="social-icon" to='/' style={{color:'#8f79ed'}}><FontAwesomeIcon icon={faTwitter}/></Link>
                <Link className="social-icon" to='/' style={{color:'#79c8ed'}}><FontAwesomeIcon icon={faInstagram}/></Link>
                <Link className="social-icon" to='/' style={{color:'#e66262'}}><FontAwesomeIcon icon={faYoutube}/></Link>
                <Link className="social-icon" to='/' style={{color:'#e66262'}}><FontAwesomeIcon icon={faPinterest}/></Link>
            </div>
            <div className='details d-flex flex-column flex-lg-row align-items-center order-lg-1'>
                <p className="footer-copyright me-2">Copyright © 2019 Molla Store. All Rights Reserved.</p>
                <ul className="footer-menu d-flex list-unstyled">
                    <li className='me-2'><Link to="/">Terms Of Use</Link> | </li>
                    <li><Link to="/">Privacy Policy</Link></li>
                </ul>  
            </div>   
        </div>
        
    </FooterSection>
  )
}

export default Footer