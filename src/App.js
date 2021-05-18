import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import AppBar from './components/AppBar.js'

const App = () => {
  return(
    <>
    <Router>
      <div>
      <AppBar />
      <Switch>
        <Route exact path= '/reactportfolio'>
          <Home />
        </Route>
        <Route path= '/reactportfolio/portfolio'>
          <Portfolio />
        </Route>
        <Route path = '/reactportfolio/contact'>
          <Contact/>
        </Route>
      </Switch>
      </div>
    </Router>
    </>
  )
}
export default App