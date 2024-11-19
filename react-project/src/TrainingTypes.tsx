import "./TrainingTypes.css"

function TrainingTypes(){
    return(
        <div>
            <section className="trainingTypes containerWide">
                <h2 className="visually-hidden">Training Types</h2>
                <ul className="trainingTypesList">
                    <li className="trainingTypesItem">
                        <img
                        src="./trainingTypes/image_1.svg"
                        alt=""
                        width="150"
                        height="140"
                        loading="lazy"
                        />
                        <h3 className="trainingTypesItemTitle"
                        >Maxpump</h3>
                    </li>
                    <li className="trainingTypesItem">
                        <img
                        src="./trainingTypes/image_2.svg"
                        alt=""
                        width="150"
                        height="140"
                        loading="lazy"
                        />
                        <h3 className="trainingTypesItemTitle"
                        >Aron gym</h3>
                    </li>
                    <li className="trainingTypesItem">
                        <img
                        src="./trainingTypes/image_3.svg"
                        alt=""
                        width="150"
                        height="140"
                        loading="lazy"
                        />
                        <h3 className="trainingTypesItemTitle"
                        >Fit & tone</h3>
                    </li>
                    <li className="trainingTypesItem">
                        <img
                        src="./trainingTypes/image_4.svg"
                        alt=""
                        width="150"
                        height="140"
                        loading="lazy"
                        />
                        <h3 className="trainingTypesItemTitle"
                        >Forza</h3>
                    </li>
                    <li className="trainingTypesItem">
                        <img
                        src="./trainingTypes/image_5.svg"
                        alt=""
                        width="150"
                        height="140"
                        loading="lazy"
                        />
                        <h3 className="trainingTypesItemTitle"
                        >Balance fitness</h3>
                    </li>
                    <li className="trainingTypesItem">
                        <img
                        src="./trainingTypes/image_6.svg"
                        alt=""
                        width="150"
                        height="140"
                        loading="lazy"
                        />
                        <h3 className="trainingTypesItemTitle"
                        >Body sculpt</h3>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default TrainingTypes;