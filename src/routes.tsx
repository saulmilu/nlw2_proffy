import React from  'react';
import { Route, BrowserRouter, Redirect } from  'react-router-dom'
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';


const Routes = () => 
    (
        <BrowserRouter>
         <Route path='/' exact component={Landing} />
         <Route path='/study'  component={ TeacherList } />
         <Route path='/giveclass' component={TeacherForm } />
         <Route path='/404' component={()=>(<h1>Not Found</h1>)} />

        </BrowserRouter>
    )


export default Routes;