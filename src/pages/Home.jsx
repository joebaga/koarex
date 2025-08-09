import bgImage from "../assets/koarex.jpeg";

import "./Home.css";
// import bgImage from "../assets/bg.jpg";

export default function Home() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${bgImage})`
      }}
    >
      <h1> Coming soon </h1>
      <p>
        contact us
      </p>
      <button onClick={() => (window.location.href = "/about")}>
        Discover KOAREX
      </button>
    </div>
  );
}
