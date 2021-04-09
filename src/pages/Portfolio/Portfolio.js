import './Portfolio.css'
import boardomfighter from './assets/boardomfighter.png'
import stonkStalks from './assets/stonkStalks.png'

const Portfolio = () =>{
  return(
    <>
      <div className="row center">
        <div id="myCarousel" className="carousel slide caro col-6 carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
              aria-label="Slide 1"></li>
            <li type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          </ol>
          <div className="carousel-inner caro1">
            <div className="carousel-item active">
              <a href="https://limitless-fortress-65893.herokuapp.com/">
                <img src={stonkStalks} className="d-block w-100 overlayImage" alt="stonkstalks" /></a>
                <div className="container slideText">
                  <h1>Stonk Stalks</h1>
                  <p>This fun app allows users to post turnip-trading events for the nintendo game Animal Crossing. Users can
              create accounts and post and join events. Click on the image to visit the page.</p>

                </div>
        </div>
              <div className="carousel-item">
                <a href="https://djlongarms.github.io/Board-Game-Collection/">
                  <img src={boardomfighter} className="d-block w-100 overlayImage" alt="boardomfighter" /></a>
                  <div className="container slideText ">
                    <h1>Boardom Fighters</h1>
                    <p>This app allows user to search a database for any boardgame they can think of! The search result listing
                    allow the user to save to wishlist and favorites. A live amazon link is also viewable in the expanded search
                    entry. Click on the image to visit the page.
            </p>

                  </div>
        </div>
              </div>
              <a href="#myCarousel" className="carousel-control-prev" role="button" data-bs-slide="prev" type="button">
                <span className="sr-only"></span>
                <span className="carousel-control-prev-icon" aria-hidden="false"></span>
              </a>
              <a href="#myCarousel" className="carousel-control-next" role="button" data-bs-slide="next" type="button">
                <span className="sr-only"></span>
                <span className="carousel-control-next-icon" aria-hidden="false"></span>
              </a>
            </div>
          </div>
    </>

  )
}
export default Portfolio