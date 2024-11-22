import './Calculate.css'


function Calculate(){
    return(
        <div>
            <section className='calculate'>
                <div className='calculateInner 
                container'>
                    <div className='calculateBody'>
                        <h2 className='calculateTitle titleMedium
                         backdropTitle'
                         data-title="BMI">
                            Input your BMI
                        </h2>

                        <div className='calculateDescription'>
                            <p>
                            Duo graece ponderum ne, ei mel aliquando. 
                            Pro te tamquam nonumes, nam no nemore epicurei
                            </p>
                        </div>

                        <form className='calculateForm'>
                            <div className='calculateFormBody'>
                                <label className="visually-hidden" 
                                htmlFor="height">Height</label>
                                <input className="calculateInput input"
                                id="height"
                                type="number"
                                placeholder="Height / cm">
                                </input>

                                <label className="visually-hidden" 
                                    htmlFor="weight">Weight</label>
                                <input className="calculateInput input"
                                id="weight"
                                type="number"
                                placeholder="Weight / kg">
                                </input>

                                <label className="visually-hidden" 
                                    htmlFor="age">Age</label>
                                <input className="calculateInput input"
                                id="age"
                                type="number"
                                placeholder="Age">
                                </input>

                                <label className="visually-hidden" 
                                    htmlFor="gender">Gender</label>
                                <select className="calculateInput input" id="gender"
                                required>
                                    <option value="" disabled 
                                    selected>Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>

                                <label className="visually-hidden" 
                                    htmlFor="activityFactor">ActivityFactor</label>
                                <select className="calculateInput input wide" 
                                id="activityFactor" required>
                                    <option value="" disabled 
                                    selected>Select an activity factor</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <button className='calculateButton button
                             transparent' type="submit">
                                Calculate
                             </button>
                        </form>
                    </div>
                    <div className='calculateTableWrapper'>
                        <table className='calculateTable'>
                            <thead>
                                <tr>
                                    <th>BMI</th>
                                    <th>Weight status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Below 18.5</td>
                                    <td>Underweight</td>
                                </tr>
                                <tr>
                                    <td>18.5 - 24.9</td>
                                    <td>Healthy</td>
                                </tr>
                                <tr>
                                    <td>25.0 - 29.9</td>
                                    <td>Overweight</td>
                                </tr>
                                <tr>
                                    <td>30.0 - and Above</td>
                                    <td>Obese</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={2}><b>BMR</b>  Metabolic Rate / 
                                        <b>BMI</b>  Body Mass Index
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calculate;