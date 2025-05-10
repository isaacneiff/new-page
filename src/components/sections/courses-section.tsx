"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UtensilsCrossed,
  Target,
  Users,
  Brain,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const coursesData = [
  {
    id: "curso-cozinha",
    triggerTitle: "Cozinha Prática",
    title: "Cozinha Saudável e Prática para o Dia a Dia",
    icon: <UtensilsCrossed size={40} className="text-primary" />,
    description:
      "Descubra receitas deliciosas, rápidas e nutritivas para facilitar sua rotina, transformar sua cozinha e adotar um estilo de vida mais saudável sem complicação.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/healthy-cooking-course/600/400",
    imageAlt: "Curso de Cozinha Saudável",
    dataAiHint: "healthy cooking",
  },
  {
    id: "curso-emagrecimento",
    triggerTitle: "Emagrecimento Consciente",
    title: "Jornada do Emagrecimento Consciente e Sustentável",
    icon: <Target size={40} className="text-primary" />,
    description:
      "Transforme sua relação com o corpo e a comida. Alcance seus objetivos de perda de peso de forma saudável, equilibrada e duradoura, sem dietas restritivas.",
    ctaText: "Descubra a Jornada",
    imageSrc: "https://picsum.photos/seed/mindful-weightloss/600/400",
    imageAlt: "Curso de Emagrecimento Consciente",
    dataAiHint: "mindful weightloss",
  },
  {
    id: "curso-infantil",
    triggerTitle: "Nutrição Infantil",
    title: "Nutrindo o Futuro: Guia de Alimentação Infantil",
    icon: <Users size={40} className="text-primary" />,
    description:
      "Aprenda a oferecer uma alimentação nutritiva e prazerosa para crianças, desde a introdução alimentar até a fase escolar, garantindo crescimento e desenvolvimento saudáveis.",
    ctaText: "Comece Agora",
    imageSrc: "https://picsum.photos/seed/kids-nutrition/600/400",
    imageAlt: "Curso de Nutrição Infantil",
    dataAiHint: "kids nutrition",
  },
  {
    id: "curso-mental",
    triggerTitle: "Nutrição e Mente",
    title: "Alimentação Inteligente para Saúde Mental e Cognitiva",
    icon: <Brain size={40} className="text-primary" />,
    description:
      "Explore a conexão entre nutrição e saúde cerebral. Descubra alimentos e hábitos que podem melhorar o humor, a concentração e proteger sua mente.",
    ctaText: "Cuide da Sua Mente",
    imageSrc: "https://picsum.photos/seed/brain-health-nutrition/600/400",
    imageAlt: "Curso de Nutrição e Saúde Mental",
    dataAiHint: "brain health",
  },
  {
    id: "curso-planejamento",
    triggerTitle: "Planejamento de Refeições",
    title: "Mestre do Planejamento: Refeições Saudáveis e Organizadas",
    icon: <CalendarDays size={40} className="text-primary" />,
    description:
      "Domine a arte de planejar suas refeições semanais. Economize tempo, dinheiro e garanta uma alimentação equilibrada e variada para toda a família.",
    ctaText: "Planeje Suas Refeições",
    imageSrc: "https://picsum.photos/seed/meal-planning/600/400",
    imageAlt: "Curso de Planejamento de Refeições",
    dataAiHint: "meal planning",
  },
];

const plugin = Autoplay({
  delay: 8000,
  stopOnInteraction: true,
  stopOnMouseEnter: true,
});

export default function CoursesSection() {
  return (
    <section id="cursos" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          <span style={{ color: "#857331" }}>Cursos Oferecidos</span>
        </h2>
        <div className="w-full max-w-5xl mx-auto">
          <Carousel opts={{ align: "start" }} plugins={[plugin]} className="w-full">
            <CarouselContent>
              {coursesData.map((course, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="shadow-xl border-none overflow-hidden bg-card transform transition-all duration-500 ease-in-out">
                      <div className="lg:flex">
                        <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[300px]">
                          <Image
                            src={course.imageSrc}
                            alt={course.imageAlt}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 hover:scale-105"
                            data-ai-hint={course.dataAiHint}
                          />
                        </div>
                        <div className="lg:w-3/5 flex flex-col">
                          <CardHeader className="p-6 lg:p-8">
                            <div className="flex items-center gap-4 mb-4">
                              <div className="p-3 bg-primary/10 rounded-full">
                                {course.icon}
                              </div>
                              <CardTitle
                                className="text-2xl lg:text-3xl leading-tight"
                                style={{ color: "#857331" }}
                              >
                                {course.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6 lg:p-8 pt-0 flex-grow">
                            <CardDescription className="text-muted-foreground leading-relaxed text-base">
                              {course.description}
                            </CardDescription>
                          </CardContent>
                          <CardFooter className="p-6 lg:p-8 pt-0">
                            <Button
                              size="lg"
                              className="bg-primary hover:bg-accent text-primary-foreground text-lg py-3 px-8 rounded-md shadow-md transition-transform hover:scale-105"
                            >
                              {course.ctaText}
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
