import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const App = () => {
  return(
    <>
    <Router>
      <div>
        <div>

          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
              {/* <a className="navbar-brand" href="./index.html">Home</a> */}
              <Link to='/' className= 'navbar-brand'>Home </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  {/* <a className="nav-link active" aria-current="page" href="./portfolio.html">Portfolio</a> */}
          <Link to='/portfolio' className= "nav-link active" aria-current= "page">Portfolio</Link>
          <Link to='/contact' className= "nav-link">Contact </Link>

                  {/* <a className="nav-link" href="./contact.html">Contact Me</a> */}

                </div>
              </div>
            </div>
          </nav>
        </div>
      <Switch>
        <Route exact path= '/'>
          <Home />
        </Route>
        <Route path= '/portfolio'>
          <Portfolio />
        </Route>
        <Route path = '/contact'>
          <Contact/>
        </Route>
      </Switch>
      </div>
    </Router>
    </>
  )
}
export default App