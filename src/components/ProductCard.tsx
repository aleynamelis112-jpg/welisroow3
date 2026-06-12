
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
}

export function ProductCard({ id, name, description, price, category, imageUrl }: ProductCardProps) {
  return (
    <div className="group relative glass rounded-[2rem] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 border-none">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 backdrop-blur-md text-primary font-bold border-none shadow-sm px-4 py-1.5 rounded-xl uppercase text-[10px] tracking-widest">
            {category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-headline font-bold text-primary leading-tight group-hover:text-accent transition-colors">{name}</h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-8 flex-grow leading-relaxed font-light">
          {description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-secondary">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Fiyat</span>
            <span className="text-2xl font-bold text-primary">{price}</span>
          </div>
          
          <Button 
            className="bg-accent hover:bg-accent/90 text-white flex gap-2 rounded-2xl px-6 h-12 shadow-lg shadow-accent/20 transition-all hover:px-8"
            asChild
          >
            <Link href={`https://wa.me/905475717177?text=${encodeURIComponent(`${name} hakkında bilgi almak istiyorum.`)}`} target="_blank">
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="text-xs font-bold">Sipariş</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
