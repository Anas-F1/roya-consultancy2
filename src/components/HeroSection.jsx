// src/components/HeroSection.jsx
import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./HeroSection.scss";

const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // يمكنك استخدام loadSlim لبدء التشغيل الخفيف
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  // يمكنك تخصيص إعدادات الجزيئات هنا للحصول على المظهر الذي تريده
  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#2563eb" }, // لون الجزيئات من لوحة ألوانك
      links: {
        color: "#2563eb",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <section className="hero-section" id="home">
      <Particles
        className="particles-container"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
      <div className="container hero-content">
        <h1 className="title">رؤية للاستشـارات</h1>
        <p className="subtitle">نُحوِّل بياناتك إلى قرارات</p>
        <div className="hero-cta">
          <a href="#services" className="contact-btn">
            اكتشف خدماتنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
