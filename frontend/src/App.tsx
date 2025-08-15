import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Content, Home } from "./pages";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Content />} />
      </Routes>
    </Router>
  );
};

export default App;
