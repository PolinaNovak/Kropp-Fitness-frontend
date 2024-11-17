import "./MainComponent.css"

function MainComponent(){
  return(
    <div>
      <h1 className="visually-hidden">Kropp Fitness Club</h1>
      <section className="banner">
        <h2 className="visually-hidden">Upcoming Events</h2>
        <div className="banner-body">
          <div className="banner-info">
            New event<br/>
            coming up / <time dateTime="06-07">&nbsp;june 7</time>
            &nbsp;-&nbsp;<time dateTime="06-13">13</time>
          </div>
          <h3 className="banner-title">Crossfit</h3>
        </div>
        <div className="banner-pagination">
          <ul className="banner-pagination-list">
            <li className="banner-pagination-item">
              <button className="banner-pagination-button" 
              type="button"></button>
            </li>
            <li className="banner-pagination-item">
              <button className="banner-pagination-button" 
              type="button"></button>
            </li>
            <li className="banner-pagination-item">
              <button className="banner-pagination-button is-current" 
              type="button"></button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default MainComponent;

