import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/public/assets/hero.svg"
        alt="Background image related to medical studies or health"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Transforme sua vida com uma nutrição personalizada
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          Descubra como uma alimentação equilibrada pode trazer mais saúde, bem-estar e energia para o seu dia a dia.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
          <Link href="#contato">Agende sua Consulta</Link>
        </Button>
      </div>
    </section>
  );
}
