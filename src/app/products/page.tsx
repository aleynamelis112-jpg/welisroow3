
"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ALL_PRODUCTS } from "@/lib/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, PackageOpen, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["Hepsi", "Mobilya", "Dekorasyon", "İç Mekan Uygulamaları", "Dış Mekan Uygulamaları"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Hepsi");

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                            p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "Hepsi" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary">Koleksiyonumuz</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Doğanın en saf haliyle işlenmiş, yaşam alanlarınıza ruh katacak butik ahşap tasarımlarımızı keşfedin. Her parça tek ve size özeldir.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between glass p-6 rounded-[2.5rem] sticky top-24 z-30 shadow-2xl mb-12">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ürün veya kategori ara..."
              className="w-full h-14 pl-14 pr-6 bg-white border border-primary/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-xl h-12 px-6 font-bold transition-all border-none",
                  activeCategory === cat 
                    ? "bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent/90" 
                    : "bg-secondary text-primary hover:bg-secondary/80"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center gap-2 text-muted-foreground font-bold mb-8 uppercase tracking-widest text-xs">
          <SlidersHorizontal className="w-4 h-4" />
          <span>{filteredProducts.length} Ürün Listeleniyor</span>
        </div>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center space-y-8">
            <div className="bg-secondary p-12 rounded-full">
              <PackageOpen className="w-24 h-24 text-muted-foreground/20" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary">Aradığınız Ürünü Bulamadık</h3>
              <p className="text-muted-foreground max-w-md mx-auto text-lg font-light">
                Farklı anahtar kelimeler deneyebilir veya filtreleri temizleyerek tüm koleksiyonu görebilirsiniz.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="h-14 px-10 rounded-2xl font-bold border-primary text-primary hover:bg-primary hover:text-white transition-all"
              onClick={() => {setSearch(""); setActiveCategory("Hepsi");}}
            >
              Filtreleri Temizle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
