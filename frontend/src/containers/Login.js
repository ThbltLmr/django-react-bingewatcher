import React, {useState} from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


function Login( { login }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  // TBD: if authenticated, redirect to homepage

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link>.</p>
      <p>Forgot your password? <Link to="/signup">Click here</Link>.</p>
    </div>
  );
};

const mapStateToProps = state => ({
  // TBD: isAuthenticated: state.auth.isAuthenticated
});

export default connect(null, { login })(Login);
