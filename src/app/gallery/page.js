
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Car Detailing Gallery | 3M Car Care Studio Gwalior",
  description:
    "Explore our premium car detailing, paint protection and ceramic coating gallery in Gwalior.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#08090b] pt-24 text-white">
      <Gallery />
    </main>
  );
}
