
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // Importar next/image

export default function HeroSection() {
  return (
    <section
      id="home"
      // A cor de fundo da seção é o que antes era o overlay
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden bg-primary/60"
    >
      {/* Container para a imagem, posicionada sobre o fundo da seção */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-4 md:p-8"> {/* Padding para evitar que o logo cole nas bordas */}
        <Image
          src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
          alt="NutriLife Academia Logo"
          layout="fill"
          objectFit="contain"
          priority // Importante para LCP (Largest Contentful Paint)
          data-ai-hint="brand logo"
        />
      </div>

      {/* Conteúdo textual, sobre a imagem */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
          Transforme sua vida com uma nutrição personalizada
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          Descubra como uma alimentação equilibrada pode trazer mais saúde, bem-estar e energia para o seu dia a dia.
        </p>
        <Button asChild size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
          <Link href="#contato">Agende sua Consulta</Link>
        </Button>
      </div>
    </section>
  );
}
