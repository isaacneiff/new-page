import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-[#857331]">
          <span style={{ color: '#857331' }}>Sobre Mim</span>
        </h2>
        <Card className="overflow-hidden shadow-xl border-none">
          <div className="md:flex">
            <div className="md:w-2/5 relative min-h-[350px] md:min-h-0">
              <Image
                src="/assets/carla.svg"
                alt="Carla, a nutricionista"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="healthcare professional"
              />
            </div>
            <div className="md:w-3/5 bg-card">
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  Olá! Sou Carla, nutricionista apaixonada por ajudar pessoas a alcançarem seus objetivos de saúde e bem-estar através da alimentação. Minha missão é mostrar que comer bem pode ser prazeroso, prático e transformador.
                </p>
                <p className="text-foreground mb-4 leading-relaxed">
                  Com uma abordagem individualizada e baseada em evidências científicas, desenvolvo planos alimentares personalizados que respeitam suas preferências, rotina e necessidades específicas. Acredito que a nutrição vai além de contar calorias; é sobre nutrir o corpo e a mente, promovendo uma relação saudável e equilibrada com a comida.
                </p>
                <p className="text-foreground leading-relaxed">
                  Vamos juntos construir um caminho de saúde e vitalidade?
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
