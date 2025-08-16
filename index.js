import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                <path d="M50 10 C45 10 40 12 40 15 L40 25 C40 28 45 30 50 30 C55 30 60 28 60 25 L60 15 C60 12 55 10 50 10 Z" fill="white"/>
                <path d="M20 25 C15 25 10 27 10 30 L10 35 C10 38 15 40 30 40 L70 40 C85 40 90 38 90 35 L90 30 C90 27 85 25 80 25 L20 25 Z" fill="white"/>
                <path d="M20 45 C15 45 10 47 10 50 L10 55 C10 58 15 60 30 60 L70 60 C85 60 90 58 90 55 L90 50 C90 47 85 45 80 45 L20 45 Z" fill="white"/>
                <path d="M20 65 C15 65 10 67 10 70 L10 75 C10 78 15 80 30 80 L70 80 C85 80 90 78 90 75 L90 70 C90 67 85 65 80 65 L20 65 Z" fill="white"/>
                <path d="M30 85 C25 85 20 87 20 90 C20 93 25 95 50 95 C75 95 80 93 80 90 C80 87 75 85 70 85 L30 85 Z" fill="white"/>
              </svg>
            </div>
            <span className="logo-text">OnlyWorks</span>
          </div>
          
          <div className="nav-links">
            <a href="/pricing" className="nav-link">Pricing</a>
            <a href="/tutorial" className="nav-link">Tutorial</a>
            <a href="/collaborate" className="nav-link">Collaborate with us</a>
            <a href="/signin" className="nav-link signin">Sign In</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Track what matters.
              <br />
              <span className="gradient-text">Work smarter.</span>
            </h1>
            
            <p className="hero-description">
              The minimal productivity platform that helps you focus on what actually gets done.
              No fluff, no distractions—just pure work tracking.
            </p>
            
            <div className="hero-actions">
              <button className="cta-button">
                Start Tracking Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <a href="/overview" className="secondary-button">
                Brief Overview
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="progress-item">
                  <span className="task-name">Design System</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <span className="task-name">API Integration</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '40%'}}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <span className="task-name">User Testing</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Preview */}
      <section className="features-preview">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Track your work in seconds, not minutes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Laser Focused</h3>
              <p>Only the metrics that actually matter</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Clear Insights</h3>
              <p>See your productivity patterns instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta">
        <div className="container">
          <h2>Ready to work smarter?</h2>
          <button className="cta-button">Start Tracking Now</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
