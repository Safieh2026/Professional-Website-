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

export default async function StudentResearchers() {
  const data = await client.fetch(`*[_type == "research"][0]`);

  return (
    <div className="container pt-4 pb-5">
      <h1 className="fw-bold text-success mb-4">Student Researchers</h1>

      <PortableText value={data.students} components={components} />
    </div>
  );
}
