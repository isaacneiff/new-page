
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
    id: "Medicina baseada eme evidencias",
    triggerTitle: "Medicina baseada eme evidencias",
    title: "Medicina baseada eme evidencias",
    icon: <CalendarDays size={32} className="text-primary" />,
    description:
      "Domine a arte de planejar suas refeições semanais. Economize tempo, dinheiro e garanta uma alimentação equilibrada e variada para toda a família.",
    ctaText: "Planeje Suas Refeições",
    imageSrc: "https://picsum.photos/seed/meal-planning-course/600/400",
    imageAlt: "Curso de Planejamento de Refeições",
    dataAiHint: "meal planning",
  },
  {
    id: "Mentorias individuais e em grupo",
    triggerTitle: "Mentorias individuais e em grupo",
    title: "Mentorias individuais e em grupo",
    icon: <BookOpen size={32} className="text-primary" />,
    description:
      "Aprenda a interpretar as informações nutricionais dos alimentos e faça escolhas mais saudáveis e informadas no supermercado.",
    ctaText: "Decifre os Rótulos",
    imageSrc: "https://picsum.photos/seed/label-reading/600/400",
    imageAlt: "Mentorias individuais e em grupo",
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
    id: "Medicina Baseada em evidências",
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
