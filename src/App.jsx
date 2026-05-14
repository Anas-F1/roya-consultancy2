import React from "react";
// إضافة مكتبة التنقل
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  BarChart3,
  Presentation,
  SearchCode,
} from "lucide-react";

// استدعاء الصفحات (ستقوم بإنشائها في مجلد pages)
import BlogList from "./pages/BlogList";
import EconomicReport from "./pages/EconomicReport";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* 1. Navbar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo-container">
              <img src="/logo.png" alt="Roya Logo" className="navbar-logo" />
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/" className="active">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/blog">المدونة</Link>
              </li>
              <li>
                <a href="/#about">من نحن</a>
              </li>
              <li>
                <a href="/#services">خدماتنا</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* إعدادات مسارات الصفحات */}
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<HomeContent />} />

          {/* صفحة قائمة المدونات والتقارير */}
          <Route path="/blog" element={<BlogList />} />

          {/* صفحة التقرير التفصيلي (الذي يحتوي على D3) */}
          <Route path="/blog/economic-report" element={<EconomicReport />} />
        </Routes>

        {/* 5. Footer المطور - الأيقونات على اليمين */}
        {/* 5. Footer المطور */}
        <footer id="contact" className="footer">
          {/* أضفنا هذا الديف لضمان وجود الـ Gap المتناسق */}
          <div className="container">
            <div className="footer-content">
              <h3>تواصل معنا</h3>
              <div className="contact-info">
                <div className="contact-row">
                  <Mail size={18} />
                  <a
                    href="mailto:contact@roya-consultancy.com"
                    className="email-link"
                  >
                    contact@roya-consultancy.com
                  </a>
                </div>
                <div className="contact-row">
                  <Phone size={18} />
                  <span>123456789</span>
                </div>
                <div className="contact-row">
                  <MapPin size={18} />
                  <span>الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
            <p className="copyright-text">Copyright 2026, Roya Consultancy</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// مكون الصفحة الرئيسية (نفس كودك الأصلي تماماً دون تغيير)
function HomeContent() {
  return (
    <div className="container">
      {/* 2. Hero Section */}
      <header className="hero" id="home">
        <h1 className="title">رؤية للاستشـارات</h1>
        <p className="subtitle">نُحوِّل بياناتك إلى قرارات</p>
        <p className="hero-description">
          نساعد الشركات الصغيرة والمتوسطة على فهم بياناتها، تحسين الأداء، واتخاذ
          قرارات مبنية على أرقام واضحة.
        </p>
        <a href="#contact" className="btn-primary">
          تواصل معنا
        </a>
      </header>

      {/* 3. About Section */}
      <section id="about" className="section-alt">
        <div className="intro-quote">
          <p>
            نحن شركة استشارية متخصصة في علم البيانات والإحصاء، نعمل على تمكين
            الشركات من فهم بياناتها بشكل أعمق، وبناء قرارات أكثر وعيًا اعتمادًا
            على التحليل الدقيق والمنهجي.
          </p>
          <p>
            نمتلك خبرة عملية في التعامل مع البيانات ضمن بيئات عمل مختلفة، ونركّز
            على تحويل البيانات الخام إلى معرفة واضحة يمكن الاعتماد عليها. نولي
            اهتمامًا خاصًا بجودة التحليل، بساطة العرض، وموثوقية النتائج بما يخدم
            أهداف العميل.
          </p>
          <p>
            نلتزم بأعلى معايير سرية وخصوصية البيانات، ونعتبر حماية بيانات
            العملاء أولوية أساسية في جميع مراحل العمل. نعتمد على أدوات وتقنيات
            تحليل حديثة، ونمتلك خبرة في استخدام أدوات التحليل المتقدمة، مما يتيح
            لنا التعامل مع بيانات معقدة وبأحجام مختلفة، وتقديم مخرجات تحليلية
            واضحة وقابلة للتطبيق.
          </p>
        </div>
      </section>

      {/* 4. Services Section */}
      <section>
        <h2 id="services" className="services-title">
          خدماتنـا
        </h2>{" "}
        <div className="services-grid">
          <div className="service-card">
            <BarChart3 size={45} strokeWidth={1.5} />
            <h3>خدمة التحليل الربع سنوي</h3>
            <p>
              تقارير ربع سنوية تساعدك على متابعة الأداء وفهم أرقامك بشكل واضح.
            </p>
          </div>
          <div className="service-card">
            <Presentation size={45} strokeWidth={1.5} />
            <h3>لوحات متابعة الأداء</h3>
            <p>لوحات معلومات تفاعلية تمكن الإدارة من متابعة المؤشرات بسهولة.</p>
          </div>
          <div className="service-card">
            <SearchCode size={45} strokeWidth={1.5} />
            <h3>حلول تحليلية مخصصة</h3>
            <p>مشاريع مصممة لمعالجة تحديات محددة حسب احتياجات العميل.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
