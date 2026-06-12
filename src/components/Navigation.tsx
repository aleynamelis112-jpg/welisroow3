
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Ürünler", href: "/products" },
  { name: "Galeri", href: "/gallery" },
  { name: "Hakkımızda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b py-2"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-[60px] h-[60px] overflow-hidden rounded-md">
            <Image
              src="/images/logo2.jpg"
              alt="Welis Root Wood Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <span className={cn(
            "text-lg md:text-2xl font-headline font-bold tracking-tight transition-colors",
            isScrolled || mobileMenuOpen ? "text-primary" : "text-white"
          )}>
            Welis Root Wood
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-colors hover:text-accent relative py-2",
                  pathname === item.href 
                    ? "text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent" 
                    : isScrolled ? "text-muted-foreground" : "text-white/90"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/products" className="group">
              <Search className={cn(
                "w-5 h-5 cursor-pointer transition-colors group-hover:text-accent",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )} />
            </Link>
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold rounded-xl h-11 px-6 shadow-lg shadow-accent/20" asChild>
              <Link href="https://wa.me/905475717177">Hızlı Sipariş</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors rounded-xl",
            isScrolled || mobileMenuOpen ? "text-primary bg-secondary/50" : "text-white bg-white/10"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-headline font-bold p-2 rounded-xl transition-colors",
                  pathname === item.href ? "text-accent bg-accent/5" : "text-primary hover:bg-secondary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-primary/10" />
            <div className="flex flex-col gap-4">
               <Button className="w-full h-14 bg-primary text-white font-bold rounded-2xl" asChild>
                <Link href="https://wa.me/905475717177">WhatsApp Sipariş</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
