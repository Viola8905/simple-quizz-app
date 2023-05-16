import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import HeroPage from "../HeroPage/HeroPage";
import QuizPage from "../QuizPage/QuizPage";
import QuizTheoryPage from "../QuizTheoryPage/QuizTheoryPage";

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />}>
        <Route index element={<HeroPage />} />
        <Route path="/quizes/:id" element={<QuizPage />} />
        <Route path="/quizTheory/:id" element={<QuizTheoryPage />} />
      </Route>
    </Routes>
  );
};

export default Pages;
