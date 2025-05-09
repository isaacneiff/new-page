import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Scale, Leaf, Dumbbell, Baby } from 'lucide-react';

const services = [
  {
    icon: <Scale size={36} className="text-primary" />,
    title: 'Nutrição Clínica',
    description: 'Avaliação completa do estado nutricional, histórico de saúde e hábitos alimentares para elaboração de planos alimentares individualizados, visando a prevenção e tratamento de doenças.',
    dataAiHint: 'medical scale'
  },
  {
    icon: <Leaf size={36} className="text-primary" />,
    title: 'Reeducação Alimentar',
    description: 'Orientação para escolhas alimentares conscientes e saudáveis, promovendo mudanças duradouras no comportamento alimentar e melhorando a relação com a comida.',
    dataAiHint: 'green leaf'
  },
  {
    icon: <Dumbbell size={36} className="text-primary" />,
    title: 'Nutrição Esportiva',
    description: 'Planos alimentares específicos para atletas e praticantes de atividade física, visando otimizar o desempenho, recuperação e composição corporal.',
    dataAiHint: 'fitness dumbbell'
  },
  {
    icon: <Baby size={36} className="text-primary" />,
    title: 'Nutrição Materno-Infantil',
    description: 'Acompanhamento nutricional para gestantes, lactantes, bebês e crianças, garantindo o desenvolvimento saudável e prevenindo deficiências nutricionais.',
    dataAiHint: 'mother child'
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-[#857331]">
          Serviços Oferecidos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card border-none">
              <CardHeader className="items-center text-center pt-8">
                <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow pb-8">
                <CardDescription className="text-muted-foreground leading-relaxed px-4">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
