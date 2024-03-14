import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import '../styles/auth-styles.css';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { signup, signUpError, isLoading } = useSignup();

    const { name, email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            const success = await signup(email, password, name);

            if (success) {
                navigate('/dashboard');
            }
        }
    };

    return (
        <div className='auth'>

            <div className="signup-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputFirstName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputFirstName" name="name" value={name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" name="email" value={email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" name="password" value={password} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputConfirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                    </div>
                    <button className="btn btn-success" type="submit" disabled={isLoading}>Sign Up</button>
                    {signUpError && <p style={{ color: 'red' }}>{signUpError}</p>}
                </form>
            </div>

        </div>
    );
}

export default Signup;
