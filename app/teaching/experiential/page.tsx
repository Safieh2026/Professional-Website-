import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Carousel from "@/components/Carousel";
import type { ReactNode } from "react";

export const revalidate = 0;

const components = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p style={{ fontSize: "20px", lineHeight: "1.7", marginBottom: "1rem" }}>
        {children}
      </p>
    ),
  },
};

export default async function ExperientialLearning() {
  const data = await client.fetch(`*[_type == "teaching"][0]`);

  return (
    <div className="container pt-4 pb-5">
      <h1 className="fw-bold text-success mb-4">Experiential Learning</h1>

      {/* Centered Carousel */}
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4 d-flex justify-content-center">
          <Carousel
            images={data.experientialLearningImages}
            id="experientialCarousel"
          />
        </div>
      </div>

      {/* Text Below */}
      <div className="row">
        <div className="col-12">
          <PortableText
            value={data.experientialLearning}
            components={components}
          />
        </div>
      </div>
    </div>
  );
}
