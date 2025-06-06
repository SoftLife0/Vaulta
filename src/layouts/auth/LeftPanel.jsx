import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const LeftPanel = () => (
  <div className="login-left">
    <div>
      <Link to="/" className="d-flex align-items-center">
        <img src={logo} alt="logo" style={{width:130}} loading="eager" />
      </Link>
    </div>

    <div className="login-description">
        <h2 className="login-title mb-4">“The Trust Layer for the Tokenized Financial Future”</h2>

        <div className="d-flex justify-content-end align-items-center gap-3 mt-3">
            <div className="login-arrow" style={{border: "2px solid white",}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className="login-arrow" style={{backgroundColor: "#FFA006"}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>      
    </div>
  </div>
);

export default LeftPanel;