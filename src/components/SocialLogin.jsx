const SocialLogin = () => {
  return (
    <div className="social-login">
      <button className="social-button">
        <img src="./src/assets/google.svg" alt="Google" className="social-icon" />
        Google
      </button>
      <button className="social-button">
        <img
          src="./src/assets/apple.svg"
          alt="Google"
          className="social-icon"
        ></img>
        Apple
      </button>
    </div>
  );
};

export default SocialLogin;