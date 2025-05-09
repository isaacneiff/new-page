"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-card shadow-md py-4" : "bg-transparent py-6" // Original design had white navbar, bg-card is white
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className={cn("flex items-center gap-2 text-2xl font-bold transition-colors", isScrolled ? "text-secondary" : "text-white hover:text-muted" )}>
          <Leaf size={28} />
          Carla Nutricionista
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("font-medium transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-muted-foreground/80" )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white hover:text-muted-foreground/80")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="#home" className="flex items-center gap-2 text-xl font-bold text-secondary" onClick={() => setIsMobileMenuOpen(false)}>
                  <Leaf size={24} />
                  Carla Nutricionista
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <X className="h-6 w-6 text-foreground" />
                    <span className="sr-only">Fechar menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="text-lg text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
