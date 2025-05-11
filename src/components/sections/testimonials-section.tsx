import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, } from 'lucide-react';
import { Star } from 'lucide-react';


const testimonials = [
  {
    name: 'Diane',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial1.jpg',
    quote: 'Carla, gostaria deixar registrado meus parabéns pelo seu trabalho! Pontual, sempre atenciosa e se colocando a disposição para responder minhas dúvidas, obrigada pelo seu auxílio, seu trabalho é impecável! E ainda, fui aprovada no tcc sem quaisquer discussão sobre resultados e meu artigo está em processo de publicação!',
    dataAiHint: 'woman smiling',
    service: '★★★★★' // color="#f5ee29
  },
  {
    name: 'Natalia',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial2.jpg',
    quote: 'Agradecendo pelos seus serviços e profissionalismo. Sempre muito atenciosa e entregando os serviços dentro dos prazos. Foi muito importante pra mim ter encontrado você para me ajudar a embasar melhor meus trabalhos e isso me deu segurança para concluir os outros passos que precisava.',
    service: '★★★★★', 
    dataAiHint: 'man smiling'
  },
  {
    name: 'Carla',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial3.jpg',
    quote: 'É nítido seu amor e conhecimento pelo SUS! Obrigada por ensinar com tanta maestria.',
    service: '★★★★★', 
    dataAiHint: 'woman happy'
  },
  {
    name: 'Vania',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial4.jpg',
    quote: 'Agradecendo pelos seus serviços e profissionalismo. Sempre muito atenciosa e entregando os serviços dentro dos prazos. Foi muito importante pra mim ter encontrado você para me ajudar a embasar melhor meus trabalhos e isso me deu segurança para concluir os outros passos que precisava.',
    service: '★★★★★', 
    dataAiHint: 'woman happy'
  },
  {
    name: 'Ricardo Faria',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial5.jpg',
    quote: 'É uma excelente profissional e com o conteúdo na ponta da língua, sem falar que ensinar é a vocação dela, então se você adquirir o produto da Zanelatto Academy é aprendizado garantido.',
    service: '★★★★★', 
    dataAiHint: 'woman happy'
  },
  {
    name: 'Leticia',
    imageSrc: 'https://isaacneiff.github.io/landing-page-Carla/testegpt/assets/testimonial6.jpg',
    quote: 'Excelente atendimento, curso maravilhoso, super indico, pode comprar sem medo, pois os resultados são incríveis, me ajudou muito.',
    service: '★★★★★', 
    dataAiHint: 'woman happy'
  }
  
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary" style={{ color: '#1e2a36' }}>
          O Que Meus Pacientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card border-none">
              <CardContent className="p-6 text-center flex flex-col items-center flex-grow">
                <Avatar className="w-24 h-24 mb-4 border-4 border-[hsl(var(--avatar-border-custom-red))]">
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
