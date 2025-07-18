import { useState } from 'react'
import LeftPanel from '../../layouts/auth/LeftPanel'
import RightPanel from '../../layouts/auth/RightPanel'
import { Link, useNavigate } from 'react-router-dom'
import { apiService } from '../../services/apiService'
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({first_name: '',last_name: '',email: '',phone: '',password: '',confirmPassword: ''});

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const cleanData = {
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            };

            console.log("Registration Data", cleanData);

            const response = await apiService.post('/signup', cleanData);

            console.log("Registration Response", response); // This will run only on 200

            if (response?.success) {
                toast.success('Registration successful!');
                navigate('/login');
            } else {
                toast.error(response?.message || 'Registration failed');
            }
        } catch (err) {
            const errorMsg = err?.response?.data?.detail || err?.response?.data?.message || err.message;
            toast.error(errorMsg);
            console.log("Registration Error", err?.response?.data || err);  // This is what you want to log!
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="login-wrapper">
            <LeftPanel />

            <RightPanel title="Let’s get you set up with a new account." subTitle="Enter your account details">
                <form onSubmit={handleRegister}>

                    <button type="submit" className="vulta-button w-100 my-3 d-flex align-items-center justify-content-center" style={{background: '#fff', color: '#000', border: '1px solid #EDEDED'}}>
                        <img src="https://www.google.com/favicon.ico" alt="Google" className="me-2" style={{width: '16px', height: '16px'}} />
                        Google
                    </button>
                    
                    <div className="flex items-center mb-4">
                        <hr className="flex-grow border-t border-[#EDEDED]" />
                        <span className="px-3 text-black text-sm">or</span>
                        <hr className="flex-grow border-t border-[#EDEDED]" />
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="input-label">First Name</label>
                                <input className="input-field" value={formData.first_name} onChange={(e) => handleInputChange('first_name', e.target.value)} placeholder="eg. Trusty" type="text" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="input-label">Last Name</label>
                                <input className="input-field" value={formData.last_name} onChange={(e) => handleInputChange('last_name', e.target.value)} placeholder="eg. Cole" type="text" required />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="input-label">Email</label>
                        <input className="input-field" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="eg. trustycole@vaulta.com" type="email" required />
                    </div>

                
                    {/* <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input sm" type="checkbox" id="terms" style={{ backgroundColor: 'black', borderColor: 'white' }} required />
                            <label className="input-login-text">I agree to <span style={{ textDecoration: "underline" }}>terms & privacy</span></label>
                        </div>
                    </div> */}

                    {error && <div className="alert alert-danger">{error}</div>}

                    <button type="submit" className="vulta-button w-100 mt-3" disabled={loading}>
                        {loading ? (
                        <>
                            <div className="spinner-border spinner-border-sm me-2" role="status" />
                            Creating Account...
                        </>
                        ) : "Sign Up"}
                    </button>

                    <div className="text-center mt-3">
                        <small className="input-login-text">
                            Already Have an Account? <Link to="/" className="input-login-other-text">Log in</Link>
                        </small>
                    </div>
                </form>
            </RightPanel>
        </div>
    )
}

export default Register;
