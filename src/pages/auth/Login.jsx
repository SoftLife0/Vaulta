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

            <RightPanel title="Login" subTitle="Enter your credentials to access your account">
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="input-label">Email</label>
                        <input className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="dev@vaulta.com" type="email" required/>
                    </div>

                    <div className="mb-3">
                        <label className="input-label">Password</label>
                        <input className="input-field" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} placeholder="***************" type="password" required/> 
                    </div>

                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input sm" type="checkbox" id="rememberMe" style={{backgroundColor: 'black', borderColor: 'white'}} />                        
                            <label className="input-login-text">Remember me</label>
                        </div>
                    </div>
                    
                    <div className="mt-2">
                        <Link to="/request-password-reset" className="input-login-text" style={{color:"red"}}>Forgot password?</Link>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <button type="submit" className="vulta-button w-100 mt-3" disabled={loading || !email || !password}>
                        {loading ? (
                        <>
                            <div className="spinner-border spinner-border-sm me-2" role="status" />
                            Logging in...
                        </>
                        ) : "Login"}
                    </button>

                    <div className="text-center mt-3">
                        <small className="input-login-text">Dont Have an Account? <Link to="/register" className="input-login-other-text">Create an account</Link></small>
                    </div>
                </form>
            </RightPanel>
        </div>
    )
}

export default Login