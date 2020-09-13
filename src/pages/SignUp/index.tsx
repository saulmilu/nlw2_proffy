import React, { useState, useEffect, FormEvent } from 'react'
import { 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Button, 
  InputAdornment, 
  IconButton
 } from '@material-ui/core'

import {Visibility, VisibilityOff} from '@material-ui/icons'
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo'
import useStyles from './useStyles'
import './styles.css'
import api from '../../services/api'
import backIcon from '../../assets/images/icons/back.svg'
import Concluido from '../../components/Conclusao'


const SignUp = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disable, setDisable] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isConclused, setIsConclused] = useState(false)

  const classes = useStyles()
  
  function handleNameFieldValidation (e : React.ChangeEvent<HTMLInputElement>){
    
    setName(e.target.value)
  
  }
  
  function handleLastNameFieldValidation (e : React.ChangeEvent<HTMLInputElement>){
  
    setLastName(e.target.value)
  
  }
  
  function handleEmailFieldValidation(e : React.ChangeEvent<HTMLInputElement>) {
    
    setEmail(e.target.value)

  }
  
  function handlePasswordFieldValidation(e : React.ChangeEvent<HTMLInputElement>) {
    
    setPassword(e.target.value)

  }


  function hanldeSumbmit(e : FormEvent){
    e.preventDefault()
    console.log({name, email, lastName, password})

    // api.post('/signup',{
    //   name, email, lastName, password
    // })

    setIsConclused(true)
  
  }

  function handleClickShowPassword(){
    setShowPassword(!showPassword)
  }

  function handleMouseDownPassword (event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  };

  useEffect(()=>{
  
    console.log(email, password, disable)
  
    if (email && password && name && lastName) {
  
      setDisable(false)
  
    } else {
  
      setDisable(true)
    } 
  
    console.log('after ', email, password, disable)

  },[email, password, name, lastName])

  return (
    <div id="page-signup">
      {
        isConclused 
        ? <Concluido 
            title='Cadastro Concluído'
            info='Agora você faz parte da plataforma do Proffy.
            Tenha uma ótima experiência' 
            buttonTitle='Fazer Login'
            pageDestiny='/signin'/>
        :
        ( 
          <>
            <div id="column-left">
              
              <div id="header">
                <Link to='/'>
                  <img id='backIcon' src={backIcon} alt="voltar" />
                </Link>
              </div>

              <div className="form">
                
                <div className="descricaoLogin">
                  <h1>Cadastro</h1>
                  <p>Preencha os dados abaixo para começar.</p>
                </div>
                
                <form onSubmit={hanldeSumbmit}>
                
                  <TextField 
                    onChange={handleNameFieldValidation}
                    type="name"
                    id='filled-basic' 
                    label='Nome'
                    classes={{root: classes.root}} 
                    InputLabelProps={{
                      classes:{ 
                        root: classes.label,
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

                  <TextField
                    onChange={ handleLastNameFieldValidation }
                    type="text"
                    id='filled-basic' 
                    label='Sobrenome'
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

                  <TextField
                    onChange={ handlePasswordFieldValidation }
                    type={showPassword ? 'text': 'password'}
                    id='filled-basic' 
                    label='Senha'
                    classes={{root: classes.root_3}} 
                    InputLabelProps={{
                      classes:{ 
                        root: classes.label,
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
                      },
                      endAdornment:<InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>

                    }}>
                  </TextField>
                
                  <br/>

                  <Button variant="contained" classes={{root : classes.buttonAble}} type="submit" >
                    Concluir Cadastro
                  </Button>
                  
                </form>
                
              </div>
              
            </div>
            
            <div id="column-right">
              <Logo/>
            </div>
          </>
        )

      }
      
    </div>
  )
}

export default SignUp