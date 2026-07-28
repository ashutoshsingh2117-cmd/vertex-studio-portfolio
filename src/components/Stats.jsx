function Stats() {
  const stats = [
    {
      number: "Premium",
      title: "Quality Design",
    },
    {
      number: "Fast",
      title: "Delivery",
    },
    {
      number: "100%",
      title: "Responsive",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section
      style={{
        background: "#0D0D0D",
        padding: "100px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "30px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,215,0,0.2)",
              borderRadius: "25px",
              padding: "40px",
              textAlign: "center",
              transition: "all .4s ease",
              cursor: "pointer",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(255,215,0,.25)";
              e.currentTarget.style.border =
                "1px solid rgba(255,215,0,.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border =
                "1px solid rgba(255,215,0,0.2)";
            }}
          >
            <h2
              style={{
                color: "#FFD700",
                fontSize: "46px",
                marginBottom: "15px",
                textShadow: "0 0 20px rgba(255,215,0,.35)",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#CCCCCC",
                fontSize: "19px",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;