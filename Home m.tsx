import { useState } from "react";

// مكونات أيقونات بديلة (بدون lucide-react)
const Icon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  return (
    <span className={`inline-block ${className}`}>
      {name === "Lock" && "🔒"}
      {name === "Shield" && "🛡️"}
      {name === "Users" && "👥"}
      {name === "MessageSquare" && "💬"}
      {name === "Eye" && "👁️"}
      {name === "Settings" && "⚙️"}
      {name === "Mail" && "📧"}
      {name === "Download" && "⬇️"}
      {name === "ArrowRight" && "→"}
      {name === "CheckCircle" && "✅"}
      {name === "Phone" && "📱"}
      {name === "ChevronDown" && "▼"}
      {name === "Star" && "⭐"}
      {name === "Zap" && "⚡"}
      {name === "Globe" && "🌍"}
      {name === "TrendingUp" && "📈"}
    </span>
  );
};

// مكون Button بديل
const Button = ({ 
  children, 
  className = "", 
  variant = "default",
  size = "default",
  ...props 
}: any) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition cursor-pointer gap-2";
  const variantClasses = {
    default: "bg-blue-700 text-white hover:bg-blue-800",
    outline: "border border-blue-700 text-blue-700 hover:bg-blue-50"
  };
  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function Home() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "التشفير الكامل",
      icon: "Lock",
      color: "bg-blue-700",
      shortDesc: "تشفير من النهاية إلى النهاية",
      fullDesc: "تشفير من النهاية إلى النهاية (E2E) لجميع المحادثات. لا أحد يمكنه قراءة رسائلك سوى المستقبل. نستخدم تقنية AES-256 الأعلى في العالم لضمان حماية بياناتك."
    },
    // ... بقية الميزات (نفس المصفوفة الأصلية)
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
      {/* Navigation Header */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: "2.5rem",
              height: "2.5rem",
              background: "linear-gradient(to bottom right, #1e3a8a, #3b82f6)",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <span style={{ color: "white", fontSize: "1.25rem" }}>🔒</span>
            </div>
            <div>
              <h1 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1e3a8a" }}>Keeping Distances</h1>
              <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>تطبيق الدردشة الآمن</p>
            </div>
          </div>
          
          <nav style={{ display: "none" }}>
            {/* سيتم إضافة التنقل لاحقاً */}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(to bottom, #eff6ff, white)",
        padding: "5rem 1rem"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center"
          }}>
            {/* Left Content */}
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{
                  display: "inline-block",
                  backgroundColor: "#dbeafe",
                  color: "#1e3a8a",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "1rem"
                }}>
                  🔒 التطبيق الأول في الأمان
                </div>
                <h2 style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  color: "#1e3a8a",
                  lineHeight: "1.25",
                  marginBottom: "1rem"
                }}>
                  تطبيق الدردشة الآمن
                </h2>
                <p style={{
                  fontSize: "1.25rem",
                  color: "#4b5563",
                  marginBottom: "1.5rem"
                }}>
                  اتصل بأمان وخصوصية تامة. حماية بيانات متقدمة مع تشفير من النهاية إلى النهاية. الخيار الأول لملايين المستخدمين حول العالم.
                </p>
              </div>
              
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "1rem" }}>
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white gap-2">
                  <Icon name="Download" />
                  تحميل الآن
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  اعرف المزيد
                  <Icon name="ArrowRight" className="mr-2 ml-2" />
                </Button>
              </div>
              
              {/* Contact Info */}
              <div style={{ paddingTop: "2rem", borderTop: "1px solid #e5e7eb", marginTop: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <Icon name="Phone" className="w-5 h-5 text-blue-700" />
                  <span style={{ color: "#374151", fontWeight: "600" }}>01070028368</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Icon name="Mail" className="w-5 h-5 text-blue-700" />
                  <a 
                    href="mailto:mohamed93308997@gmail.com" 
                    style={{ color: "#1e3a8a", fontWeight: "600", textDecoration: "none" }}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
                  >
                    البريد الفني
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: "4rem 1rem",
        background: "linear-gradient(to right, #1e3a8a, #1e3a8a)",
        color: "white"
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.25rem" }}>100K+</div>
              <div style={{ color: "#dbeafe", fontSize: "0.875rem" }}>مستخدم نشط</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.25rem" }}>50+</div>
              <div style={{ color: "#dbeafe", fontSize: "0.875rem" }}>دول مدعومة</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.25rem" }}>10M+</div>
              <div style={{ color: "#dbeafe", fontSize: "0.875rem" }}>رسائل آمنة يومياً</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "0.25rem" }}>{"<1ms"}</div>
              <div style={{ color: "#dbeafe", fontSize: "0.875rem" }}>وقت التشفير</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "5rem 1rem", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "1rem" }}>
              الميزات الرئيسية
            </h2>
            <p style={{ fontSize: "1.25rem", color: "#4b5563", maxWidth: "42rem", margin: "0 auto" }}>
              اكتشف كيف يوفر Keeping Distances أفضل تجربة دردشة آمنة مع ميزات متقدمة لا تجدها في أي تطبيق آخر
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem"
          }}>
            {features.slice(0, 3).map((feature) => (
              <div 
                key={feature.id}
                style={{
                  background: "linear-gradient(to bottom right, #eff6ff, white)",
                  padding: "2rem",
                  borderRadius: "1rem",
                  border: "1px solid #dbeafe",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
                onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    backgroundColor: feature.color,
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Icon name={feature.icon} className="w-7 h-7 text-white" />
                  </div>
                  <span style={{ 
                    transform: expandedFeature === feature.id ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s"
                  }}>
                    ▼
                  </span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1e3a8a", marginBottom: "0.75rem" }}>
                  {feature.title}
                </h3>
                
                {expandedFeature === feature.id ? (
                  <p style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: "1.625" }}>
                    {feature.fullDesc}
                  </p>
                ) : (
                  <p style={{ color: "#4b5563", fontSize: "0.875rem" }}>
                    {feature.shortDesc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1e3a8a", color: "white", padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <span style={{ color: "#1e3a8a" }}>🔒</span>
              </div>
              <div>
                <h3 style={{ fontWeight: "bold" }}>Keeping Distances</h3>
                <p style={{ fontSize: "0.75rem", color: "#93c5fd" }}>تطبيق الدردشة الآمن</p>
              </div>
            </div>
            <p style={{ color: "#93c5fd", fontSize: "0.875rem" }}>تطبيق الدردشة الآمن والموثوق الذي يحمي خصوصيتك</p>
          </div>

          <div style={{ borderTop: "1px solid #1e40af", paddingTop: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={{ color: "#93c5fd", fontSize: "0.875rem", marginBottom: "1rem" }}>
                © 2026 Keeping Distances. جميع الحقوق محفوظة.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="#" style={{ color: "#93c5fd", fontSize: "0.875rem" }}>تواصل معنا</a>
                <a href="#" style={{ color: "#93c5fd", fontSize: "0.875rem" }}>سياسة الخصوصية</a>
                <a href="#" style={{ color: "#93c5fd", fontSize: "0.875rem" }}>الشروط والأحكام</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}