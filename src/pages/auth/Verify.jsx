import LeftPanel from '../../layouts/auth/LeftPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link } from 'react-router-dom'

const Verify = () => {

    return (
        <div className="login-wrapper">
            <LeftPanel />

            <RightPanel title="Verify your email to continue">  
                    <small className="right-subtitle"></small>
                <div className="text-center">
                    <h6 className="input-login-text">We sent a  link to <span className="input-login-other-text" style={{color: "#FB9C04"}}>trustycole@vaulta.com</span></h6>
                    <small className="input-login-text">Click it to finish setting up your account.</small>
                </div>

                <div className="text-center mt-5">
                    <small className="input-login-text">Didn't Receive the email? <Link to="/" className="input-login-other-text" style={{color: "#FB9C04"}}>Resend email</Link></small>
                </div>

                {/* <div className="text-center mt-3">
                    <small className="input-login-text"><Link to="/reset-password" className="login-back"><i className="bi bi-arrow-left me-2"></i>Back to log in</Link></small>
                </div> */}
            </RightPanel>
        </div>
    )
}

export default Verify