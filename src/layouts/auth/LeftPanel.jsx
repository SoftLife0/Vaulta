import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const LeftPanel = () => (
  <div className="login-left">
    <div className="login-description d-flex flex-column justify-content-end align-items-center h-100" style={{maxWidth: "400px", margin: "0 auto", paddingBottom: "60px"}}>
      <div className="text-center mb-4">
        <Link to="/" className="d-flex align-items-center justify-content-center">
          <img src={logo} alt="logo" style={{width:130}} loading="eager" />
        </Link>
      </div>

      <div>
        <h2 className="login-title mb-3">Get Started with Us</h2>
        <p className="login-subtitle mb-5">Complete these easy steps to register <br /> your account.</p>
      </div>


      <div className="d-flex flex-column align-items-center" style={{gap: "16px", width: "100%"}}>
        <div className="login-step-card-active">
          <small className="auth-card-number-active">1</small>
          <h6 className="auth-card-text-active">Provide your email</h6>
        </div>

        <div className="login-step-card">
          <small className="auth-card-number">2</small>
          <h6 className="auth-card-text">Receive login email</h6>
        </div>

        <div className="login-step-card">
          <small className="auth-card-number">3</small>
          <h6 className="auth-card-text">Login with instant code</h6>
        </div>
      </div>
      
    </div>
  </div>
);

export default LeftPanel;
