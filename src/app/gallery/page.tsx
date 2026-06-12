
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ALL_PRODUCTS } from "@/lib/products";

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary">Proje Galerisi</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tamamladığımız butik projeler ve hayata geçirdiğimiz eşsiz tasarımlardan ilham alın. 
            Doğanın sanatını yaşam alanlarına nasıl entegre ettiğimizi görün.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ALL_PRODUCTS.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-3xl cursor-pointer break-inside-avoid shadow-xl bg-white h-[400px]">
              <Image
                src={img.imageUrl}
                alt={img.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white">
                <Badge className="w-fit mb-3 bg-accent text-white border-none px-3 py-1 text-[10px] uppercase font-bold tracking-widest">{img.category}</Badge>
                <h3 className="text-2xl font-headline font-bold leading-tight">{img.name}</h3>
                <p className="text-sm text-white/70 line-clamp-2 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
