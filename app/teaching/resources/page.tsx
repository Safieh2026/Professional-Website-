import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import type { ReactNode } from "react";

const components = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p style={{ fontSize: "20px", lineHeight: "1.7", marginBottom: "1rem" }}>
        {children}
      </p>
    ),
  },
};

export default async function StudentResources() {
  const data = await client.fetch(`*[_type == "teaching"][0]`);

  return (
    <div className="container pt-4 pb-5">
      <h1 className="fw-bold text-success mb-4">Student Resources</h1>
      <PortableText value={data.studentResources} components={components} />
    </div>
  );
}
