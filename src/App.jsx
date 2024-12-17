import { HashRouter as Router, Routes, Route } from "react-router-dom";

import TelaRegistro from "./screens/telaRegistro.jsx";
import TelaLogin from "./screens/telaLogin.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/projeto/registro" element={<TelaRegistro />} />
        <Route path="/projeto/login" element={<TelaLogin />} />
        <Route path="/projeto/" element={<TelaLogin />} />
        <Route path="/" element={<TelaLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
