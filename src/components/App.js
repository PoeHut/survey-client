import "materialize-css/dist/css/materialize.min.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./survey/SurveyNew";

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Header /> {/* always visible component */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/survey" component={Dashboard} />
        <Route exact path="/survey/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

export default App;
