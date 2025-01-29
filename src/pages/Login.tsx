import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Eye, EyeOff } from 'lucide-react';
import '../styles/Login.css';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-header">
        <Link to="/" className="login-logo">
          <Bot className="login-logo-icon" />
          <span className="login-logo-text">COACH</span>
        </Link>
      </div>

      <div className="login-card">
        <div className="login-form">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">
            Hey, Enter your detail to get sign in<br />to your account
          </p>

          <div className="form-group">
            <input
              type="text"
              placeholder="User name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button className="login-button">
            Log in
          </button>

          <p className="signup-prompt">
            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}