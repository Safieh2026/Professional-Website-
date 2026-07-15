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

            {/* ---------------- Teaching ---------------- */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Teaching
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/teaching">Teaching Overview</a></li>
                <li><a className="dropdown-item" href="/teaching/philosophy">Teaching Philosophy</a></li>
                <li><a className="dropdown-item" href="/teaching/courses">Courses</a></li>
                <li><a className="dropdown-item" href="/teaching/resources">Student Resources</a></li>
                <li><a className="dropdown-item" href="/teaching/experiential">Experiential Learning</a></li>
              </ul>
            </li>

            {/* ---------------- Research ---------------- */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Research & Scholarship
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/research">Research & Scholarship Overview</a></li>
                <li><a className="dropdown-item" href="/research/areas">Research Areas</a></li>
                <li><a className="dropdown-item" href="/research/projects">Current Projects</a></li>
                <li><a className="dropdown-item" href="/research/students">Student Researchers</a></li>
                <li><a className="dropdown-item" href="/research/collaborators">Research Collaborators</a></li>
              </ul>
            </li>

            {/* ---------------- Community ---------------- */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Community Partnership
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/community">Community Partnership Overview</a></li>
                <li><a className="dropdown-item" href="/community/documentation">Language Documentation & Revitalization</a></li>
                <li><a className="dropdown-item" href="/community/documentary">Documentary Project</a></li>
                <li><a className="dropdown-item" href="/community/events">Community Events</a></li>
              </ul>
            </li>

            {/* ---------------- Publications ---------------- */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Publications and Featured Work
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/publications">Publications and Featured Work Overview</a></li>
                <li><a className="dropdown-item" href="/publications/articles">Articles</a></li>
                <li><a className="dropdown-item" href="/publications/media">Media & Interviews</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="/cv">CV</a></li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
