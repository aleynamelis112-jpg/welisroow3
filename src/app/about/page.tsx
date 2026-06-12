
import Image from "next/image";
import { CheckCircle2, Award, Hammer, TreePine } from "lucide-react";

export default function AboutPage() {
  const workshopImg = "/images/urun (14).jpg";

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-primary leading-tight">
              Doğadan <span className="text-accent italic">Gelen</span> Tutku
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welis Root Wood olarak, ağacın sadece bir malzeme değil, yaşayan bir hikaye olduğuna inanıyoruz. 
              Doğanın milyonlarca yılda şekillendirdiği kökleri ve gövdeleri, ustalığın sabrıyla birleştirerek 
              günümüzün modern yaşam alanlarına taşıyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="font-bold text-primary">Eşsiz Tasarımlar</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="font-bold text-primary">Sürdürülebilir Kaynaklar</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="font-bold text-primary">Ömürlük Kalite</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 p-4 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="font-bold text-primary">Kişiye Özel Üretim</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in duration-1000">
            <Image
              src={workshopImg}
              alt="Artisan Woodworking"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary text-white p-12 lg:p-24 rounded-[4rem] grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] grayscale" />
          </div>
          <div className="space-y-4 relative z-10 transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Hammer className="w-10 h-10 text-accent" />
            </div>
            <h4 className="text-6xl font-headline font-bold">10+</h4>
            <p className="text-primary-foreground/70 uppercase tracking-[0.2em] text-xs font-bold">Yıllık Deneyim</p>
          </div>
          <div className="space-y-4 relative z-10 transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <TreePine className="w-10 h-10 text-accent" />
            </div>
            <h4 className="text-6xl font-headline font-bold">500+</h4>
            <p className="text-primary-foreground/70 uppercase tracking-[0.2em] text-xs font-bold">Mutlu Müşteri</p>
          </div>
          <div className="space-y-4 relative z-10 transition-transform hover:scale-105">
            <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-accent" />
            </div>
            <h4 className="text-6xl font-headline font-bold">1000+</h4>
            <p className="text-primary-foreground/70 uppercase tracking-[0.2em] text-xs font-bold">Tamamlanmış Proje</p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary">Sanat ve Doğa</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic font-light">
            "Biz sadece mobilya üretmiyoruz; doğanın yüzyıllardır ilmek ilmek işlediği o muazzam sanatı, 
            yaşam alanlarınızda her gün dokunabileceğiniz ve hissedebileceğiniz bir gerçekliğe dönüştürüyoruz. 
            Her Welis Root Wood ürünü, doğaya duyduğumuz saygının ve estetiğe olan inancımızın birer meyvesidir."
          </p>
        </section>
      </div>
    </div>
  );
}
