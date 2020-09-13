import React from  'react'
import success from '../../../src/assets/images/success-background.svg'
import successCheckIcon from '../../../src/assets/images/icons/success-check-icon.svg'

import './styles.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface PropsConcluido{
  title: string,
  info : string,
  buttonTitle : string,
  buttonProps? : Record<any,string>,
  pageDestiny? : string
}

const Concluido : React.FC<PropsConcluido> = (
  {
    title, 
    info, 
    buttonTitle,
    buttonProps, 
    pageDestiny
  }) => {

  // function navigateToPage(){
  //   pageDestiny ? na
  // }

  return (
    <div id='containerConclusion'>
      <img src={successCheckIcon} alt="Caixa checada"/>
      <h2>{title}</h2>
      <p>
        {info}
      </p>
      <div id='button'> 
        <Link to={pageDestiny? pageDestiny : '/'}>
          {buttonTitle}
        </Link>
      </div>
    </div>
  )
}

export default Concluido