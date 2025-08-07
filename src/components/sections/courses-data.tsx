
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
    title: "Curso Intensivo de Medicina Baseada em Evidências",
    icon: <Microscope size={32} className="text-primary" />,
    description:
      "Aprenda a aplicar os princípios da MBE na prática clínica diária. Desenvolva habilidades para análise crítica de estudos científicos, tomada de decisão informada e melhoria da qualidade do cuidado ao paciente. Ideal para estudantes e profissionais da saúde.",
    ctaText: "Inscreva-se Agora",
    imageSrc: "https://placehold.co/600x540.png",
    imageAlt: "Curso de Medicina Baseada em Evidências",
    dataAiHint: "medical research",
    modules: [
      {
        id: "mbe-mod1",
        title: "Módulo 1: Fundamentos da MBE",
        description: "Introdução aos conceitos chave, importância e história da Medicina Baseada em Evidências.",
        topics: ["O que é MBE?", "Hierarquia das evidências", "Tipos de estudos científicos"]
      },
      {
        id: "mbe-mod2",
        title: "Módulo 2: Formulação de Perguntas Clínicas (PICO)",
        description: "Aprenda a construir perguntas clínicas relevantes e pesquisáveis utilizando a estratégia PICO.",
        topics: ["Componentes do PICO", "Exemplos práticos", "Ferramentas de busca"]
      },
      {
        id: "mbe-mod3",
        title: "Módulo 3: Análise Crítica de Artigos Científicos",
        description: "Desenvolva a capacidade de avaliar a validade e aplicabilidade de diferentes tipos de estudos.",
        topics: ["Ensaios clínicos randomizados", "Estudos de coorte", "Revisões sistemáticas e metanálises"]
      },
    ],
  },
  {
    id: "mentorias-academicas",
    triggerTitle: "Mentorias Acadêmicas",
    title: "Mentorias Individuais e em Grupo para Carreira Acadêmica",
    icon: <Users2 size={32} className="text-primary" />,
    description:
      "Receba orientação personalizada para sua trajetória acadêmica. Ideal para quem busca desenvolver pesquisa, publicar artigos, preparar-se para processos seletivos de mestrado/doutorado ou aprimorar habilidades didáticas.",
    ctaText: "Agende sua Mentoria",
    imageSrc: "https://placehold.co/600x540.png",
    imageAlt: "Mentorias Acadêmicas",
    dataAiHint: "academic guidance",
    modules: [
      {
        id: "mentor-mod1",
        title: "Módulo 1: Planejamento de Carreira Acadêmica",
        description: "Definição de metas, identificação de oportunidades e estratégias para progressão na carreira.",
        topics: ["Construção de currículo Lattes", "Networking acadêmico", "Editais e fomentos"]
      },
      {
        id: "mentor-mod2",
        title: "Módulo 2: Desenvolvimento de Pesquisa Científica",
        description: "Do delineamento do projeto à submissão para comitês de ética e financiamento.",
        topics: ["Escolha do tema e problema de pesquisa", "Metodologia científica", "Redação de projetos"]
      },
      {
        id: "mentor-mod3",
        title: "Módulo 3: Publicação Científica e Didática",
        description: "Estratégias para publicação em revistas de impacto e desenvolvimento de habilidades para docência.",
        topics: ["Redação de artigos científicos", "Escolha de periódicos", "Técnicas de apresentação e oratória"]
      },
    ],
  },
  {
    id: "nutricao-vegetariana",
    triggerTitle: "Nutrição Vegetariana",
    title: "Guia Completo para uma Dieta Vegetariana Equilibrada",
    icon: <Leaf size={32} className="text-primary" />,
    description:
      "Descubra como montar uma dieta vegetariana/vegana completa, nutritiva e saborosa, garantindo todos os nutrientes essenciais para sua saúde e bem-estar. Desmistifique mitos e aprenda sobre suplementação consciente.",
    ctaText: "Explore o Vegetarianismo",
    imageSrc: "https://placehold.co/600x540.png",
    imageAlt: "Imagem do curso sobre noções básicas de nutrição",
    dataAiHint: "learning basics",
    modules: [
      {
        id: "veg-mod1",
        title: "Módulo 1: Introdução à Nutrição Vegetariana",
        description: "Tipos de dietas vegetarianas, benefícios para a saúde e planejamento alimentar.",
        topics: ["Vegetarianismo estrito vs. ovolactovegetarianismo", "Nutrientes críticos", "Fontes de proteína vegetal"]
      },
      {
        id: "veg-mod2",
        title: "Módulo 2: Suplementação e Mitos",
        description: "Quando a suplementação é necessária e como desmistificar crenças comuns sobre a dieta vegetariana.",
        topics: ["Vitamina B12", "Ferro e Zinco", "Ômega-3 de origem vegetal"]
      },
    ],
  },
  {
    id: "suplementacao-inteligente",
    triggerTitle: "Suplementação",
    title: "Suplementação Inteligente: Mitos e Verdades",
    icon: <ShieldCheck size={32} className="text-primary" />,
    description:
      "Entenda quando e como utilizar suplementos alimentares de forma segura e eficaz. Baseado em evidências científicas, este curso aborda os principais tipos de suplementos, suas indicações, riscos e benefícios para diferentes objetivos.",
    ctaText: "Saiba Sobre Suplementos",
    imageSrc: "https://placehold.co/600x540.png",
    imageAlt: "Imagem do curso sobre suplementação",
    dataAiHint: "health supplements",
    modules: [
      {
        id: "sup-mod1",
        title: "Módulo 1: O que são Suplementos?",
        description: "Classificação, legislação e a importância da orientação profissional.",
        topics: ["Suplementos proteicos", "Vitaminas e minerais", "Suplementos ergogênicos"]
      },
      {
        id: "sup-mod2",
        title: "Módulo 2: Análise Crítica e Escolhas Seguras",
        description: "Como interpretar rótulos, identificar produtos de qualidade e evitar armadilhas.",
        topics: ["Interações medicamentosas", "Doping e substâncias proibidas", "Suplementação para populações específicas"]
      },
    ],
  },
  {
    id: "nutricao-esportiva-avancada",
    triggerTitle: "Nutrição Esportiva Avançada",
    title: "Performance Máxima: Nutrição Avançada para Atletas",
    icon: <ActivitySquare size={32} className="text-primary" />,
    description:
      "Aprofunde seus conhecimentos em nutrição esportiva, estratégias de periodização nutricional, hidratação e suplementação específica para otimizar o rendimento e recuperação de atletas de alto rendimento.",
    ctaText: "Maximize Sua Performance",
    imageSrc: "https://placehold.co/600x540.png",
    imageAlt: "Curso de Nutrição Esportiva Avançada",
    dataAiHint: "sports performance",
    modules: [
      {
        id: "sport-mod1",
        title: "Módulo 1: Bioenergética e Metabolismo no Exercício",
        description: "Compreensão aprofundada das vias metabólicas e adaptações fisiológicas ao treinamento.",
        topics: ["Metabolismo de carboidratos, lipídios e proteínas", "Respostas hormonais ao exercício", "Fadiga e recuperação"]
      },
      {
        id: "sport-mod2",
        title: "Módulo 2: Periodização Nutricional e Estratégias Avançadas",
        description: "Planejamento nutricional conforme as fases de treinamento e competição.",
        topics: ["Nutrient timing", "Hidratação e termorregulação", "Composição corporal e performance"]
      },
    ],
  },
  {
    id: "oratoria-apresentacoes",
    triggerTitle: "Oratória e Apresentações",
    title: "Curso de Oratória e Técnicas de Apresentação Impactantes",
    icon: <Presentation size={32} className="text-primary" />,
    description:
      "Desenvolva suas habilidades de comunicação e aprenda a criar apresentações cativantes e eficazes. Ideal para estudantes, pesquisadores e profissionais que desejam transmitir suas ideias com clareza, confiança e impacto.",
    ctaText: "Comunique com Excelência",
    imageSrc: "https://placehold.co/600x540.png",
    imageAlt: "Curso de Oratória e Apresentações",
    dataAiHint: "public speaking",
    modules: [
      {
        id: "orat-mod1",
        title: "Módulo 1: Fundamentos da Comunicação Eficaz",
        description: "Princípios da oratória, linguagem corporal, controle da ansiedade e voz.",
        topics: ["Estrutura de discursos", "Storytelling", "Recursos visuais"]
      },
      {
        id: "orat-mod2",
        title: "Módulo 2: Preparo e Condução de Apresentações",
        description: "Desde o planejamento do conteúdo até a interação com a audiência e o uso de slides.",
        topics: ["Design de slides eficaz", "Técnicas de engajamento", "Feedback e aprimoramento contínuo"]
      },
    ],
  },
   {
    id: "planejamento-refeicoes",
    triggerTitle: "Planejamento de Refeições",
    title: "Planejamento Semanal de Refeições Inteligentes",
    icon: <CalendarCheck size={32} className="text-primary" />,
    description:
      "Domine a arte de planejar suas refeições semanais. Economize tempo, dinheiro e garanta uma alimentação equilibrada e variada para toda a família. Aprenda a montar cardápios, listas de compras eficientes e técnicas de preparo.",
    ctaText: "Planeje Suas Refeições",
    imageSrc: "https://placehold.co/600x540.png",
    imageAlt: "Curso de Planejamento de Refeições",
    dataAiHint: "meal prep",
     modules: [
      {
        id: "meal-mod1",
        title: "Módulo 1: Bases do Planejamento Alimentar",
        description: "Entendendo suas necessidades nutricionais e definindo objetivos para o planejamento.",
        topics: ["Cálculo de necessidades calóricas", "Distribuição de macronutrientes", "Preferências e restrições alimentares"]
      },
      {
        id: "meal-mod2",
        title: "Módulo 2: Montando Cardápios e Listas de Compras",
        description: "Estratégias para criar cardápios semanais variados e listas de compras otimizadas.",
        topics: ["Organização da despensa e geladeira", "Aproveitamento integral dos alimentos", "Técnicas de conservação"]
      }
    ],
  },
  {
    id: "cozinha-pratica",
    triggerTitle: "Cozinha Prática",
    title: "Cozinha Saudável e Prática para o Dia a Dia",
    icon: <UtensilsCrossed size={32} className="text-primary" />,
    description:
      "Descubra receitas deliciosas, rápidas e nutritivas para facilitar sua rotina, transformar sua cozinha e adotar um estilo de vida mais saudável sem complicação. Técnicas de preparo, organização e dicas para otimizar seu tempo.",
    ctaText: "Cozinhe com Prazer",
    imageSrc: "https://placehold.co/600x540.png",
    imageAlt: "Curso de Cozinha Prática e Saudável",
    dataAiHint: "healthy cooking",
     modules: [
      {
        id: "cook-mod1",
        title: "Módulo 1: Técnicas Básicas e Utensílios Essenciais",
        description: "Dominando cortes, cocção e os utensílios que facilitam o dia a dia na cozinha.",
        topics: ["Segurança alimentar", "Organização da cozinha (mise en place)", "Temperos e especiarias"]
      },
      {
        id: "cook-mod2",
        title: "Módulo 2: Receitas Rápidas e Nutritivas",
        description: "Cardápio variado para café da manhã, almoço, jantar e lanches.",
        topics: ["Preparações para congelar (meal prep)", "Adaptação de receitas", "Sobremesas saudáveis"]
      }
    ]
  },
];
