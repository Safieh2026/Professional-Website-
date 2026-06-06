"use client";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-4">
      <div className="container">
        <a className="navbar-brand fw-semibold text-success" href="/">
          Safieh Moghaddam
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/teaching">Teaching</a></li>
            <li className="nav-item"><a className="nav-link" href="/research">Research and Scholarship</a></li>
            <li className="nav-item"><a className="nav-link" href="/community">Community Partnership</a></li>
            <li className="nav-item"><a className="nav-link" href="/publications">Publications and Featured Work</a></li>
            <li className="nav-item"><a className="nav-link" href="/cv">CV</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
