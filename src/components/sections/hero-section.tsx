
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Prato de comida saudável"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="healthy food"
          className="brightness-50" // Escurece a imagem para contraste do texto
        />
      </div>

      {/* Overlay de cor sutil para garantir legibilidade (opcional, pode ser combinado com brightness) */}
      <div className="absolute inset-0 bg-primary/30 z-10"></div>

      {/* Conteúdo textual */}
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
