import { Switch, Route } from 'react-router-dom'
import Home from '../modules/home/home.module'

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default Router
