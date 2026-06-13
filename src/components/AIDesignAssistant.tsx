"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";

export function AIDesignAssistant() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Özel Tasarım Danışmanlığı
          </div>
          <h2 className="text-4xl md:text-7xl font-headline font-bold mb-6">Sizin İçin En İdeal Ahşabı Bulalım</h2>
          <p className="text-lg md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Hayalinizdeki alanı bize WhatsApp üzerinden tarif edin; Welis Root Wood koleksiyonundan size özel öneriler sunalım.
          </p>
          <Card className="glass border-white/10 bg-white/5 rounded-[3rem] shadow-2xl p-6 md:p-10">
            <CardContent className="px-0 text-primary-foreground/90 text-xl leading-relaxed font-light">
              <p className="mb-8">Salon, bahçe, ofis veya dekorasyon projeniz için doğal kök ahşap ürünleri birlikte seçelim.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold gap-3 px-8 h-14 shadow-xl transition-all" asChild>
                <Link href="https://wa.me/905475717177?text=Welis%20Root%20Wood%20%C3%BCr%C3%BCnleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp ile Bilgi Al
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
