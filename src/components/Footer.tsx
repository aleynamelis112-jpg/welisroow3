
import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6 lg:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-headline font-bold text-accent">Welis Root Wood</h3>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Doğadan gelen tasarımları, ustalığın zarafetiyle birleştirerek yaşam alanlarınıza taşıyoruz. 
            Doğal ahşabın sıcaklığını ve ruhunu keşfedin.
          </p>
          <div className="flex gap-4">
            <Link href="https://instagram.com/welis.rootwood" className="hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-headline font-bold mb-6">Hızlı Bağlantılar</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link href="/products" className="hover:text-accent">Ürün Koleksiyonu</Link></li>
            <li><Link href="/gallery" className="hover:text-gallery">Uygulama Galerisi</Link></li>
            <li><Link href="/about" className="hover:text-accent">Hakkımızda</Link></li>
            <li><Link href="/contact" className="hover:text-accent">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold mb-6">Hizmetlerimiz</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>Özel Tasarım Mobilya</li>
            <li>İç Mekan Ahşap Uygulamaları</li>
            <li>Dış Mekan Çözümleri</li>
            <li>Doğal Ahşap Dekorasyon</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-bold mb-6">İletişim</h4>
          <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
            <Phone className="w-4 h-4 text-accent" />
            <span>0547 571 71 77</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
            <Mail className="w-4 h-4 text-accent" />
            <span>info@welisrootwood.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
            <MapPin className="w-4 h-4 text-accent" />
            <span>İstanbul, Türkiye</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/60">
        © 2026 Welis Root Wood - Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}
