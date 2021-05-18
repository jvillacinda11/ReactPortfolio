import { Link } from 'react-router-dom'

const AppBar = () => {
return(
  <div>

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="./index.html">Home</a> */}
        <Link to='/reactportfolio' className='navbar-brand'>Home </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <Link to='/reactportfolio/portfolio' className="nav-link active" aria-current="page">Portfolio</Link>
            <Link to='/reactportfolio/contact' className="nav-link">Contact </Link>



          </div>
        </div>
      </div>
    </nav>
  </div>
)
}
export default AppBar