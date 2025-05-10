
import type { LucideProps } from "lucide-react";
import type { ReactElement } from "react";
import { Hospital, ChartNoAxesCombined, BriefcaseMedical, UtensilsCrossed, Target, Users, Brain, CalendarDays, BookOpen, HeartPulse, Leaf, ShieldCheck, Activity, Zap, Smile, GraduationCap, CookingPot, Weight, Apple, BrainCog, CalendarCheck, BookHeart, ActivitySquare, Lightbulb } from "lucide-react";

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
    title: "Para professores e profissionais de saúde que querem interpretar e aplicar ciência com confiança!",
    icon: <BriefcaseMedical  size={32} className="text-primary" />,
    description:
      "Este curso é voltado para docentes e profissionais da saúde que desejam aprimorar sua capacidade de analisar criticamente artigos científicos, compreender estatísticas médicas e tomar decisões clínicas ou acadêmicas embasadas nas melhores evidências disponíveis.",
    ctaText: "Se inscreva",
    imageSrc: "/assets/4.jpg",
    imageAlt: "Curso de Planejamento de Refeições",
    style: { display: "block", margin: "0 auto" },
    dataAiHint: "meal planning",
  },
  {
    id: "Mentorias individuais e em grupo",
    triggerTitle: "Mentorias individuais e em grupo",
    title: "Uma jornada personalizada rumo à sua aprovação!",
    icon: <BookOpen size={32} className="text-primary" />,
    description:
      "Se você busca um plano de estudos estratégico, acompanhamento exclusivo e técnicas que realmente funcionam, essa mentoria é para você. Aqui, trabalhamos suas dificuldades, fortalecemos seus pontos fortes e montamos um cronograma eficaz para maximizar sua performance..",
    ctaText: "Se inscreva",
    imageSrc: "/assets/mentoria.jpg",
    imageAlt: "Mentorias individuais e em grupo",
    dataAiHint: "label reading",
  },
  {
    id: "Noções basicas de estatísticas",
    triggerTitle: "Noções basicas de estatísticas",
    title: "Desmistificando a estatística para quem precisa compreender dados com clareza!",
    icon: <ChartNoAxesCombined size={32} className="text-primary" />,
    description:
      "Este curso é ideal para estudantes, pesquisadores e profissionais que desejam aprender conceitos essenciais de estatística sem complicação. Você vai entender os principais cálculos, gráficos e interpretações, tornando-se mais confiante na leitura e análise de dados.",
    ctaText: "Se inscreva",
    imageSrc: "/assets/1..jpg",
    imageAlt: "Curso de Nutrição Vegetariana",
    dataAiHint: "vegetarian diet",
  },
  {
    id: "Curso SUS EM 50",
    triggerTitle: "Curso SUS EM 50",
    title: "O SUS explicado de forma clara e objetiva em aulas de 50 minutos!",
    icon: <Hospital size={28} size={32} className="text-primary" />,
    description:
      "Este curso foi desenvolvido para quem precisa de um estudo estratégico sobre o Sistema Único de Saúde. Ideal para Revalida, concursos públicos e residência médica, traz os temas mais cobrados de forma didática e aprofundada, sem perder tempo com o que não cai na prova.",
    ctaText: "Se inscreva",
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
