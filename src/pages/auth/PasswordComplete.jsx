import OtherPanel from '../../layouts/auth/OtherPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link } from 'react-router-dom'
import thumb from '../../assets/images/thumb.png'

const ForgotPassword = () => {

    return (
        <div className="login-wrapper">
            <OtherPanel />

            <RightPanel title="All done!" subTitle="Your Password has been reset">
                <img src={thumb} alt="Success" className="img-fluid mb-4" style={{width: '150px', margin: '0 auto'}}/>                
                    
                <div className="text-center mt-3">
                    <small className="input-login-text"><Link to="/" className="login-back"><i className="bi bi-arrow-left me-2"></i>Back to log in</Link></small>
                </div>
            </RightPanel>
        </div>
    )
}

export default ForgotPassword