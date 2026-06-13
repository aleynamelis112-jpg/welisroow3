
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Clock, Send } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function ContactPage() {
  const faqs = [
    { q: "Ürünleriniz garantili mi?", a: "Evet, tüm ürünlerimiz kullanılan ağaç türüne ve işleme metoduna göre 2 yıl yapısal garantilidir." },
    { q: "Kişiye özel tasarım yapıyor musunuz?", a: "Kesinlikle. İstediğiniz ölçü, ağaç türü ve modelde tamamen size özel butik üretim yapabiliyoruz." },
    { q: "Türkiye'nin her yerine gönderim yapıyor musunuz?", a: "Evet, anlaşmalı lojistik firmalarımız ile Türkiye'nin her noktasına güvenli paketleme ile gönderim sağlıyoruz." },
    { q: "Bakım hizmeti veriyor musunuz?", a: "Zamanla yıpranan veya yenilenmesini istediğiniz ahşap ürünleriniz için profesyonel bakım ve restorasyon hizmeti sunuyoruz." }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Contact Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary leading-tight">İletişime Geçin</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Sorularınız, özel projeleriniz veya siparişleriniz için ekibimizle dilediğiniz zaman iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link 
                href="https://wa.me/905475717177" 
                target="_blank"
                className="glass p-8 rounded-3xl group hover:bg-green-50/50 transition-all border-none"
              >
                <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 fill-current" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-1">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Hızlı Destek Hattı</p>
                <p className="text-primary font-bold mt-2">0547 571 71 77</p>
              </Link>

              <Link 
                href="https://instagram.com/welis.rootwood" 
                target="_blank"
                className="glass p-8 rounded-3xl group hover:bg-pink-50/50 transition-all border-none"
              >
                <div className="bg-pink-100 w-14 h-14 rounded-2xl flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-1">Instagram</h3>
                <p className="text-muted-foreground text-sm">@welis.rootwood</p>
                <p className="text-primary font-bold mt-2">Takip Et</p>
              </Link>

              <div className="glass p-8 rounded-3xl border-none">
                <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-1">E-posta</h3>
                <p className="text-muted-foreground text-sm">Teknik Destek</p>
                <p className="text-primary font-bold mt-2 break-all">info@welisrootwood.com</p>
              </div>

              <div className="glass p-8 rounded-3xl border-none">
                <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-1">Mesai</h3>
                <p className="text-muted-foreground text-sm">Çalışma Saatlerimiz</p>
                <p className="text-primary font-bold mt-2">Pzt - Cmt: 09:00 - 19:00</p>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-none space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline font-bold">Atölye & Showroom</h3>
                  <p className="text-muted-foreground text-sm">Konya, Türkiye</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form className="glass p-8 md:p-12 rounded-[3rem] space-y-8 shadow-2xl border-none">
              <div className="space-y-2">
                <h3 className="text-3xl font-headline font-bold">Hızlı Mesaj</h3>
                <p className="text-muted-foreground font-light text-lg">Size en kısa sürede geri dönüş yapacağız.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ad Soyad</label>
                  <Input placeholder="Adınız Soyadınız" className="h-14 rounded-2xl border-primary/5 bg-secondary/50 focus:bg-white transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">E-posta</label>
                  <Input type="email" placeholder="example@mail.com" className="h-14 rounded-2xl border-primary/5 bg-secondary/50 focus:bg-white transition-all" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Mesajınız</label>
                <Textarea placeholder="Nasıl yardımcı olabiliriz?" className="min-h-[160px] rounded-2xl border-primary/5 bg-secondary/50 focus:bg-white transition-all p-6 text-lg" />
              </div>

              <Button className="w-full h-16 bg-primary text-white text-xl font-bold rounded-2xl hover:bg-primary/90 transition-all active:scale-[0.98] flex gap-3">
                <Send className="w-6 h-6" />
                Mesajı Gönder
              </Button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto space-y-16 py-12">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-6xl font-headline font-bold">Sık Sorulan Sorular</h2>
             <p className="text-muted-foreground text-lg">Merak ettiklerinizi burada bulabilirsiniz.</p>
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
