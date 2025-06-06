import OtherPanel from '../../layouts/auth/OtherPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link } from 'react-router-dom'

const Verify = () => {

    return (
        <div className="login-wrapper">
            <OtherPanel />

            <RightPanel title="Verify your email to continue" subTitle="We sent a link to johncole@gmail.com. Click it to finish setting up your account.">                                    
                <div className="text-center mt-3">
                    <small className="input-login-text">Didn't Receive the email? <Link to="/" className="input-login-other-text">Resend email</Link></small>
                </div>

                <div className="text-center mt-3">
                    <small className="input-login-text"><Link to="/reset-password" className="login-back"><i className="bi bi-arrow-left me-2"></i>Back to log in</Link></small>
                </div>
            </RightPanel>
        </div>
    )
}

export default Verify