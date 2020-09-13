import React from 'react'
import logo from '../../assets/images/logo.svg'

import './styles.css'

interface LogoProps {

}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className='template' >
      <div className='logoContainer'>
        <img src={logo} alt='Logo'/>
        <p>Sua Plataforma de Estudos Online.</p>
      </div>
    </div>
  )
}

export default Logo