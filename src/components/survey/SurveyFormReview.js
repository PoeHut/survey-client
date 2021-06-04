import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import formFields from './formFields'
import { submitSurvey } from '../../actions'

const SurveyFormReview = ({onCancle}) => {

    const { surveyForm } = useSelector(state => state.form)
    const dispatch = useDispatch()
    const history = useHistory();

    const goToSurvey = () => {
        history.push('/survey');
    }

    return (
        <div>
            <h3>Please confirm your entries</h3>

            <div style={{marginBlock: 5}}>
            {
                formFields.map(({label, name}) => {
                    return (
                        <div key={name}>
                            <label>{label}</label>
                            <div>{surveyForm.values[name]}</div>
                        </div>
                    )
                })
            }
            </div>

            <button
                className="yellow darken-3 btn-flat white-text"
                type="button" 
                onClick={onCancle}
            >Back</button>

            <button 
                className="green btn-flat right white-text"
                type="button"
                onClick={ () => dispatch(submitSurvey(surveyForm.values, goToSurvey)) }
            >
                Send Survey <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

export default SurveyFormReview
