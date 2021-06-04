import axios from "axios";

export const fetchUser = () => async (dispatch) => {

  const response = await axios.get("/api/auth/success");

  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const submitSurvey = (formValues, callback) => async (dispatch) => {
  
  const response = await axios.post("/api/survey", formValues);
  
  dispatch({ type: "FETCH_USER", payload: response.data });
  callback();
}
