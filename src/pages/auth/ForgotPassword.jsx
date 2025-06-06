import { useState} from 'react'
import OtherPanel from '../../layouts/auth/OtherPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')


    return (
        <div className="login-wrapper">
            <OtherPanel />

            <RightPanel title="Forgot Password?" subTitle="No worries, we would send you reset instructions">
                <form action="">
                    <div className="mb-3">
                        <label className="input-label">Enter your email</label>
                        <input className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="dev@vaulta.com" type="email" required/>
                    </div>

                    <button type="submit" className="vulta-button w-100 mt-3">Reset Password</button>

                    <div className="text-center mt-3">
                        <small className="input-login-text"><Link to="/confirm-reset" className="login-back"><i className="bi bi-arrow-left me-2"></i>Back to log in</Link></small>
                    </div>
                </form>
            </RightPanel>
        </div>
    )
}

export default ForgotPassword