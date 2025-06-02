
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Removed Leaf as it's not used here
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#cursos', label: 'Cursos' },
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
        isScrolled ? "bg-card shadow-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="#home"
          aria-label="Zanelatto Academy"
          className="block" // Changed from flex, removed text styling
          style={{
            width: '180px', // Adjust width as per logo's aspect ratio and desired size
            height: '40px', // Adjust height to fit well within header padding
            backgroundImage: "url('/assets/LOGO.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        >
          <span className="sr-only">Zanelatto Academy</span>
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
                <Link 
                  href="#home" 
                  aria-label="Zanelatto Academy"
                  className="block" // Changed from flex, removed text styling
                  style={{
                    width: '150px', // Adjust width for mobile sheet if needed
                    height: '35px',  // Adjust height for mobile sheet if needed
                    backgroundImage: "url('/assets/LOGO.svg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                   <span className="sr-only">Zanelatto Academy</span>
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon"> {/* Changed to ghost for consistency */}
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
