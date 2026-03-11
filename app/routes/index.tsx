export function meta() {
  return [
    { title: "Janus - Welcome" },
    { name: "description", content: "Welcome to Janus!" },
  ];
}

export default function Welcome() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    color: "#fff",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    textAlign: "center",
    padding: "2rem",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "4rem",
    fontWeight: "800",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };


  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to Janus</h1>
    </div>
  );
}
