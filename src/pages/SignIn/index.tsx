import React, { useState, useEffect } from  'react'
import { Link } from 'react-router-dom'
import {TextField, FormControlLabel, Checkbox, Button} from '@material-ui/core'
import Logo from '../../components/Logo'

import heart from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import useStyles from './useStyles'

const SignIn : React.FC = ()=> {

  const [checked , setChecked] = useState(false)
  const [email , setEmail] = useState(false)
  const [password , setPassword] = useState(false)
  const [disable , setDisable] = useState(false)

  const classes = useStyles()


  function hanldeSumbmit(){

  }

  function handleChangeChecked(e : React.ChangeEvent<HTMLInputElement>){
    setChecked(e.target.checked)
  }

  function handleEmailFieldValidation(e : React.ChangeEvent<HTMLInputElement>) {
    if(e.target.value != ''){
      setEmail(true)
    }else {
      setEmail(false)
    }
    email && password ? setDisable(false) : setDisable(true)
  }

  function handlePasswordFieldValidation(e : React.ChangeEvent<HTMLInputElement>) {
    if(e.target.value != ''){
      setPassword(true)
    }else {
      setPassword(false)
    }

  }

  useEffect(()=>{
    console.log(email, password, disable)
    if (email && password) {
      setDisable(false)
    } else {
      setDisable(true)
    } 
    console.log('after ', email, password, disable)

  },[email, password])

  return(
    <div id="page-signin">
      <div className="column-left">
        <Logo/>
      </div>
      <div className="column-right">
        <div id="header"></div>
        <div className="form">
          <div className="descricaoLogin">
            <h1>Fazer Login</h1>
          </div>
          <form onSubmit={hanldeSumbmit}>
            <TextField 
              onChange={handleEmailFieldValidation}
              type="email"
              id='filled-basic' 
              label='Email'
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
              onChange={ handlePasswordFieldValidation }
              type="password"
              id='filled-basic' 
              label='Password'
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
            <div className='groupCheckboxLink'>
              <div className='groupCheckbox'>
                {/* <label>
                  <input id='checkbox' type="checkbox"/>
                  Lembrar-me
                </label> */}
                <FormControlLabel
                  control={<Checkbox 
                    color="default"
                    classes={{root: classes.rootC, checked : classes.checked}} 
                    checked={checked} 
                    onChange={handleChangeChecked} 
                    name="checked" 
                    // inputProps={{width : '100px', height : '100px',}}
                    size='medium'
                  />}
                  classes={{label : classes.controlLabel}}
                  label="Lembrar-me"
                />
              </div>
              <Link id='link' to='/remember'>
                Esqueci minha senha
              </Link>
            </div>
            <Button variant="contained" classes={{root : classes.buttonAble, disabled : classes.buttonDisable}} disabled={disable}>
              Entrar
            </Button>
            
          </form>
        </div>
        
        <div id='footer'>
            <div id='linkCadastro'>
              Não tem conta?
              <br/>
              <Link to={'/signup'}>
                Cadastre-se
              </Link>
            </div>
            <p>É de graça <img src={heart}/></p>
        </div>

      </div>

    </div>
  )
}

export default SignIn


