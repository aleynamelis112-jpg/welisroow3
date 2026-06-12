
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContactPage() {
  const faqs = [
    { q: "Ürünleriniz garantili mi?", a: "Evet, tüm ürünlerimiz kullanılan ağaç türüne ve işleme metoduna göre 2 yıl yapısal garantilidir." },
    { q: "Kişiye özel tasarım yapıyor musunuz?", a: "Kesinlikle. İstediğiniz ölçü, ağaç türü ve modelde tamamen size özel butik üretim yapabiliyoruz." },
    { q: "Türkiye'nin her yerine gönderim yapıyor musunuz?", a: "Evet, anlaşmalı lojistik firmalarımız ile Türkiye'nin her noktasına güvenli paketleme ile gönderim sağlıyoruz." },
    { q: "Bakım hizmeti veriyor musunuz?", a: "Zamanla yıpranan veya yenilenmesini istediğiniz ahşap ürünleriniz için profesyonel bakım ve restorasyon hizmeti sunuyoruz." }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Contact Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary leading-tight">İletişime Geçin</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Sorularınız, özel projeleriniz veya siparişleriniz için ekibimizle dilediğiniz zaman iletişime geçebilirsiniz. Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass p-8 rounded-3xl space-y-4 hover:shadow-2xl transition-all border-none">
                <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center text-accent">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold">Telefon</h3>
                <p className="text-muted-foreground font-medium">0547 571 71 77</p>
              </div>
              <div className="glass p-8 rounded-3xl space-y-4 hover:shadow-2xl transition-all border-none">
                <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center text-accent">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold">E-posta</h3>
                <p className="text-muted-foreground font-medium">info@welisrootwood.com</p>
              </div>
              <div className="glass p-8 rounded-3xl space-y-4 hover:shadow-2xl transition-all border-none">
                <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center text-accent">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold">Adres</h3>
                <p className="text-muted-foreground font-medium">İstanbul, Türkiye</p>
              </div>
              <div className="glass p-8 rounded-3xl space-y-4 hover:shadow-2xl transition-all border-none">
                <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center text-accent">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold">Çalışma Saatleri</h3>
                <p className="text-muted-foreground font-medium">Pzt - Cmt: 09:00 - 19:00</p>
              </div>
            </div>

            <div className="bg-green-600 text-white p-8 md:p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 justify-between shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-3 relative z-10 text-center md:text-left">
                <h3 className="text-3xl font-headline font-bold">Hızlı WhatsApp Destek</h3>
                <p className="text-green-50/80 text-lg">Saniyeler içinde temsilcimize bağlanın.</p>
              </div>
              <Button size="lg" className="w-full md:w-auto bg-white text-green-600 hover:bg-green-50 h-16 px-10 rounded-2xl font-bold flex gap-3 text-lg shadow-xl relative z-10" asChild>
                <a href="https://wa.me/905475717177" target="_blank">
                  <MessageCircle className="w-6 h-6 fill-current" />
                  Sohbeti Başlat
                </a>
              </Button>
            </div>
          </div>

          <form className="glass p-8 md:p-16 rounded-[4rem] space-y-8 shadow-2xl border-none">
            <h3 className="text-3xl font-headline font-bold mb-4">Mesaj Gönderin</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ad Soyad</label>
                <Input placeholder="Adınız Soyadınız" className="h-14 rounded-2xl border-primary/5 bg-secondary/50 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">E-posta</label>
                <Input type="email" placeholder="example@mail.com" className="h-14 rounded-2xl border-primary/5 bg-secondary/50 focus:bg-white transition-colors" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Konu</label>
              <Input placeholder="Mesaj Konusu" className="h-14 rounded-2xl border-primary/5 bg-secondary/50 focus:bg-white transition-colors" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Mesaj</label>
              <Textarea placeholder="Size nasıl yardımcı olabiliriz?" className="min-h-[180px] rounded-2xl border-primary/5 bg-secondary/50 focus:bg-white transition-colors p-6" />
            </div>
            <Button className="w-full h-16 bg-primary text-white text-xl font-bold rounded-2xl hover:bg-primary/90 transition-all active:scale-[0.98] shadow-xl shadow-primary/20">
              Gönder
            </Button>
          </form>
        </div>

        {/* Map Section */}
        <section className="space-y-12">
          <h2 className="text-4xl font-headline font-bold text-center">Bizi Ziyaret Edin</h2>
          <div className="w-full h-[500px] bg-muted rounded-[4rem] overflow-hidden relative shadow-2xl border-8 border-white">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192639.1764724816!2d28.832814!3d41.005321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1cc1e01f4ca7d!2sIstanbul!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str" 
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all border-none" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto space-y-16 py-12">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-6xl font-headline font-bold">Sık Sorulan Sorular</h2>
             <p className="text-muted-foreground text-lg">Hizmetlerimiz hakkında daha fazla bilgi edinin.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-none bg-secondary/30 rounded-3xl px-8 overflow-hidden">
                <AccordionTrigger className="text-xl font-bold hover:text-accent py-8 no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-8 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
