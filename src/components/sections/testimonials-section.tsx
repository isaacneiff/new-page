import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana P.',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial1.jpg',
    quote: 'A Carla mudou minha relação com a comida! Aprendi a comer de forma saudável sem abrir mão do prazer. Recomendo demais!',
    service: 'Paciente de Reeducação Alimentar',
    dataAiHint: 'woman smiling'
  },
  {
    name: 'João S.',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial2.jpg',
    quote: 'Com o plano alimentar da Carla, consegui atingir meus objetivos na academia e melhorei muito minha performance. Excelente profissional!',
    service: 'Paciente de Nutrição Esportiva',
    dataAiHint: 'man smiling'
  },
  {
    name: 'Mariana L.',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial3.jpg',
    quote: 'O acompanhamento durante a gestação foi fundamental. A Carla é muito atenciosa e me passou muita segurança. Meu bebê nasceu super saudável!',
    service: 'Paciente de Nutrição Materno-Infantil',
    dataAiHint: 'woman happy'
  },
  
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          O Que Meus Pacientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card border-none">
              <CardContent className="p-6 text-center flex flex-col items-center flex-grow">
                <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                  <AvatarImage src={testimonial.imageSrc} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-foreground mb-1">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{testimonial.service}</p>
                <Quote className="text-primary/50 w-8 h-8 mb-2 transform scale-x-[-1]" /> {/* Flipped quote icon */}
                <p className="text-muted-foreground italic leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
