import "./Motivation.css"

function Motivation(){
    return(
        <div>
            <section className="motivation">
                <h2 className="visually-hidden">Motivation</h2>
                <ul className="motivationList">
                    <li className="motivationItem">
                        <div className="motivationCard container">
                            <div className="motivationCardBody">
                                <h3 className="motivationCardTitle backdropTitle 
                                titleMedium"
                                data-title="Strong">
                                Be you, just stronger! <br/>
                                Power is in you
                                </h3>
                                <div className="motivationCardDescription">
                                    <p>
                                    Unum solum justo ex ius. 
                                    Pro cu probo laboramus eius 
                                    insolens euripidis te eos, 
                                    ut agam tota.
                                    </p>
                                </div>
                                <a className="motivationCardButton button transparent">
                                    View more
                                </a>
                            </div>
                            <img className="motivationCardImage" 
                            src="./motivation/image_1.png"
                            alt="A man pulling himself on a horizontal bar"
                            width="518"
                            height="760"
                            loading="lazy"
                            />
                        </div>
                    </li>
                    <li className="motivationItem">
                        <div className="motivationCard container">
                            <div className="motivationCardBody">
                                <h3 className="motivationCardTitle backdropTitle 
                                titleMedium"
                                data-title="Start">
                                Today is the best <br/>
                                day to start!
                                </h3>
                                <div className="motivationCardDescription">
                                    <p>
                                    Sed abhorreant constituam consectetuer 
                                    eu. At mei clita deserunt, 
                                    his movet molestie nemore.
                                    </p>
                                </div>
                                <a className="motivationCardButton button transparent">
                                    View more
                                </a>
                            </div>
                            <img className="motivationCardImage" 
                            src="./motivation/image_2.png"
                            alt="A man with dumbbels"
                            width="518"
                            height="760"
                            loading="lazy"
                            />
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Motivation;