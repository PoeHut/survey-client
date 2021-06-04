import React from 'react'

const SurveyField = ({input, type, label, meta: { touched, error } }) => {
    
    return (
        <div>
            <label>{label}</label>
            {
                type === 'textarea'
                ?
                    <textarea {...input} />
                :
                    <input {...input} type={type} placeholder={`Enter your ${label}`} />
            }

            { touched && <div className="red-text" style={{ marginBottom: '20px' }}>{error}</div> }
        </div>
    )
}

export default SurveyField
