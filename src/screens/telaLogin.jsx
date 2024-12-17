import { useState } from "react";
import InputField from "../components/InputField.jsx";
import MaskedInput from "../components/MaskedField.jsx";
import "../styles/telaLogin.css";

const initialValues = {
  cpf: "",
  cnpj: "",
};

const TelaLogin = () => {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div className="login-container">
      <h2 className="form-title">LOGAR</h2>

      <form action="#" className="login-form">  
        <MaskedInput
          name="cnpj"
          mask="99.999.999/9999-99"
          value={values.cnpj}
          onChange={handleChange}
          placeholder="CNPJ"
          icon="apartment"
          type="text"
        />
        <MaskedInput
          name="cpf"
          mask="999.999.999-99"
          value={values.cpf}
          onChange={handleChange}
          placeholder="Usuário"
          icon="account_circle"
          type="text"
        />

        <InputField type="password" placeholder="Password" name={"senha"} icon="lock" />
        <a href="#" className="forgot-pass-link">
          Esqueceu a senha?
        </a>
        <button type="submit" className="login-button">
          Log in
        </button>
        <p className="signup-text">
          Não tem uma conta? <a href="/registro">Cadastre-se agora</a>
        </p>
      </form>
    </div>
  );
};

export default TelaLogin;
