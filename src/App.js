import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BurnoutSurvey from "./BurnoutSurvey";
import ResultPage from "./ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BurnoutSurvey />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
