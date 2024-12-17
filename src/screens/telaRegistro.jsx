import { useState } from "react";
import InputField from "../components/InputField.jsx";
import MaskedInput from "../components/MaskedField.jsx";
import "../styles/telaRegistro.css";

const initialValues = {
  username: "",
  cpf: "",
  cnpj: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthdate: "",
};

const RegisterUser = () => {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Lógica para validar os dados e enviar ao backend
    console.log(values);
  }

  return (
    <div className="registro-container">
      <h2 className="form-title">Cadastrar Novo Usuário</h2>
      <form action="#" className="registro-form" onSubmit={handleSubmit}>
        {/* Nome de Usuário */}
        <InputField
          name="nome"
          value={values.username}
          onChange={handleChange}
          placeholder="Nome de Usuário"
          icon="account_circle"
          type="text"
        />

        {/* CPF */}
        <MaskedInput
          name="cpf"
          mask="999.999.999-99"
          value={values.cpf}
          onChange={handleChange}
          placeholder="CPF"
          icon="badge"
          type="text"
        />

        {/* CNPJ */}
        <MaskedInput
          name="cnpj"
          mask="99.999.999/9999-99"
          value={values.cnpj}
          onChange={handleChange}
          placeholder="CNPJ"
          icon="apartment"
          type="text"
        />

        {/* Email */}
        <InputField
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          icon="email"
          type="email"
        />

        {/* Data de Nascimento */}
        <InputField
          name="data de nascimento"
          value={values.birthdate}
          onChange={handleChange}
          placeholder="Data de Nascimento"
          icon="calendar_today"
          type="date"
        />

        {/* Senha */}
        <InputField
          name="senha"
          value={values.password}
          onChange={handleChange}
          placeholder="Senha"
          icon="lock"
          type="password"
        />

        {/* Confirmar Senha */}
        <InputField
          name="confirmar senha"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmar Senha"
          icon="lock"
          type="password"
        />

        <button type="submit" className="registro-button">
          Cadastrar
        </button>
        <p className="signup-text">
          Já tem uma conta? <a href="#/projeto/login">Logue agora</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterUser;
