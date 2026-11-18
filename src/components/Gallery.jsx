
import Image from "next/image";

const images = [
  {
    src: "/images/gallery-1.jpg",
    title: "Exterior Detailing",
  },
  {
    src: "/images/gallery-2.jpg",
    title: "Paint Protection",
  },
  {
    src: "/images/gallery-3.jpg",
    title: "Premium Finish",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-[#101115]">
      <div className="container-custom">
        <div className="mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[.25em] text-red-500">
            Our Work
          </p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            The Art of <span className="text-red-500">Detailing.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {images.map((item) => (
            <div
              key={item.src}
              className="group relative h-[350px] overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <h3 className="absolute bottom-7 left-6 text-xl font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
