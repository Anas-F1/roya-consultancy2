import React from "react";
import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

const BlogList = () => {
  return (
    <div className="container" style={{ padding: "120px 20px" }}>
      <h2 style={{ textAlign: "right", marginBottom: "40px" }}>
        المدونة والتقارير
      </h2>
      <div className="services-grid">
        <div className="service-card">
          <BarChart3 size={45} />
          <h3>تقرير الأنشطة الاقتصادية</h3>
          <p>تحليل مقارن للأنشطة الاقتصادية (Q1 2025 vs Q1 2026)</p>
          <Link
            to="/blog/economic-report"
            className="btn-primary"
            style={{
              textDecoration: "none",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            عرض التقرير
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
