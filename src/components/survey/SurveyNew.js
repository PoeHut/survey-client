// survey new is to show survey form and survey review
import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

const SurveyNew = () => {

    const [showFormReview, setShowFormReview] = useState(false)
    
    return (
        <div>
            {
                showFormReview
                ?
                    <SurveyFormReview 
                        onCancle = { () => setShowFormReview(false) }
                    />
                :
                    <SurveyForm 
                        handleFormSubmit = { () => setShowFormReview(true) }
                    />
            }
            
        </div>
    )
}

export default reduxForm({
    // delete form value when user click cancle button
    form: "surveyForm"
})(SurveyNew)
