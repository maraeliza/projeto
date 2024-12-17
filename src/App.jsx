import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TelaRegistro from "./screens/telaRegistro.jsx";
import TelaLogin from "./screens/telaLogin.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/projeto/registro" element={<TelaRegistro />} />
        <Route path="/projeto/login" element={<TelaLogin />} />
        <Route path="/projeto/" element={<TelaLogin />} /> {/* Página inicial */}
      </Routes>
    </Router>
  );
};

export default App;
