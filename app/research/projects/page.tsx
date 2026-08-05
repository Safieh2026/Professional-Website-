import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Carousel from "@/components/Carousel";
import type { ReactNode } from "react";

const components = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="fs-5" style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
        {children}
      </p>
    ),
  },
};

export default async function ResearchProjects() {
  const data = await client.fetch(`*[_type == "research"][0]`);

  return (
    <div className="container pt-4 pb-5">
      <h1 className="fw-bold text-success mb-4">Current Projects</h1>

      {/* Centered Carousel */}
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4 d-flex justify-content-center">
          <Carousel images={data.projectsImages} id="researchProjectsCarousel" />
        </div>
      </div>

      {/* Text Below */}
      <div className="row">
        <div className="col-12">
          <PortableText value={data.projects} components={components} />
        </div>
      </div>
    </div>
  );
}
