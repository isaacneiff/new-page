import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          Sobre Mim
        </h2>
        <Card className="overflow-hidden shadow-xl border-none">
          <div className="md:flex">
            <div className="md:w-2/5 relative min-h-[350px] md:min-h-0">
              <Image
                src="assets/carla.svg"
                alt="Carla, a nutricionista"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="healthcare professional"
              />
            </div>
            <div className="md:w-3/5 bg-card flex flex-col justify-center">
              <CardContent className="p-8 lg:p-12 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCheck size={24} className="text-primary mt-1 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Experiência de 13 anos com docência em ensino superior voltado para cursos de saúde.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCheck size={24} className="text-primary mt-1 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Professora do curso de medicina.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCheck size={24} className="text-primary mt-1 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Concluiu o mestrado em Nutrição pela Universidade Federal de Santa Catarina - UFSC em 2014 com ênfase em saúde pública.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCheck size={24} className="text-primary mt-1 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Apaixonada por "Saúde baseada em evidências".
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCheck size={24} className="text-primary mt-1 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Também atuou como tutora de especialização em atenção básica.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCheck size={24} className="text-primary mt-1 shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">
                    Revisora de Revistas Científicas.
                  </p>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
