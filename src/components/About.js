import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Stonepedia</h2>
            <p className="about-description">
              Welcome to Stonepedia, your premier destination for high-quality natural stones. With over a decade of experience in the stone industry, we pride ourselves on offering the finest selection of granite, marble, sandstone, and other natural stone products.
            </p>
            <p className="about-description">
              Our commitment to quality and customer satisfaction has made us a trusted name in the industry. We work directly with quarries and manufacturers to ensure that every stone we offer meets our high standards of excellence.
            </p>
            <div className="about-features">
              <div className="feature">
                <h3>Quality Assurance</h3>
                <p>Every stone is carefully selected and inspected</p>
              </div>
              <div className="feature">
                <h3>Expert Guidance</h3>
                <p>Professional consultation for your stone selection</p>
              </div>
              <div className="feature">
                <h3>Wide Selection</h3>
                <p>Extensive range of natural stones from around the world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
