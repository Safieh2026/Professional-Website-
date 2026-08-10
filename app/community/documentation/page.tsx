import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Carousel from "@/components/Carousel";
import type { ReactNode } from "react";

export const revalidate = 0;

const components = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="fs-5" style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
        {children}
      </p>
    ),
  },
};

export default async function LanguageDocumentation() {
  const data = await client.fetch(`*[_type == "community"][0]`);

  return (
    <div className="container pt-4 pb-5">
      <h1 className="fw-bold text-success mb-4">
        Language Documentation & Revitalization
      </h1>

      <div className="row justify-content-center">
        <div className="col-md-3 mb-4 d-flex justify-content-center">
          <Carousel
            images={data.revitalizationImages}
            id="revitalizationCarousel"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <PortableText value={data.revitalization} components={components} />
        </div>
      </div>
    </div>
  );
}
