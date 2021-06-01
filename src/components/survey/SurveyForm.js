import React from "react";
import { Field, reduxForm } from "redux-form";

const SurveyForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit((values) => console.log(values))}>
        <div>
          <label>Survey Title</label>
          <Field type="text" name="surveyTitle" component="input" />
        </div>

        <div>
          <label>Survey Subject</label>
          <Field type="text" name="surveySubject" component="input" />
        </div>

        <div>
          <label>Survey Body</label>
          <Field type="text" name="surveyBody" component="textarea" />
        </div>

        <div>
          <label>Recipient</label>
          <Field type="text" name="surveyRecipient" component="input" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "surveyForm",
})(SurveyForm);
