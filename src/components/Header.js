import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import openMenu from '../images/shared/mobile/menu.svg';
import closeMenu from '../images/shared/mobile/close.svg';


function menu(){
    document.querySelector('.open').classList.add('active')
    document.querySelector('.close').classList.remove('active')
    document.querySelector('.mob-nav-con').classList.remove('active')
}
function close(){
    document.querySelector('.open').classList.remove('active')
    document.querySelector('.close').classList.add('active')
    document.querySelector('.mob-nav-con').classList.add('active')
}
function Header() {
    
  return (
    <>
    <header className='header'>
       <div className='header-wrapper'>
       <div className='logo'>
       <Link to="/"><img src={logo} alt="Photosnap-logo"/></Link>
        </div>
        <div className='nav-bar'>
            <nav>
                <ul>
                    <li><Link to='/stories'>Stories</Link></li>
                    <li><Link to='/features'>Features</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                </ul>
            </nav>
        </div>
        <div className='invite-btn'>
            <button>get an invite</button>
        </div>
       </div>
       <div className='mobile-nav'>
       <Link to="/"><img src={logo} alt="Photosnap-logo"/></Link>

       <div className='mob-nav-con active'>
            <nav>
                <ul>
                    <li><Link to='/stories'>Stories</Link></li>
                    <li><Link to='/features'>Features</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                </ul>
            </nav>
           <div className='line'></div>
            <button className='invite-btn'>get an invite</button>
        </div>
        <img className='open' src={openMenu} alt="Photosnap-logo" onClick={menu}/>
        <img className='close active' src={closeMenu} alt="Photosnap-logo" onClick={close}/>
       </div>
    </header>
    </>
  )
}

export default Header