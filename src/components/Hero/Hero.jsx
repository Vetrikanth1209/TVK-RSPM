import "./Hero.css";

import heroVideo from "../../assets/videos/hero.mp4";

const Hero = () => {
  return (
    <section className="hero-section">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src={heroVideo}
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1>
          உங்கள் குரல்,
          <br />
          உங்கள் வார்டு,
          <br />
          உங்கள் முன்னேற்றம்
        </h1>

      </div>

    </section>
  );
};

export default Hero;