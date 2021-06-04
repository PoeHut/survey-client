import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import SurveyField from './SurveyField'
import validateEmail from '../../utils/validateEmail'
import formFields from './formFields'

const SurveyForm = ({ handleSubmit, handleFormSubmit }) => {

  const renderField = () => {
    return formFields.map(({label, type, name}) => {
      return (
        <Field
          key={name}
          type={type}
          name={name}
          // custom component, component as props
          component={SurveyField}
          label={label}
        />
      )
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        
        {renderField()}
        
        <Link to="/survey" className="red btn-flat white-text">
          Cancle
        </Link>

        <button type="submit" className="teal btn-flat right white-text">
          Next <i className="material-icons right">done</i>
        </button>
      
      </form>
    </div>
  );
};

const validate = values => {
  
  const errors = {}

  errors.recipients = validateEmail(values.recipients || '');
  
  formFields.forEach(({name}) => {
    if (!values[name]) {
      errors[name] = `You must provide a value for ${name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false //persisting form value
})(SurveyForm);
