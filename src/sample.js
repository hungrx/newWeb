import { useState } from "react";
import React, { useEffect } from 'react';
import './App.css';
import logo from "../src/assets/logo.png"
import appStoreBadge from "../src/assets/applelogo.png";
import playstoreBadge from "../src/assets/playstorelogo.png"
import founderPhoto1 from "../src/assets/1st image.png";
import founderPhoto2 from "../src/assets/2nd image.png";

function App() {
  const [showFirst, setShowFirst] = useState(true);
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add conversion tracking
    document.querySelectorAll('.btn, .app-store-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') {
          e.preventDefault();
        }
        console.log('CTA Clicked:', this.textContent.trim());
        // Add analytics tracking here
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <a href="#" className="logo">
              <img src={logo} alt="hungrX logo" className="logo-icon" />
              <span className="logo-text">hungrX</span>
            </a>
            <ul className="nav-menu">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#download" className="nav-link">Download</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Revolutionary Nutrition App</div>

            <h1 className="text-massive hero-title">
              EAT<br />
              ANYWHERE.<br />
              <span className="accent">LOSE WEIGHT</span><br />
              EVERYWHERE.
            </h1>

            <p className="text-body hero-subtitle">
              The world's first location-powered nutrition app that turns every restaurant into your personal weight loss ally. Never guess what to eat again.
            </p>

            <a href="#download" className="btn btn-primary">Download Free Now</a>
          </div>
        </div>
      </section>

      {/* Scrolling Text */}
      <div className="scrolling-text">
        <div className="scrolling-content">
          <span className="scrolling-item">Stop Guessing What To Eat</span>
          <span className="scrolling-item">Location-Based Nutrition</span>
          <span className="scrolling-item">Smart Meal Recommendations</span>
          <span className="scrolling-item">Effortless Weight Loss</span>
          <span className="scrolling-item">Never Diet Again</span>
          <span className="scrolling-item">Stop Guessing What To Eat</span>
          <span className="scrolling-item">Location-Based Nutrition</span>
          <span className="scrolling-item">Smart Meal Recommendations</span>
          <span className="scrolling-item">Effortless Weight Loss</span>
          <span className="scrolling-item">Never Diet Again</span>
        </div>
      </div>

      {/* Problem Section */}
      <section className="problem-section section" id="problem">
        <div className="container">
          <h2 className="text-huge fade-in">The Daily<br />Food Nightmare</h2>

          <div className="problem-grid">
            <div className="problem-card fade-in">
              <h3 className="problem-title">"What Can I Even Eat Here?"</h3>
              <p className="problem-text">Standing in restaurants, scanning menus like a detective, trying to guess which meal won't sabotage your progress. The mental exhaustion is real.</p>
            </div>

            <div className="problem-card fade-in">
              <h3 className="problem-title">"Another Useless Diet App?"</h3>
              <p className="problem-text">Download app after app, only to find they're either too complicated, missing restaurant data, or make you feel like a mathematician every meal.</p>
            </div>

            <div className="problem-card fade-in">
              <h3 className="problem-title">"I Was Doing So Well..."</h3>
              <p className="problem-text">Start strong, see some progress, then life happens. One bad meal choice spirals into giving up completely. The cycle repeats endlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Vision Section */}
      <section className="introduction-section section">
        <div className="container">
          <div className="introduction-content fade-in">
            <h2 className="introduction-title">Introduction<br />& Vision</h2>

            <p className="introduction-text">
              Indulge in flavor, not guilt. At hungrX, we believe in a world where food is freedom—not a restriction. Imagine savoring every bite, from your favorite comfort foods to adventurous new flavors, while staying in sync with your wellness goals. No compromises, no second-guessing. hungrX is crafted for food lovers who refuse to settle, who see food as an experience to be enjoyed, not avoided. Join us and unlock a lifestyle that embraces balance, satisfaction, and total freedom—because you deserve a life full of flavor without holding back. Your cravings, perfectly balanced.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section section">
        <div className="container">
          <div className="story-content fade-in">
            <h2 className="story-title">Our Story</h2>

            <div className="story-text">
              <p className="story-paragraph">
                At the heart of hungrX is a story of real transformation. Our founder's journey began at <span className="story-highlight">96 kg</span>, navigating diets, endless advice, and the frustration of mixed results. But one truth became clear: <span className="story-highlight">a calorie deficit is the path to lasting change.</span>
              </p>

              <p className="story-paragraph">
                hungrX was created to simplify this journey for you. With geo-targeted food suggestions tailored to your daily calorie needs, we make each meal an empowering step toward your goals.
              </p>

              <p className="story-paragraph">
                This is your moment to reclaim the life you deserve. Join hungrX, and let's walk this path together—one meal, one victory at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Founder Message Section */}


    <section className="founder-section section">
      <div className="container">
        <div className="founder-content fade-in">
          <div className="founder-message">
            <h2 className="founder-title">Message From<br />Founder</h2>

            <p className="founder-quote">
              "As a MBBS graduate who's been through my own transformation, I created hungrX to make balanced eating easier. It blends practical knowledge with personal experience, helping you reach your goals without sacrificing the joy of food. Let's redefine wellness, without guilt or compromise."
            </p>

            <div className="founder-signature">
              <div className="founder-name">Febbin Chacko</div>
              <div className="founder-title-text">Founder of hungrX</div>
            </div>
          </div>

