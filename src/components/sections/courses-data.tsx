
import type { LucideProps } from "lucide-react";
import type { ReactElement } from "react";
import { UtensilsCrossed, Target, Users, Brain, CalendarDays, BookOpen, HeartPulse, Leaf, ShieldCheck, Activity, Zap, Smile, GraduationCap, CookingPot, Weight, Apple, BrainCog, CalendarCheck, BookHeart, ActivitySquare, Lightbulb } from "lucide-react";

export interface Course {
  id: string;
  triggerTitle: string;
  title: string;
  icon: ReactElement<LucideProps>;
  description: string;
  ctaText: string;
  imageSrc: string;
  imageAlt: string;
  dataAiHint: string;
}

export const coursesData: Course[] = [
  {
    id: "curso-cozinha",
    triggerTitle: "Cozinha Prática",
    title: "Cozinha Saudável e Prática para o Dia a Dia",
    icon: <UtensilsCrossed size={32} className="text-primary" />,
    description:
      "Descubra receitas deliciosas, rápidas e nutritivas para facilitar sua rotina, transformar sua cozinha e adotar um estilo de vida mais saudável sem complicação.",
    ctaText: "Saiba Mais",
    imageSrc: "https://picsum.photos/seed/healthy-cooking-course/600/400",
    imageAlt: "Curso de Cozinha Saudável",
    dataAiHint: "healthy cooking",
  },
  {
    id: "curso-emagrecimento",
    triggerTitle: "Emagrecimento",
    title: "Jornada do Emagrecimento Consciente e Sustentável",
    icon: <Target size={32} className="text-primary" />,
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
    icon: <Users size={32} className="text-primary" />,
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
    icon: <Brain size={32} className="text-primary" />,
    description:
      "Explore a conexão entre nutrição e saúde cerebral. Descubra alimentos e hábitos que podem melhorar o humor, a concentração e proteger sua mente.",
    ctaText: "Cuide da Sua Mente",
    imageSrc: "https://picsum.photos/seed/brain-health-nutrition/600/400",
    imageAlt: "Curso de Nutrição e Saúde Mental",
    dataAiHint: "brain health",
  },
  {
    id: "curso-planejamento",
    triggerTitle: "Planejamento",
    title: "Mestre do Planejamento: Refeições Saudáveis e Organizadas",
    icon: <CalendarDays size={32} className="text-primary" />,
    description:
      "Domine a arte de planejar suas refeições semanais. Economize tempo, dinheiro e garanta uma alimentação equilibrada e variada para toda a família.",
    ctaText: "Planeje Suas Refeições",
    imageSrc: "https://picsum.photos/seed/meal-planning-course/600/400",
    imageAlt: "Curso de Planejamento de Refeições",
    dataAiHint: "meal planning",
  },
  {
    id: "curso-leitura-rotulos",
    triggerTitle: "Leitura de Rótulos",
    title: "Decifrando Rótulos: Faça Escolhas Conscientes",
    icon: <BookOpen size={32} className="text-primary" />,
    description:
      "Aprenda a interpretar as informações nutricionais dos alimentos e faça escolhas mais saudáveis e informadas no supermercado.",
    ctaText: "Decifre os Rótulos",
    imageSrc: "https://picsum.photos/seed/label-reading/600/400",
    imageAlt: "Curso de Leitura de Rótulos",
    dataAiHint: "label reading",
  },
  {
    id: "curso-vegetarianismo",
    triggerTitle: "Nutrição Vegetariana",
    title: "Guia Completo para uma Dieta Vegetariana Equilibrada",
    icon: <Leaf size={32} className="text-primary" />,
    description:
      "Descubra como montar uma dieta vegetariana/vegana completa, nutritiva e saborosa, garantindo todos os nutrientes essenciais para sua saúde.",
    ctaText: "Explore o Vegetarianismo",
    imageSrc: "https://picsum.photos/seed/vegetarian-diet/600/400",
    imageAlt: "Curso de Nutrição Vegetariana",
    dataAiHint: "vegetarian diet",
  },
  {
    id: "curso-suplementacao",
    triggerTitle: "Suplementação",
    title: "Suplementação Inteligente: Mitos e Verdades",
    icon: <ShieldCheck size={32} className="text-primary" />,
    description:
      "Entenda quando e como utilizar suplementos alimentares de forma segura e eficaz, com base em evidências científicas e necessidades individuais.",
    ctaText: "Saiba Sobre Suplementos",
    imageSrc: "https://picsum.photos/seed/supplements-guide/600/400",
    imageAlt: "Curso de Suplementação Inteligente",
    dataAiHint: "supplements guide",
  },
  {
    id: "curso-nutricao-esportiva-avancado",
    triggerTitle: "Nutrição Esportiva Avançada",
    title: "Performance Máxima: Nutrição Avançada para Atletas",
    icon: <Activity size={32} className="text-primary" />,
    description:
      "Aprofunde seus conhecimentos em nutrição esportiva, estratégias de periodização nutricional, hidratação e suplementação para otimizar o rendimento.",
    ctaText: "Maximize Sua Performance",
    imageSrc: "https://picsum.photos/seed/sports-nutrition-advanced/600/400",
    imageAlt: "Curso de Nutrição Esportiva Avançada",
    dataAiHint: "sports nutrition",
  },
];
