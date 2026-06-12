
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Image as ImageIcon, Info, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { name: "Ana Sayfa", icon: Home, href: "/" },
  { name: "Ürünler", icon: Grid, href: "/products" },
  { name: "Galeri", icon: ImageIcon, href: "/gallery" },
  { name: "İletişim", icon: Phone, href: "/contact" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t z-50 flex items-center justify-around py-3 px-2 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] rounded-t-[2rem]">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1.5 transition-all p-2 rounded-2xl",
              isActive ? "text-accent bg-accent/5" : "text-muted-foreground hover:text-primary"
            )}
          >
            <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
            <span className="text-[11px] font-bold tracking-tight">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
