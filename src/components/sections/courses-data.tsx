
import type { LucideProps } from "lucide-react";
import type { ReactElement } from "react";
import { BriefcaseMedical, UtensilsCrossed, Target, Users, Brain, CalendarDays, BookOpen, HeartPulse, Leaf, ShieldCheck, Activity, Zap, Smile, GraduationCap, CookingPot, Weight, Apple, BrainCog, CalendarCheck, BookHeart, ActivitySquare, Lightbulb, Microscope, Users2, Presentation } from "lucide-react";

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  topics?: string[];
}
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
  modules: CourseModule[];
}

export const coursesData: Course[] = [
  {
    id: "Curso-sus-em-50",
    triggerTitle: "Curso SUS em 50",
    title: "O SUS explicado de forma clara e objetiva em aulas de 50 minutos!",
    icon: <ShieldCheck size={32} className="text-primary" />,
    description:
      "Este curso foi desenvolvido para quem precisa de um estudo estratégico sobre o Sistema Único de Saúde. Ideal para Revalida, concursos públicos e residência médica, traz os temas mais cobrados de forma didática e aprofundada, sem perder tempo com o que não cai na prova.",
    ctaText: "Inscreva-se Agora",
    imageSrc: "/assets/sus-em-50.svg",
    imageAlt: "Curso de Medicina Baseada em Evidências",
    dataAiHint: "medical research",
    modules: [
      {
        id: "mbe-mod1",
        title: "Clique e saiba mais.",
        description: "Aulas de 50 minutos, diretas e organizadas por tema",
        topics: ["Resumos estratégicos.", "Simulados e questões comentadas."]
      },
     
    ],
  },
  {
    id: "Noções-Básicas-de-Estatística",
    triggerTitle: "Noções Básicas de Estatística",
    title: "Desmistificando a estatística para quem precisa compreender dados com clareza!",
    icon: <Activity size={32} className="text-primary" />,
    description:
      "Este curso é ideal para estudantes, pesquisadores e profissionais que desejam aprender conceitos essenciais de estatística sem complicação. Você vai entender os principais cálculos, gráficos e interpretações, tornando-se mais confiante na leitura e análise de dados.",
    ctaText: "Vagas em Breve!",
    imageSrc: "/assets/nocoes-basicas.svg",
    imageAlt: "Mentorias Acadêmicas",
    dataAiHint: "mentorship",
    modules: [
      {
        id: "mentor-mod1",
        title: "Clique e saiba mais.",
        description: "",
        topics: ["Introdução à estatística descritiva e inferencial", "Como interpretar gráficos, tabelas e distribuições de dados", "Conceitos essenciais: média, mediana, desvio padrão e mais", "Aplicação prática para estudos e pesquisa", "Material de apoio e certificado de conclusão" ]
      }
     
    ],
  },
  {
    id: "Mentoria Individual ou Coletiva para Residência Médica e Concursos Públicos na Área de Saúde Pública",
    triggerTitle: "Mentorias",
    title: "Estude com estratégia, suporte especializado e um ótimo custo-benefício!!",
    icon: <Users2  size={32} className="text-primary" />,
    description:
      "Com nossa mentoria, você terá acesso a um plano de estudos bem estruturado, análise de provas anteriores e acompanhamento para otimizar sua preparação.",
    ctaText: "Inscreva-se Agora",
    imageSrc: "/assets/mentorias.svg",

    imageAlt: "Noções Basicas de estaticas",
    dataAiHint: "notions of statistics",
    modules: [
      {
        id: "Noções Basicas de estaticas-mod1",
        title: "Clique e saiba mais.",
        description: "Aulas ao vivo e interativas para aprofundar temas e esclarecer dúvidas",
        topics: ["Conteúdos essenciais e atualizados", "Análise de editais e direcionamento do estudo", "Resolução comentada de questões", "Técnicas para melhorar desempenho nas provas"]
      },
    ],
  },  
    ]

    
