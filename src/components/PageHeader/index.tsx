import React from 'react'
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface PageHeaderProps {
  title: string,
  description?: string,
  align?: string,
  logo?: string,
  icon?: string,
  iconDescription?: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to='/'>
          <img src={backIcon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>
      <div className={` ${props.align ? 'header-content-center app' : 'header-content'}`}>
        {
          props.logo ? (<img src={props.logo} />) : null
        }
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}
        {props.children}
        {
          props.icon
            ?
            (
              <>
                <img src={props.icon} />
                <p>{props.iconDescription}</p>
              </>
            )
            :null
        }
      </div>


    </header>
  )
}

export default PageHeader;