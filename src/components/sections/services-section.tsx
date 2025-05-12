import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Scale, Leaf, Dumbbell, Baby } from 'lucide-react';

const services = [
  {
    icon: <Scale size={36} className="text-primary" />,
    title: 'Mentorias individuais',
    description: ' Encontros personalizados com a Dra. Carla, focados nas suas metas, desafios e crescimento pessoal ou profissional. Um espaço seguro para reflexões profundas, planejamento estratégico e desenvolvimento de habilidades com acompanhamento individualizado.',
    dataAiHint: 'mentoring'
  },
  {
    icon: <Scale size={36} className="text-primary" />,
    title: 'Mentorias em Grupos',
    description: 'Sessões em grupo conduzidas pela Dra. Carla que promovem aprendizado coletivo, troca de experiências e apoio mútuo. Ideal para quem busca crescer em conjunto, ampliar perspectivas e desenvolver competências com o suporte de uma comunidade engajada.',
    dataAiHint: 'mentoring'
  },
  {
    icon: <Leaf size={36} className="text-primary" />,
    title: 'Cursos sobre Saúde',
    description: 'Capacitações criadas pela Dra. Carla para quem busca se destacar nos estudos e no trabalho. Com conteúdos práticos e reflexivos, os cursos abordam temas como organização, foco, propósito, produtividade e transição de carreira.',
    dataAiHint: 'health'
  },

];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-[#1e2a36]">
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
