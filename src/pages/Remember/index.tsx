import React, { useState, useEffect } from 'react'
import Logo from '../../components/Logo'
import { TextField, Button, InputAdornment, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'
import useStyles from './useStyles'
import Concluido from '../../components/Conclusao'

const Remember = () => {
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [disable, setDisable] = useState(true)
  const [isConclused, setIsConclused] = useState(false)

  function handleEmailFieldValidation(e : React.ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    setEmail(e.target.value)
  }

  function handleSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    //after submit
    setIsConclused(true)
  }

  useEffect(()=> {
    console.log('email => ', email)
    email === '' ? setDisable(true): setDisable(false)
  },[email])

  return (

    <div id="page-remember">

      {
        isConclused 
        ? <Concluido 
            title='Redefinição Enviada'
            info='Boa, agora é só checar o e-mail que foi enviado para você, redefinir sua senha e aproveitar seus estudos.' 
            buttonTitle='Voltar ao login'
            pageDestiny='/signin'/>
        :

        (<>
          <div id="left">
            <div id="header">
              <Link to='/'> 
                <img id='backIcon' src={backIcon} alt="voltar" />
              </Link>
            </div>

            <div className="form">
              
              
              <div className="descricaoRemember">
                <h1>Eita, esqueceu sua senha?</h1>
                <p>Não esquenta, vamos dar um jeito nisso.</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                        
                <TextField
                  onChange={ handleEmailFieldValidation }
                  type="email"
                  id='filled-basic' 
                  label='E-mail'
                  classes={{root: classes.root_2}} 
                  InputLabelProps={{
                    classes:{ 
                      root: classes.label_2,
                      animated : classes.animate,
                      focused : classes.animate,
                      filled: classes.animate,
                      outlined : classes.animate
                    } 
                  }}
                  InputProps={{ 
                    disableUnderline: true, 
                    classes: { 
                      root: classes.input
                    }
                  }}>
                </TextField>

              
                <br/>

                <Button variant="contained" classes={{root : classes.buttonAble}} type="submit" disabled={disable}>
                  Concluir Cadastro
                </Button>
                
              </form>
              
            </div>
          </div>
          <div id="right">
            <Logo/>
          </div>
        </>)
      }


    </div>
  )
}

export default Remember