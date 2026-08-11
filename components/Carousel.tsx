import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function SubpageCarousel({ images, id }: { images: any[]; id: string }) {
  if (!images || images.length === 0) return null;

  return (
    <div id={id} className="carousel slide">
      <div className="carousel-inner">

        {images.map((img: any, index: number) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            
            <img
              src={urlFor(img).width(600).url()}
              className="d-block w-100 img-fluid rounded shadow-sm subpage-carousel-img"
            />

          </div>
        ))}

      </div>

      {images.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </>
      )}
    </div>
  );
}
