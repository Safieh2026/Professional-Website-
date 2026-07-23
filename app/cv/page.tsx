import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
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

export default async function CVPage() {
  const data = await client.fetch(`
    *[_type == "cv"][0]{
      ...,
      file{
        asset->
      }
    }
  `);

  return (
    <div className="container pt-4 pb-5">

      <h1 className="fw-bold text-success mb-4">CV</h1>

      <PortableText value={data.content} components={components} />

      {data.file?.asset?.url && (
        <p className="mt-4">
          <a
            href={data.file.asset.url}
            className="btn btn-success fw-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV (PDF)
          </a>
        </p>
      )}

    </div>
  );
}
