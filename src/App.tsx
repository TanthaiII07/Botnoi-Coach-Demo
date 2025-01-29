import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';
import './styles/App.css';

function App() {
  return (
    <div className="main-layout">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-logo">
          <Bot className="nav-logo-icon" />
          <span className="nav-logo-text">COACH</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-container">
        <h1 className="hero-title">
          <span className="hero-gradient-text">
            Test
          </span>
          <br />
          <span className="hero-white-text">YOUR CAREER POTENTIAL</span>
        </h1>
        
        <p className="hero-description">
          Coach Bot is an AI tool that helps job candidates practice interviews by simulating common questions and <span className="inline-gradient-text">offering feedback</span> on responses, body language, and performance, helping boost confidence and improve skills.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            Get started <ArrowRight className="w-5 h-5" />
          </button>
          <a href="#about" className="secondary-link">
            Learn more about us
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;