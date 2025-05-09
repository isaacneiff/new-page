
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Activity, UtensilsCrossed, Target, Users, Brain, CalendarDays } from "lucide-react";
import Image from 'next/image';

const coursesData = [
  {
    id: "curso-alimentacao",
    triggerTitle: "Alimentação Saudável",
    title: "Guia Completo de Alimentação Saudável",
    icon: <BookOpen size={40} className="text-primary" />,
    description: "Aprenda os fundamentos da nutrição, como montar pratos equilibrados, ler rótulos e fazer escolhas inteligentes no supermercado para uma vida mais saudável e energética.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/healthy-eating-guide/600/400",
    imageAlt: "Guia de Alimentação Saudável",
    dataAiHint: "healthy food guide"
  },
  {
    id: "curso-esportiva",
    triggerTitle: "Nutrição Esportiva",
    title: "Nutrição para Performance Esportiva",
    icon: <Activity size={40} className="text-primary" />,
    description: "Maximize seus resultados nos treinos com estratégias nutricionais personalizadas para ganho de massa muscular, mais energia e recuperação otimizada.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/sports-nutrition-course/600/400",
    imageAlt: "Curso de Nutrição Esportiva",
    dataAiHint: "sports nutrition"
  },
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
    triggerTitle: "Emagrecimento Sustentável",
    title: "Nutrição para Emagrecimento Sustentável",
    icon: <Target size={40} className="text-primary" />,
    description: "Foco em perda de peso saudável e duradoura, sem dietas restritivas, aprendendo a fazer escolhas conscientes e a manter a motivação.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/sustainable-weight-loss/600/400",
    imageAlt: "Curso de Emagrecimento Sustentável",
    dataAiHint: "weight loss"
  },
  {
    id: "curso-familiar",
    triggerTitle: "Nutrição Familiar",
    title: "Nutrição Infantil e Familiar",
    icon: <Users size={40} className="text-primary" />,
    description: "Aprenda a construir hábitos alimentares saudáveis para toda a família, desde a introdução alimentar dos bebês até a adolescência, promovendo saúde e união à mesa.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/family-nutrition/600/400",
    imageAlt: "Curso de Nutrição Infantil e Familiar",
    dataAiHint: "family eating"
  },
  {
    id: "curso-mindful",
    triggerTitle: "Mindful Eating",
    title: "Mindful Eating e Intuição Alimentar",
    icon: <Brain size={40} className="text-primary" />,
    description: "Desenvolva uma relação mais consciente e intuitiva com a comida. Aprenda a ouvir os sinais do seu corpo, comer com atenção plena e redescobrir o prazer na alimentação.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/mindful-eating-intuition/600/400",
    imageAlt: "Curso de Mindful Eating",
    dataAiHint: "mindful eating"
  },
  {
    id: "curso-planejamento",
    triggerTitle: "Planejamento de Refeições",
    title: "Planejamento de Refeições Inteligentes",
    icon: <CalendarDays size={40} className="text-primary" />,
    description: "Domine a arte de planejar suas refeições semanais de forma prática, econômica e nutritiva. Economize tempo, reduza o desperdício e garanta uma alimentação saudável.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/meal-planning-smart/600/400",
    imageAlt: "Curso de Planejamento de Refeições",
    dataAiHint: "meal planning"
  },
];

export default function CoursesSection() {
  return (
    <section id="cursos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          Cursos Oferecidos
        </h2>
        <Tabs defaultValue={coursesData[0].id} className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10 bg-muted p-2 rounded-lg shadow-sm">
            {coursesData.map((course) => (
              <TabsTrigger 
                key={course.id} 
                value={course.id} 
                className="py-3 text-xs sm:text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300 rounded-md"
              >
                {course.triggerTitle}
              </TabsTrigger>
            ))}
          </TabsList>
          {coursesData.map((course) => (
            <TabsContent key={course.id} value={course.id}>
              <Card className="shadow-xl border-none overflow-hidden bg-card transform transition-all duration-500 ease-in-out">
                <div className="lg:flex">
                  <div className="lg:w-2/5 relative h-64 lg:h-auto">
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
                        <CardTitle className="text-2xl lg:text-3xl text-foreground leading-tight">{course.title}</CardTitle>
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

