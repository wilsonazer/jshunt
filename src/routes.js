import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main'
import Product from './pages/Product'
 
const Routes = () => (
   <BrowserRouter>
      <Switch>
          <Route path='/' exact component={ Main }/>
          <Route path='/products/:id' exact component={ Product }/>
      </Switch>
   </BrowserRouter>

)

export default Routes