export default function Home() {
  return (
    <div className="container pt-3 pb-5">

      {/* Hero Section */}
      <div className="row align-items-center gx-5">
        <div className="col-md-3 text-center mb-4 mb-md-0">
          <img
            src="/portrait.jpg"
            alt="Professor Portrait"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="col-md-9">
          <h1 className="fw-bold text-success">Safieh Moghaddam</h1>
          <h4 className="text-muted">Department of Language Studies, University of Toronto</h4>

          <p className="mt-3 fs-5">
            Welcome to my academic homepage. I am a faculty member in the Department of Language Studies at the University of Toronto. 
            My work focuses on the syntax and morphology of endangered languages, teaching and learning strategies, online learning, hybrid learning, and the structure of online courses. You can learn more about my research, teaching, and publications using the navigation above.
          </p>
        </div>
      </div>

    </div>
  );
}
