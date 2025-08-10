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
      <h1> Korean Touch, Global Reach </h1>
      <p>
        coming soon...
      </p>
      <p>
        contact us
        
      </p>
      <p>
        
        📩 Email: info@koarex.com
      </p>

      <p>
        
        📞 WhatsApp: +82 10 2488 0555
      </p>
      <button onClick={() => (window.location.href = "/about")}>
        Discover KOAREX
      </button>
    </div>
  );
}
