import "./Location.css";

function Location(){
    return(
        <div>
            <section className="location containerWide">
                <img className="locationMapImage"
                src="./location/map.png"
                height="600"
                width="960"
                alt="Branches on the map"
                loading="lazy"/>

                <div className="locationBody">
                    <h2 className="locationTitle 
                    titleMedium backdropTitle centered" 
                    data-title="Look">
                        Find us near you</h2>

                    <div className="locationDescription">
                        <p>Nec suas signiferumque id. An eum labore commodo 
                            principes. Usu diam noluisse cu, nam adipisci
                        </p>
                    </div>
                    <a className="locationButton transparent button">
                        View more
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Location;