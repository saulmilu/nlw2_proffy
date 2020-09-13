import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Remember from './pages/Remember';
import Profile from './pages/Profile';
import isAutenticated from './services/auth';

//@ts-ignore
const ProtectRoute = ({component : Component, ...rest}) => 
  (
    <Route {...rest} render={(props)=> (
      isAutenticated() 
      ?
      (<Component {...props}/>)
      :
      (<Redirect to={{pathname:'/signin', state:{from : props.location} }}/>)
    )}/>

  )


const Routes = () =>
  (
    <BrowserRouter>
      <Switch>
        <Route path='/signin' exact component={SignIn} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/remember' exact component={Remember} />
        <ProtectRoute path='/' exact component={Landing} />
        <ProtectRoute path='/profile' exact component={Profile} />
        <ProtectRoute path='/study' exact component={TeacherList} />
        <ProtectRoute path='/giveclass' exact component={TeacherForm} />
        <ProtectRoute path='*' component={() => (<h1>Not Found</h1>)} />

      </Switch>

    </BrowserRouter>
  )


export default Routes;