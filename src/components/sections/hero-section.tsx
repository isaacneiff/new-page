
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero.svg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Transforme sua visão sobre saúde com a Dra. Carla Zanelatto
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          Veja a saúde com outros olhos — venha para a Zanelatto Academy.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
          <Link href="#contato">Agende um Horário</Link>
        </Button>
      </div>
    </section>
  );
}

