"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center">
          <Button variant="ghost" size="icon" aria-label="Home">
            <Home className="h-5 w-5" />
          </Button>
          <span className="ml-2 font-medium">ရန်ကုန်စျေးနှုန်း</span>
        </Link>
      </div>
    </header>
  );
}
