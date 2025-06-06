import { useState} from 'react'
import OtherPanel from '../../layouts/auth/OtherPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')


    return (
        <div className="login-wrapper">
            <OtherPanel />

            <RightPanel title="Set new password" subTitle="Must be at least 8 characters">
                <form action="">
                    <div className="mb-3">
                        <label className="input-label">Password</label>
                        <input className="input-field" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} placeholder="***************" type="password" required/> 
                    </div>

                    <div className="mb-3">
                        <label className="input-label">Confirm Password</label>
                        <input className="input-field" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }} placeholder="***************" type="password" required/> 
                    </div>

                    <button type="submit" className="vulta-button w-100 mt-3">Reset Password</button>

                    <div className="text-center mt-3">
                        <small className="input-login-text"><Link to="/password-complete" className="login-back"><i className="bi bi-arrow-left me-2"></i>Back to log in</Link></small>
                    </div>
                </form>
            </RightPanel>
        </div>
    )
}

export default ResetPassword