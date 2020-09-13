import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import logo from '../../assets/images/logo.svg'
import landing from '../../assets/images/landing.svg'
import studyIcon from  '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import { Link } from 'react-router-dom'


const Landing = ()=>{

  const [connections, setConnections]  = useState(0);

  useEffect(()=> {
    api.get('/connections').then(resp => {
      const { total } = resp.data
      setConnections(total)
    })
  },[])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className='logo-container'>
                    <img src={logo} alt="Proffy"/>
                    <h2>Sua Plataforma de Estudos Online.</h2>
                </div>
                <img 
                    src={landing} 
                    alt="Plataforma de Estudos" 
                    className="hero-image"
                />                                                
                <div className="buttons-container">
                    <Link to="/study" className='study'>
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/giveclass" className='give-classes'>
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar Aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {connections} conexões já realizadas. <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing