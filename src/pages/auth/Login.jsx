import { useState} from 'react'
import LeftPanel from '../../layouts/auth/LeftPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link, useNavigate } from 'react-router-dom'
import { apiService } from '../../services/apiService'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const cleanData = { email, password };
            const response = await apiService.post('/login', cleanData);
            console.log("Login Response", response.data)

            if (response?.success) {
                toast.success('Login successful!');
                navigate('/dashboard');
            } else {
                toast.error(response?.message || 'Login failed');
            }
        } catch (err) {
            const errorMsg = err?.response?.data?.detail || err.message || 'An error occurred during login';
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="login-wrapper">
            <LeftPanel />

            <RightPanel title="Login" subTitle="Enter your email to access your account ">
                <form onSubmit={handleLogin}>

                    <button type="submit" className="vulta-button w-100 my-3 d-flex align-items-center justify-content-center" style={{background: '#fff', color: '#000', border: '1px solid #EDEDED'}}>
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="me-2" style={{width: '16px', height: '16px'}} />
                        Google
                    </button>
                    
                    <div className="flex items-center mb-4">
                        <hr className="flex-grow border-t border-[#EDEDED]" />
                        <span className="px-3 text-black text-sm">or</span>
                        <hr className="flex-grow border-t border-[#EDEDED]" />
                    </div>

                    <div className="mb-3">
                        <label className="input-label">Email</label>
                        <input className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="eg. trustycole@vaulta.digital" type="email" required/>
                    </div>

                    {/* <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input sm" type="checkbox" id="rememberMe" style={{backgroundColor: 'black', borderColor: 'white'}} />                        
                            <label className="input-login-text">Remember me</label>
                        </div>
                    </div> */}
                    
                    {/* <div className="mt-2">
                        <Link to="/request-password-reset" className="input-login-text" style={{color:"red"}}>Forgot password?</Link>
                    </div> */}
                    {error && <div className="alert alert-danger">{error}</div>}

                    <button type="submit" className="vulta-button w-100 my-3" disabled={loading || !email || !password}>
                        {loading ? (
                        <>
                            <div className="spinner-border spinner-border-sm me-2" role="status" />
                            Logging in...
                        </>
                        ) : "Continue"}
                    </button>

                    <div className="text-center mt-3">
                        <small className="input-login-text">Don’t have an account? <Link to="/register" className="input-login-other-text">Sign Up</Link></small>
                    </div>
                </form>
            </RightPanel>
        </div>
    )
}

export default Login