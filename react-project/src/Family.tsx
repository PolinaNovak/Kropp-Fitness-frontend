import "./Family.css"

function Family(){
    return(
        <div>
            <section className="family">
                <div className="familyHeader container">
                    <h2 className="familyTitle titleBig 
                    backdropTitle centered" data-title="Part">
                        Be a part of our fit family
                    </h2>

                    <div className="familyDescription
                    sectionDescription">
                        <p>
                        Training helps you think and feel better. 
                        Join us!
                        </p>
                    </div>
                </div>
                <div className="familyBody containerWide">
                    <img className="familyImage"
                    src="./family/image_1.png"
                    alt="Training people"
                    width="414"
                    height="479"
                    loading="lazy"
                    />
                    <img className="familyImage"
                    src="./family/image_2.png"
                    alt="Training people"
                    width="744"
                    height="479"
                    loading="lazy"
                    />
                    <img className="familyImage"
                    src="./family/image_3.png"
                    alt="Training people"
                    width="396"
                    height="479"
                    loading="lazy"
                    />
                    <img className="familyImage"
                    src="./family/image_4.png"
                    alt="Training people"
                    width="396"
                    height="479"
                    loading="lazy"
                    />
                    <img className="familyImage"
                    src="./family/image_1.png"
                    alt="Training people"
                    width="414"
                    height="479"
                    loading="lazy"
                    />
                </div>
            </section>
        </div>
    )
}

export default Family;