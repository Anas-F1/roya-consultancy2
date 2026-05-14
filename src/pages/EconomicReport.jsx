import DivergingChart from "../components/reports/DivergingChart";
// import "./ReportStyle.css"; // استدعاء التنسيق الجديد
const EconomicReport = () => {
  return (
    // الحاوية الرئيسية مع خلفية فاتحة جداً لتمييز الشارت

    <div
      style={{
        direction: "rtl",
        minHeight: "100vh",
        padding: "0px 20px",
        fontFamily: "'Tajawal', sans-serif",
        fontSize: "18px", // الحجم من ملفك القديم
        lineHeight: "1.45", // المسافة بين الأسطر من ملفك القديم
        color: "#6b6375", // لون النص (var(--text)) من ملفك القديم
      }}
    >
      {/* قسم العنوان والمقدمة */}
      <header
        style={{
          maxWidth: "1100px",
          margin: "0 auto 0px auto",
          padding: "0 15px",
        }}
      >
        <h1
          style={{
            color: "#1a202c",
            fontSize: "28px",
            marginBottom: "20px",
            fontWeight: "800",
            textAlign: "right",
            // borderRight: "6px solid #2c3e50",
            // paddingRight: "15px",
          }}
        >
          مقارنة إحصائية للأنشطة الاقتصادية (Q1 2025 vs Q1 2026){" "}
        </h1>

        <div style={{ textAlign: "right" }}>
          <p
            style={{
              color: "#2d3748",
              fontSize: "16px",
              lineHeight: "1.8",
              maxWidth: "1100px",
              marginBottom: "20px",
              textAlign: "right",
            }}
          >
            يقدم هذا المخطط مقارنة تحليلية لمدى نمو أو تراجع عدد الأنشطة
            الاقتصادية "بحسب القسم" وفقاً للتصنيف الوطني للأنشطة الاقتصادية
            (ISIC4)بين الربع الأول لعامي 2025 و2026. تم استيراد بيانات عدد
            الأنشطة بحسب رمز النشاط (المستوى الأخير) من منصة البيانات المفتوحة -
            وزارة التجارة، وإعادة تجميعها إلى مستوى أعلى "مستوى القسم"بحسب
            ISIC4. (يمكن الاطلاع على التصنيف من خلال الموقع الرسمي لـ{" "}
            <a
              href="https://www.stats.gov.sa/ar/w/%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%84%D9%84%D8%A3%D9%86%D8%B4%D8%B7%D8%A9-%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%D9%8A%D8%A9?id=2812935"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#2c3e50",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              الهيئة العامة للإحصاء
            </a>
            ).
          </p>

          <div
            style={
              {
                // // backgroundColor: "#ffffff",
                // padding: "20px",
                // borderRadius: "12px",
                // boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                // border: "1px solid #e2e8f0",
              }
            }
          >
            <p
              style={{
                color: "#2d3748",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              قراءة في نتائج المخطط:
            </p>
            <ul
              style={{
                color: "#4a5568",
                fontSize: "15px",
                lineHeight: "1.7",
                paddingRight: "20px",
                margin: "0",
              }}
            >
              <li>
                قطاعات النمو القياسي: يتصدر قطاع "أنشطة التشييد المتخصصة" النمو
                المطلق بزيادة تتجاوز 35 ألف نشاط، كما حقق قطاع صُنع المنتجات
                الغذائية"قفزة نوعية بنمو تجاوز 148%، مما يشير إلى تحول الاستثمار
                نحو الأنشطة التصنيعية والخدمات اللوجستية.
              </li>

              <li>
                إعادة الهيكلة وتحديات النمو: يظهر المخطط تراجعاً في عدد الأنشطة
                التقليدية الكبرى مثل "تجارة التجزئة" و "تشييد المباني"، وهو ما
                قد يشير إلى حالة من التصحيح السوقي أو التحول في نماذج الأعمال.
              </li>
              <li>
                الفرق المطلق مقابل النسبي: تبرز بعض الأنشطة في نموها "المطلق"
                ولكنها تحقق نمواً "نسبياً" هائلاً (مثل صناعة الآلات)، مما يكشف
                عن قطاعات واعدة بدأت في البروز بقوة في المشهد الاقتصادي.
              </li>
              <li>
                الأنشطة المستحدثة: تم رصد بند بمسمى "أنشطة مستحدثة" بعدد 1,528
                نشاطاً؛ ويمثل هذا النطاق أنشطة ظهرت في الربع الأول من 2026 ولم
                يكن لها تصنيف قطاعي مطابق بمستوى (القسم) في الربع الأول من 2025.
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* حاوية الشارت */}
      <main
        style={{
          width: "1100px", // العرض الدقيق من ملف CSS القديم
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <DivergingChart />
      </main>
      {/* تذييل الصفحة - معلومات المُعد والمصادر */}
      {/* تذييل الصفحة - معلومات المُعد والمصادر */}
      <footer
      // style={{
      //   //   maxWidth: "1100px",
      //   //   marginTop: "50px",
      //   //   marginRight: "100px",
      //   //   //   margin: "50px 10px 20px auto",
      //   //   //   padding: "20px 15px",
      //   //   //   borderTop: "1px solid #e2e8f0",
      //   //   paddingRight: "20px",
      //   display: "flex",
      //   //   justifyContent: "space-between",
      //   alignItems: "flex-start",
      //   //   flexWrap: "wrap",
      //   //   //   gap: "20px",
      // }}
      >
        {/* جهة إعداد التقرير */}

        {/* يمكنك هنا إضافة قسم المصادر في جهة اليسار إذا أردت كما في المقترح السابق */}
        <div
          style={{
            textAlign: "right",
            fontSize: "12px",
            color: "#b0bec5",
            marginRight: "160px",
            marginTop: "20px",
          }}
        >
          المصادر: وزارة التجارة | الهيئة العامة للإحصاء
        </div>
      </footer>
    </div>
  );
};

export default EconomicReport;
