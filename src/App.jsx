import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TelaRegistro from "./screens/telaRegistro.jsx";
import TelaLogin from "./screens/telaLogin.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<TelaRegistro />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/" element={<TelaLogin />} /> {/* Página inicial */}
      </Routes>
    </Router>
  );
};

export default App;
