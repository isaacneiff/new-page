
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
    id: "medicina-baseada-evidencias",
    triggerTitle: "Medicina Baseada em Evidências",
    title: "Para professores e profissionais de saúde que querem interpretar e aplicar ciência com confiança!",
    icon: <Microscope size={32} className="text-primary" />,
    description:
      "Aprenda a aplicar os princípios da MBE na prática clínica diária. Desenvolva habilidades para análise crítica de estudos científicos, tomada de decisão informada e melhoria da qualidade do cuidado ao paciente. Ideal para estudantes e profissionais da saúde.",
    ctaText: "Inscreva-se Agora",
    imageSrc: "/assets/4.jpg",
    imageAlt: "Curso de Medicina Baseada em Evidências",
    dataAiHint: "medical research",
    modules: [
      {
        id: "mbe-mod1",
        title: "Clique e saiba mais.",
        description: "Aulas interativas e ao vivo.",
        topics: ["Introdução a medicina baseada em evidências", "Aplicação das evidências na prática clínica e no ensino.", "Noções de bioestatística para interpretação de estudos científicos","Material de apoio e certificado de conclusão."]
      },
     
    ],
  },
  {
    id: "mentorias-academicas",
    triggerTitle: "Mentorias",
    title: "Mentorias Individuais e em Grupo para Carreira Acadêmica",
    icon: <Users2 size={32} className="text-primary" />,
    description:
      "Receba orientação personalizada para sua trajetória acadêmica. Ideal para quem busca desenvolver pesquisa, publicar artigos, preparar-se para processos seletivos de mestrado/doutorado ou aprimorar habilidades didáticas.",
    ctaText: "Agende sua Mentoria",
    imageSrc: "/assets/course-mentorship.jpg",
    imageAlt: "Mentorias Acadêmicas",
    dataAiHint: "academic guidance",
    modules: [
      {
        id: "mentor-mod1",
        title: "Módulo 1: Planejamento de Carreira Acadêmica",
        description: "Definição de metas, identificação de oportunidades e estratégias para progressão na carreira.",
        topics: ["Construção de currículo Lattes", "Networking acadêmico", "Editais e fomentos"]
      }
     
    ],
  },
  {
    id: "Noções Basicas de estaticas",
    triggerTitle: "Noções Basicas de estaticas",
    title: "Desmistificando a estatística para quem precisa compreender dados com clareza!",
    icon: <Leaf size={32} className="text-primary" />,
    description:
      "Este curso é ideal para estudantes, pesquisadores e profissionais que desejam aprender conceitos essenciais de estatística sem complicação. Você vai entender os principais cálculos, gráficos e interpretações, tornando-se mais confiante na leitura e análise de dados.",
    ctaText: "Explore o Vegetarianismo",
    imageSrc: "/assets/course-vegetarian.jpg",
    imageAlt: "Noções Basicas de estaticas",
    dataAiHint: "vegetarian food",
    modules: [
      {
        id: "veg-mod1",
        title: "Clique e saiba mais.",
        description: "Aulas interativas e ao vivo.",
        topics: ["Noções de bioestatística para interpretação de estudos científicos", "Aplicação das evidências na prática clínica e no ensino.", "Material de apoio e certificado de conclusão."]
      },

    ],
  },
  {
    id: "Curso sus em 50",
    triggerTitle: "Curso sus em 50",
    title: "O SUS explicado de forma clara e objetiva em aulas de 50 minutos!",
    icon: <ShieldCheck size={32} className="text-primary" />,
    description:
      "Este curso foi desenvolvido para quem precisa de um estudo estratégico sobre o Sistema Único de Saúde. Ideal para Revalida, concursos públicos e residência médica, traz os temas mais cobrados de forma didática e aprofundada, sem perder tempo com o que não cai na prova..",
    ctaText: "Saiba Sobre Suplementos",
    imageSrc: "/assets/course-supplements.jpg",
    imageAlt: "Curso de Suplementação Inteligente",
    dataAiHint: "dietary supplements",
    modules: [
      {
        id: "sup-mod1",
        title: "Módulo 1: Legislaçao do SUS",
        description: "Classificação, legislação e a importância da orientação profissional.",
        topics: ["Constituição de 1988.", "Leis Organicas do SUS - 8.080/1990 e 8.142/1990.", "Princípios e diretrizes do SUS.", "Papel dos diferentes entes federativos (municipal, estadual e federal)."]
      },
      {
        id: "sup-mod2",
        title: "Módulo 2: SUS na pratica",
        description: "Como interpretar rótulos, identificar produtos de qualidade e evitar armadilhas.",
        topics: ["Níveis de prevenção em saúde", "Ecomapa e genograma", "Notificação de doenças e agravos (SINAN)."]
      },
       {
        id: "sup-mod2",
        title: "Módulo 3: SUS e epidemiologia",
        description: "Como interpretar rótulos, identificar produtos de qualidade e evitar armadilhas.",
        topics: ["Delineamentos de estudos epidemiológicos", "Testes diagnósticos (sensibilidade e especificidade)", "O valor preditivo positivo (VPP) e o valor preditivo negativo (VPN)."]
      },
    ]
  },  
    ]

    