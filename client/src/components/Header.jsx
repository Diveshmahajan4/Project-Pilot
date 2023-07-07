import React from 'react'
import logo from "./assets/projectmgmtlogo.png"

const Header = () => {
  return (
    <div>
        <nav className='navbar bg-dark mb-4 p-0'>
            <div className='container'>
                <a className='navbar-brand' href='/'>
                    <div className='d-flex'>
                        
                            <img src={logo} alt="logo" className='logo mr-2' />    
                        
                        <div>Project Pilot</div>   
                    </div>
                </a>
            </div>
            
        </nav>
    </div>
  )
}

export default Header