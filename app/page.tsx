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
            I am an Associate Professor of Linguistics in the Department of Language Studies at the University of Toronto Scarborough. My work explores language as deeply human: a way we express who we are, build relationships, and make sense of the world. I teach linguistics courses on syntax, English grammar, sociolinguistics, and language diversity, with a focus on creating engaging, accessible learning experiences connected to students’ lives.
          </p>
          <p className="mt-3 fs-5">
            My work brings together teaching innovation, digital learning, responsible AI use in higher education, and community-engaged teaching. Through my teaching and research, I aim to help students see linguistics as connected to how they communicate, think, learn, and move through the world.
          </p>
        </div>
      </div>

    </div>
  );
}
