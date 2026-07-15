import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import type { ReactNode } from "react";

const components = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p style={{ fontSize: "20px", lineHeight: "1.6" }}>{children}</p>
    ),
  },
};


const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function Home() {
  const data = await client.fetch(`*[_type == "homepage"][0]`);

  return (
    <div className="container pt-3 pb-5">

      <div className="row align-items-center gx-5">
        <div className="col-md-3 text-center mb-4 mb-md-0">
          {data.image && (
            <img
              src={urlFor(data.image).width(600).url()}
              alt={data.title}
              className="img-fluid rounded shadow-sm"
            />
          )}
        </div>

        <div className="col-md-9">
          <h1 className="fw-bold text-success">{data.title}</h1>
          <h4 className="text-muted">{data.subtitle}</h4>

          <PortableText value={data.intro} components={components} />        
        
        </div>
      </div>

    </div>
  );
}

