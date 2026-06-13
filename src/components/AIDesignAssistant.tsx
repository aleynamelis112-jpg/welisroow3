
"use client";

import { useState } from "react";
import { aiDesignStyleAssistant, type DesignStyleAssistantOutput } from "@/ai/flows/ai-design-style-assistant";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Sparkles, Wand2, MessageCircle } from "lucide-react";
import Link from "next/link";

export function AIDesignAssistant() {
  const [preference, setPreference] = useState("");
  const [result, setResult] = useState<DesignStyleAssistantOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!preference) return;

    setIsLoading(true);
    try {
      const response = await aiDesignStyleAssistant({ designPreference: preference });
      setResult(response);
    } catch (error) {
      // Error handling is handled silently to maintain production UX
    } finally {
      setIsLoading(false);
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
            Yapay Zeka Tasarım Asistanı
          </div>
          <h2 className="text-4xl md:text-7xl font-headline font-bold mb-6">Sizin İçin En İdeal Ahşabı Bulalım</h2>
          <p className="text-lg md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Hayalinizdeki alanı bize tarif edin, Welis Root Wood koleksiyonundan size özel öneriler sunalım.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <input
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              placeholder="Örn: Modern bir salon için kütük orta sehpa..."
              className="flex-grow h-16 bg-white/10 border border-white/20 text-white placeholder:text-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent text-lg px-8 transition-all"
            />
            <Button 
              disabled={isLoading}
              className="h-16 px-10 bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold flex gap-3 shrink-0 transition-all active:scale-95 text-lg shadow-2xl shadow-accent/40"
            >
              {isLoading ? <Loader2 className="animate-spin w-6 h-6" /> : <Wand2 className="w-6 h-6" />}
              Önerileri Gör
            </Button>
          </form>
        </div>

        {result && (
          <div className="max-w-7xl mx-auto text-left animate-fade-in space-y-12">
            <Card className="glass border-white/10 bg-white/5 rounded-[3rem] shadow-2xl p-6 md:p-12">
              <CardHeader className="px-0 pt-0 mb-8">
                <CardTitle className="text-white font-headline text-3xl md:text-4xl flex items-center gap-4">
                  <div className="bg-accent/20 p-4 rounded-2xl shadow-inner"><Sparkles className="w-8 h-8 text-accent" /></div>
                  Size Özel Tasarım Fikirleri
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 text-primary-foreground/90 text-xl leading-relaxed whitespace-pre-wrap font-light">
                {result.designIdeas}
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {result.suggestedProducts.map((product, idx) => (
                <Card key={idx} className="glass border-white/10 bg-white/10 group transition-all hover:bg-white/20 rounded-[3rem] shadow-xl overflow-hidden flex flex-col h-full">
                  <CardHeader className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <CardTitle className="text-white font-headline text-2xl group-hover:text-accent transition-colors">{product.name}</CardTitle>
                      <span className="text-[10px] bg-accent text-white px-4 py-1.5 rounded-full uppercase tracking-widest font-bold">
                        {product.category}
                      </span>
                    </div>
                    <CardDescription className="text-white/70 text-lg leading-relaxed font-light">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 mt-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-8 gap-6">
                      <div className="flex flex-col items-center sm:items-start">
                        <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-1">Başlangıç Fiyatı</span>
                        <span className="text-3xl font-bold text-white">0 TL</span>
                      </div>
                      <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-accent hover:text-white rounded-2xl font-bold gap-3 px-8 h-14 shadow-xl transition-all" asChild>
                        <Link href={`https://wa.me/905475717177?text=${encodeURIComponent(`${product.name} hakkında bilgi almak istiyorum.`)}`} target="_blank">
                          <MessageCircle className="w-5 h-5" />
                          Detaylı Bilgi
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
