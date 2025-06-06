import { useState} from 'react'
import OtherPanel from '../../layouts/auth/OtherPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link } from 'react-router-dom'
import OTPInput from '../../components/OTPInput'

const Verification = () => {
    const [code, setCode] = useState('')
    const [error, setError] = useState('')


    return (
        <div className="login-wrapper">
            <OtherPanel />

            <RightPanel title="Enter the 6-digit code we just sent you" subTitle="Check your phone for the verification code. It expires in 5 minutes.">
                <form action="">
                    <OTPInput code={code} setCode={setCode} length={6} />

                    {error && <p className="text-danger">{error}</p>}

                    <div className="text-center mt-3">
                        <small className="input-login-text">Didn't Receive the email? <Link to="/register" className="input-login-other-text">Click to send</Link></small>
                    </div>

                    <button type="submit" className="vulta-button w-100 mt-3">Verify Code</button>

                    <div className="text-center mt-3">
                        <small className="input-login-text"><Link to="/" className="login-back"><i className="bi bi-arrow-left me-2"></i>Back to log in</Link></small>
                    </div>
                </form>
            </RightPanel>
        </div>
    )
}

export default Verification