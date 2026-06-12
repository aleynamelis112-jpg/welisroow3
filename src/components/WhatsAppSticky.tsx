
"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppSticky() {
  return (
    <Link
      href="https://wa.me/905475717177"
      target="_blank"
      className={cn(
        "fixed z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center animate-bounce duration-[3000ms]",
        "bottom-24 right-6 lg:bottom-8 lg:right-8" // Desktopta daha köşede, mobilde barın üstünde
      )}
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-current" />
    </Link>
  );
}