<div className="founder-image fade-in">
  <img
    src={showFirst ? founderPhoto1 : founderPhoto2}
    alt="Founder of hungrX - Febbin Chacko"
    className="founder-img"
  />
</div>

{/* Toggle button with power switch style - directly under image */}
<div className="image-switch-container fade-in">
  <div className="switch-title">SWITCH ON</div>
  <div className="image-switch">
    <label className="power-switch-control">
      <input
        type="checkbox"
        checked={!showFirst}
        onChange={() => setShowFirst(!showFirst)}
      />
      <div className="power-switch-slider">
        <span className="switch-o">O</span>
        <span className="switch-i">I</span>
      </div>
      <b className="power-switch-shadow"></b>
      <span className="power-switch-indicator"></span>
    </label>
  </div>
</div>
        </div>
      </div>
    </section>
      {/* Features Section */}
      <section className="features-section section" id="features">
        <div className="container">
          <div className="features-intro fade-in">
            <h2 className="text-huge">How hungrX<br />Solves Everything</h2>
            <p className="text-body">Revolutionary features that make weight loss inevitable, no matter where you eat.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card fade-in interactive">
              <div className="feature-number">01</div>
              <h3 className="feature-title">Smart Menu Discovery</h3>
              <p className="feature-text">Discover nearby restaurant menus that perfectly fit your calorie budget. Your location becomes your personal nutrition compass, showing only meals that align with your goals.</p>
            </div>

            <div className="feature-card fade-in interactive">
              <div className="feature-number">02</div>
              <h3 className="feature-title">Instant Food Recognition</h3>
              <p className="feature-text">Simply snap any food and instantly get complete nutrition information. Revolutionary visual AI transforms your camera into a nutrition expert that knows every dish.</p>
            </div>

            <div className="feature-card fade-in interactive">
              <div className="feature-number">03</div>
              <h3 className="feature-title">AI Kitchen Assistant</h3>
              <p className="feature-text">Your personal AI chef creates custom recipes from ingredients in your kitchen, perfectly calibrated to your calorie goals. Cooking made smart, simple, and goal-focused.</p>
            </div>

            <div className="feature-card fade-in interactive">
              <div className="feature-number">04</div>
              <h3 className="feature-title">Progress Tracking Hub</h3>
              <p className="feature-text">Monitor your journey with intelligent insights and milestone celebrations. Every meal becomes a step forward in your transformation story.</p>
            </div>

            <div className="feature-card fade-in interactive">
              <div className="feature-number">05</div>
              <h3 className="feature-title">Universal Food Logger</h3>
              <p className="feature-text">Seamlessly track everything you eat, from restaurant meals to home cooking. One unified system for complete nutritional awareness.</p>
            </div>

            <div className="feature-card fade-in interactive">
              <div className="feature-number">06</div>
              <h3 className="feature-title">Smart Goal Protection</h3>
              <p className="feature-text">Intelligent safeguards prevent one off-track meal from derailing your progress. Emergency meal suggestions keep you moving toward your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Timeline */}
      <section className="transformation-section section">
        <div className="container">
          <div className="transformation-intro fade-in">
            <h2 className="text-huge">The hungrX<br />Transformation Effect</h2>
            <p className="text-body">See what happens when you finally have the right tool.</p>
          </div>

          <div className="transformation-grid">
            <div className="transformation-card fade-in">
              <div className="transformation-period">Week 1</div>
              <div className="transformation-weight">-3.2 lbs</div>
              <p className="transformation-quote">"I can't believe how easy this is!"</p>
            </div>

            <div className="transformation-card fade-in">
              <div className="transformation-period">Month 1</div>
              <div className="transformation-weight">-12.8 lbs</div>
              <p className="transformation-quote">"Friends asking what I'm doing differently"</p>
            </div>

            <div className="transformation-card fade-in">
              <div className="transformation-period">Month 3</div>
              <div className="transformation-weight">-28.5 lbs</div>
              <p className="transformation-quote">"Never felt more confident"</p>
            </div>

            <div className="transformation-card fade-in">
              <div className="transformation-period">Month 6</div>
              <div className="transformation-weight">-45+ lbs</div>
              <p className="transformation-quote">"hungrX changed everything"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
     <section className="cta-section section" id="download">
  <div className="container">
    <h2 className="text-huge cta-title fade-in">
      Your New Life<br />Starts Right Now
    </h2>

    <p className="text-body cta-text fade-in">
      Discover the secret to effortless weight loss. Download hungrX and never struggle with food decisions again.
    </p>

    <div className="cta-buttons fade-in">
      <a 
        href="https://apps.apple.com/in/app/hungrx/id6741845887" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-accent"
      >
        Download hungrX Free
      </a>
    </div>

    <div className="app-store-grid fade-in">
      <a 
        href="https://apps.apple.com/in/app/hungrx/id6741845887" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="app-store-btn"
      >
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          className="app-store-img"
        />
      </a>

      <a 
        href="https://play.google.com/store/apps/details?id=com.hungrx.hungrx_app" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="app-store-btn"
      >
        <img
          src={playstoreBadge}
          alt="Download on the Play Store"
          className="app-store-img"
        />
      </a>
    </div>
  </div>
</section>


      {/* Floating CTA */}
      <a href="#download" className="floating-cta">Download Now</a>
    </div>
  );
}

export default App;