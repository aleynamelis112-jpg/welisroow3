"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Wand2, MessageCircle } from "lucide-react";
import Link from "next/link";

const suggestions = [
  {
    title: "Rustik ve sıcak salon",
    description: "Doğal kenarlı ceviz masa, zeytin ağacı sehpa ve sıcak LED aydınlatma ile samimi bir atmosfer.",
  },
  {
    title: "Modern ofis alanı",
    description: "Epoksi tasarım ofis masası, minimalist raf seti ve masif ahşap detaylarla güçlü bir çalışma alanı.",
  },
  {
    title: "Doğal dekorasyon köşesi",
    description: "Kök ahşap aydınlatma, dekoratif odunluk ve el yapımı aksesuarlarla karakterli bir köşe.",
  },
];

export function AIDesignAssistant() {
  const [preference, setPreference] = useState("");
  const [selected, setSelected] = useState(suggestions[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = preference.toLowerCase();
    if (value.includes("ofis") || value.includes("çalış")) {
      setSelected(suggestions[1]);
    } else if (value.includes("dekor") || value.includes("ışık") || value.includes("köşe")) {
      setSelected(suggestions[2]);
    } else {
      setSelected(suggestions[0]);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Tasarım Önerisi
          </div>
          <h2 className="text-4xl md:text-7xl font-headline font-bold mb-6">Sizin İçin En İdeal Ahşabı Bulalım</h2>
          <p className="text-lg md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Hayalinizdeki alanı tarif edin, Welis Root Wood koleksiyonundan size uygun fikirler sunalım.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <input
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              placeholder="Örn: rustik salon, modern ofis, doğal dekorasyon..."
              className="flex-1 h-16 px-8 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent text-lg backdrop-blur-md"
            />
            <Button type="submit" className="h-16 px-8 bg-accent hover:bg-accent/90 rounded-2xl text-white font-bold text-lg">
              <Wand2 className="w-5 h-5 mr-2" />
              Öneri Al
            </Button>
          </form>
        </div>

        <Card className="max-w-3xl mx-auto bg-white text-primary border-none shadow-2xl rounded-[2rem] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CardHeader className="p-8 pb-4">
            <CardDescription className="text-accent font-bold uppercase tracking-widest">Welis Root Wood Önerisi</CardDescription>
            <CardTitle className="text-3xl font-headline">{selected.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-2 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{selected.description}</p>
            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white rounded-xl h-12 px-6 font-bold" asChild>
              <Link href="https://wa.me/905475717177" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp ile Sipariş Ver
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
