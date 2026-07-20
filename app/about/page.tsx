import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="fs-5" style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
        {children}
      </p>
    ),
  },
};

export default async function About() {
  const data = await client.fetch(`*[_type == "about"][0]`);

  return (
    <div className="container pt-4 pb-5">

      <h1 className="fw-bold text-success mb-4">About Me</h1>

      <div className="row gx-5">

        {/* Image Carousel */}
        {data.images?.length > 0 && (
          <div className="col-md-3 mb-4">

            <div id="aboutCarousel" className="carousel slide">
              <div className="carousel-inner">

                {data.images.map((img: any, index: number) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={urlFor(img).width(600).url()}
                      className="d-block w-100 img-fluid rounded shadow-sm"
                      alt={`Profile image ${index + 1}`}
                    />
                  </div>
                ))}

              </div>

              {/* Controls */}
              {data.images.length > 1 && (
                <>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#aboutCarousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" />
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#aboutCarousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" />
                  </button>
                </>
              )}
            </div>

          </div>
        )}

        {/* Main Content */}
        <div className={data.images?.length > 0 ? "col-md-9" : "col-12"}>

          <PortableText value={data.bio} components={components} />

          {data.email && (
            <p className="fs-5 mt-3">
              <strong>Email:</strong> {data.email}
            </p>
          )}

          {data.office && (
            <p className="fs-5">
              <strong>Office:</strong> {data.office}
            </p>
          )}

          {data.researchInterests?.length > 0 && (
            <p className="fs-5">
              <strong>Research Interests:</strong>{" "}
              {data.researchInterests.join(", ")}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}