import React from 'react'
import { Link } from 'react-router-dom'
import logo from'../images/shared/desktop/footer-logo.svg'
import arrow from'../images/shared/desktop/arrow.svg'
import facebook from'../images/shared/desktop/facebook.svg'
import instagram from'../images/shared/desktop/instagram.svg'
import pinterest from'../images/shared/desktop/pinterest.svg'
import twitter from'../images/shared/desktop/twitter.svg'
import youtube from'../images/shared/desktop/youtube.svg'
function Footer() {
  return (
   <>
    <footer>
        <div className='footer-wrapper'>
        <div className='logo-icon'>
        <div className='logo-nav'>
           <Link to="/"> <img className='logo' src={logo} /></Link>
            <nav>
                <ul>
                    <li><Link className='footer-n' to='/'>HOME</Link></li>
                    <li><Link className='footer-n' to='/stories'>Stories</Link></li>
                    <li><Link className='footer-n' to='/features'>Features</Link></li>
                    <li><Link className='footer-n' to='/pricing'>Pricing</Link></li>
                </ul>
            </nav>
        </div>
        <div className='icons'>
            <img src={facebook} />
            <img src={youtube} />
            <img src={twitter} />
            <img src={pinterest} />
            <img src={instagram} />
        </div>
        </div>
        <div className='btn-copyright'>
                <button>
                    <p>get an invite</p>
                    <img src={arrow} alt="Photosnap-logo"/>
                </button>
                <span>Copyright 2021. All Rights Reserved</span>
        </div>
        </div>

    </footer>
   </>
  )
}

export default Footer