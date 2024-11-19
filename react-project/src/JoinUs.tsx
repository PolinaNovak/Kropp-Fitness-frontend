import "./JoinUs.css"

function JoinUs(){
    return(
        <div>
            <section className="joinUs">
                <div className="joinUsVideoWrapper">
                    <video className="joinUsVideo"
                    src=""
                    width="960"
                    height="600"
                    poster="./joinUs/poster.png">
                    </video>
                    <button type="button" 
                    className="joinUsVideoButton">
                        Play
                    </button>
                </div>
                <div className="joinUsBody container">
                    <h2 className="joinUsBodyTitle">Join us</h2>
                    <form className="joinUsForm">
                        <header className="joinUsFormHeader">
                            <h3 className="joinUsFormHeaderTitle 
                            titleBig
                            backdropTitle centered"
                            data-title="Go!">
                                Start here
                            </h3>
                            <div className="joinUsFormSubtitle 
                            sectionDescription">
                                Fill the form below to start your journey
                            </div>
                        </header>
                        <div className="joinUsFormBody">

                            <label className="visually-hidden" 
                            htmlFor="username">Name</label>
                            <input className="joinUsFormInput input"
                            id="username"
                            placeholder="Name">
                            </input>

                            <label className="visually-hidden" 
                            htmlFor="username">Email</label>
                            <input className="joinUsFormInput input"
                            id="username"
                            placeholder="Email"
                            type="email">
                            </input>

                            <button className="joinUsFormButton 
                            button transparent" 
                            type="submit">
                            Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default JoinUs;