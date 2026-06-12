
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { AIDesignAssistant } from "@/components/AIDesignAssistant";
import { ALL_PRODUCTS } from "@/lib/products";
import { ChevronRight, ArrowRight, ShieldCheck, Zap, Sparkles, MapPin } from "lucide-react";

export default function Home() {
  const heroImage = "/images/urun (1).jpg";
  const featuredProducts = ALL_PRODUCTS.slice(0, 4);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Premium Wood Interior"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-xs md:text-sm font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-accent" />
            Welis Root Wood
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white leading-tight drop-shadow-2xl">
            Doğadan Gelen <span className="text-accent italic">Tasarım</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-md">
            Doğadan Gelen Tasarımları Yaşam Alanlarınıza Taşıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white h-14 px-10 rounded-xl text-lg font-bold group" asChild>
              <Link href="/products">
                Ürünleri İncele
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white/20 h-14 px-10 rounded-xl text-lg font-bold" asChild>
              <Link href="https://wa.me/905475717177">Hızlı Sipariş</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 p-6 rounded-2xl transition-colors hover:bg-secondary/50">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-headline font-bold">Gerçek Doğallık</h3>
            <p className="text-muted-foreground">Her bir parçamız doğanın kendine has dokusunu ve hikayesini barındırır.</p>
          </div>
          <div className="space-y-4 p-6 rounded-2xl transition-colors hover:bg-secondary/50">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-headline font-bold">Usta İşçilik</h3>
            <p className="text-muted-foreground">Yılların deneyimiyle en kaliteli ahşapları zarafete dönüştürüyoruz.</p>
          </div>
          <div className="space-y-4 p-6 rounded-2xl transition-colors hover:bg-secondary/50">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-headline font-bold">Yerli Üretim</h3>
            <p className="text-muted-foreground">Tamamı kendi atölyemizde özenle tasarlanan yerli butik üretimler.</p>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <AIDesignAssistant />

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-accent font-bold uppercase tracking-widest text-sm">Özel Koleksiyon</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-primary">Öne Çıkan Tasarımlar</h3>
            </div>
            <Button variant="link" className="text-primary font-bold group flex items-center gap-2" asChild>
              <Link href="/products">
                Tümünü Gör
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -top-10 -left-10 w-full h-full bg-accent/10 rounded-3xl -z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2" />
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/urun (7).jpg"
                alt="Wood Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl hidden md:block max-w-xs shadow-2xl">
              <p className="text-xl font-headline font-bold text-primary italic">"Ağaç bir mirastır, biz sadece onu şekillendiriyoruz."</p>
            </div>
          </div>
          
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm">Hikayemiz</h2>
            <h3 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight">Geleneksel Sanatı Modern Çizgilerle Buluşturuyoruz</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welis Root Wood, doğanın sunduğu benzersiz formları evinizin bir parçası haline getirme tutkusuyla kuruldu. 
              Atölyemizde her kütük, her kök ve her parça ahşap, kendine has hikayesini anlatacak şekilde özenle işlenir.
            </p>
            <Button variant="outline" className="border-primary text-primary h-12 px-8 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors" asChild>
              <Link href="/about">Daha Fazla Bilgi</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
