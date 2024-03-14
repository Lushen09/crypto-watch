import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import '../styles/auth-styles.css';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { login, loginError, isLoading } = useLogin();

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = await login(email, password);

        if (success) {
            navigate('/dashboard'); 
        }

    };

    return (
        <div className='auth'>

            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputFirstName" className="form-label">Email</label>
                        <input type="text" className="form-control" id="exampleInputFirstName" name="email" value={email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" name="password" value={password} onChange={handleChange} />
                    </div>
                    <button type="submit" disabled={isLoading} className="btn btn-success">Login</button>
                    {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                </form>
            </div>

        </div>
    )
}

export default Login