export default function StartupScreen({ closingStartup }) {
  return (
    <div className={`startup-screen ${closingStartup ? "closing" : ""}`}>
      <div className="startup-text-wrap">
        <div className="startup-avatar-wrap">
          <img
            src="/images/profile.png"
            alt="Abhishek Mishra"
            className="startup-avatar"
          />
        </div>
        <h1 className="startup-text startup-electric-text">
          <span className="startup-word" style={{ animationDelay: "0s" }}>Welcome</span>
          <span className="startup-word" style={{ animationDelay: "0.2s" }}>to</span>
          <span className="startup-word" style={{ animationDelay: "0.4s" }}>Mishra</span>
          <span className="startup-word" style={{ animationDelay: "0.6s" }}>Jii</span>
          <span className="startup-word" style={{ animationDelay: "0.8s" }}>Portfolio</span>
        </h1>
      </div>
    </div>
  );
}
