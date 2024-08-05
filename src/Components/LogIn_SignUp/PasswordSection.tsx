function PasswordSection() {
  return (
    <div className="password-container">
      <div className="password-input-container">
        <input
          className="password-input"
          type="password"
          placeholder="Password"
        ></input>
      </div>

      <div className="password-eye-container">
        <button className="password-eye" type="button">
          <i className="bi bi-eye-slash-fill icon-color"></i>
        </button>
      </div>
    </div>
  );
}

export default PasswordSection;
