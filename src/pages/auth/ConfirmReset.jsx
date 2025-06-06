import { useState} from 'react'
import OtherPanel from '../../layouts/auth/OtherPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link } from 'react-router-dom'
import OTPInput from '../../components/OTPInput'

const ConfirmReset = () => {
    const [code, setCode] = useState('')
    const [error, setError] = useState('')


    return (
        <div className="login-wrapper">
            <OtherPanel />

            <RightPanel title="Password Reset" subTitle="We sent a code to johncole@gmail.com">
                <form action="">
                    <OTPInput code={code} setCode={setCode} length={4} />

                    {error && <p className="text-danger">{error}</p>}

                    <div className="text-center mt-3">
                        <small className="input-login-text">Didn't Receive the email? <Link to="/register" className="input-login-other-text">Click to send</Link></small>
                    </div>

                    <button type="submit" className="vulta-button w-100 mt-3">Continue</button>

                    <div className="text-center mt-3">
                        <small className="input-login-text"><Link to="/reset-password" className="login-back"><i className="bi bi-arrow-left me-2"></i>Back to log in</Link></small>
                    </div>
                </form>
            </RightPanel>
        </div>
    )
}

export default ConfirmReset