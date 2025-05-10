
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Activity, UtensilsCrossed, Target, Users, Brain, CalendarDays, Briefcase, HeartHandshake, Lightbulb, Microscope } from "lucide-react";
import Image from 'next/image';

const coursesData = [
 
 
  {
    id: "curso-cozinha",
    triggerTitle: "Cozinha Prática",
    title: "Cozinha Saudável e Prática para o Dia a Dia",
    icon: <UtensilsCrossed size={40} className="text-primary" />,
    description: "Descubra receitas deliciosas, rápidas e nutritivas para facilitar sua rotina, transformar sua cozinha e adotar um estilo de vida mais saudável sem complicação.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/healthy-cooking-course/600/400",
    imageAlt: "Curso de Cozinha Saudável",
    dataAiHint: "healthy cooking"
  },
  {
    id: "curso-emagrecimento",
    triggerTitle: "Emagrecimento Consciente",
    title: "Jornada do Emagrecimento Consciente e Sustentável",
    icon: <Target size={40} className="text-primary" />,
    description: "Transforme sua relação com o corpo e a comida. Alcance seus objetivos de perda de peso de forma saudável, equilibrada e duradoura, sem dietas restritivas.",
    ctaText: "Descubra a Jornada",
    imageSrc: "https://picsum.photos/seed/mindful-weightloss/600/400",
    imageAlt: "Curso de Emagrecimento Consciente",
    dataAiHint: "mindful weightloss"
  },
  {
    id: "curso-infantil",
    triggerTitle: "Nutrição Infantil",
    title: "Nutrindo o Futuro: Guia de Alimentação Infantil",
    icon: <Users size={40} className="text-primary" />,
    description: "Aprenda a oferecer uma alimentação nutritiva e prazerosa para crianças, desde a introdução alimentar até a fase escolar, garantindo crescimento e desenvolvimento saudáveis.",
    ctaText: "Comece Agora",
    imageSrc: "https://picsum.photos/seed/kids-nutrition/600/400",
    imageAlt: "Curso de Nutrição Infantil",
    dataAiHint: "kids nutrition"
  },
  {
    id: "curso-mental",
    triggerTitle: "Nutrição e Mente",
    title: "Alimentação Inteligente para Saúde Mental e Cognitiva",
    icon: <Brain size={40} className="text-primary" />,
    description: "Explore a conexão entre nutrição e saúde cerebral. Descubra alimentos e hábitos que podem melhorar o humor, a concentração e proteger sua mente.",
    ctaText: "Cuide da Sua Mente",
    imageSrc: "https://picsum.photos/seed/brain-health-nutrition/600/400",
    imageAlt: "Curso de Nutrição e Saúde Mental",
    dataAiHint: "brain health"
  },
  {
    id: "curso-planejamento",
    triggerTitle: "Planejamento de Refeições",
    title: "Mestre do Planejamento: Refeições Saudáveis e Organizadas",
    icon: <CalendarDays size={40} className="text-primary" />,
    description: "Domine a arte de planejar suas refeições semanais. Economize tempo, dinheiro e garanta uma alimentação equilibrada e variada para toda a família.",
    ctaText: "Planeje Suas Refeições",
    imageSrc: "https://picsum.photos/seed/meal-planning/600/400",
    imageAlt: "Curso de Planejamento de Refeições",
    dataAiHint: "meal planning"
  },

];

export default function CoursesSection() {
  return (
    <section id="cursos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          <span style={{ color: "#857331" }}>Cursos Oferecidos</span>
        </h2>
        <Tabs defaultValue={coursesData[0].id} className="w-full max-w-5xl mx-auto ">
          <TabsList className="flex flex-wrap justify-center h-18 p-1 gap-2 mb-12 bg-muted rounded-lg shadow-sm sm:grid sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-2 sm:space-x-0 sm:mb-12 ">
            {coursesData.map((course) => (
              <TabsTrigger
                key={course.id}
                value={course.id}
                className="py-2 px-3 text-xs font-medium whitespace-nowrap flex-shrink-0 sm:py-3 sm:px-4 sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300 rounded-md"
              >
                {course.triggerTitle}
              </TabsTrigger>
            ))}
          </TabsList>
          <br></br>
          {coursesData.map((course) => (
            <TabsContent key={course.id} value={course.id} className="mt-15"><hr></hr><br></br>
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
                        <CardTitle className="text-2xl lg:text-3xl leading-tight" style={{ color: "#857331" }}>{course.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 lg:p-8 pt-0 flex-grow">
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {course.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 lg:p-8 pt-0">
                      <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground text-lg py-3 px-8 rounded-md shadow-md transition-transform hover:scale-105">
                        {course.ctaText}
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

