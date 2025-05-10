import { UtensilsCrossed, Target, Users, Brain, CalendarDays, BookOpen, HeartPulse, Leaf, ShieldCheck, Activity, Zap, Smile, GraduationCap } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ReactElement } from "react";

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
    imageSrc: "https://picsum.photos/seed/meal-planning/600/400",
    imageAlt: "Curso de Planejamento de Refeições",
    dataAiHint: "meal planning",
  },
  {
    id: "curso-esportivo-avancado",
    triggerTitle: "Nutrição Esportiva Avançada",
    title: "Performance Máxima: Nutrição Avançada para Atletas",
    icon: <Activity size={32} className="text-primary" />,
    description:
      "Aprofunde seus conhecimentos em nutrição esportiva, abordando estratégias para otimização de performance, recuperação e periodização nutricional para atletas de alto rendimento.",
    ctaText: "Eleve seu Jogo",
    imageSrc: "https://picsum.photos/seed/advanced-sports-nutrition/600/400",
    imageAlt: "Curso de Nutrição Esportiva Avançada",
    dataAiHint: "sports nutrition",
  },
  {
    id: "curso-saude-intestinal",
    triggerTitle: "Saúde Intestinal",
    title: "Microbiota e Saúde Intestinal: O Segredo do Bem-Estar",
    icon: <HeartPulse size={32} className="text-primary" />,
    description:
      "Entenda o papel fundamental da microbiota intestinal na sua saúde geral e aprenda como nutrir seu intestino para mais vitalidade e prevenção de doenças.",
    ctaText: "Equilibre seu Intestino",
    imageSrc: "https://picsum.photos/seed/gut-health/600/400",
    imageAlt: "Curso de Saúde Intestinal",
    dataAiHint: "gut health",
  },
  {
    id: "curso-vegetariano-vegano",
    triggerTitle: "Nutrição Plant-Based",
    title: "Guia Completo de Nutrição Vegetariana e Vegana",
    icon: <Leaf size={32} className="text-primary" />,
    description:
      "Aprenda a montar dietas vegetarianas e veganas equilibradas, saborosas e completas em nutrientes, desmistificando mitos e garantindo saúde plena.",
    ctaText: "Explore o Plant-Based",
    imageSrc: "https://picsum.photos/seed/plant-based-nutrition/600/400",
    imageAlt: "Curso de Nutrição Vegetariana e Vegana",
    dataAiHint: "plant based",
  },
  {
    id: "curso-imunidade",
    triggerTitle: "Nutrição e Imunidade",
    title: "Fortaleça sua Imunidade Através da Alimentação",
    icon: <ShieldCheck size={32} className="text-primary" />,
    description:
      "Descubra como nutrientes específicos e hábitos alimentares podem modular seu sistema imunológico, aumentando suas defesas naturais contra infecções e doenças.",
    ctaText: "Proteja Sua Saúde",
    imageSrc: "https://picsum.photos/seed/immune-nutrition/600/400",
    imageAlt: "Curso de Nutrição e Imunidade",
    dataAiHint: "immune system",
  },
  {
    id: "curso-energia-vitalidade",
    triggerTitle: "Energia e Vitalidade",
    title: "Alimentação para Energia e Vitalidade Duradouras",
    icon: <Zap size={32} className="text-primary" />,
    description:
      "Sinta-se mais disposto e energizado! Aprenda a selecionar alimentos que combatem a fadiga e promovem um nível de energia estável ao longo do dia.",
    ctaText: "Energize-se",
    imageSrc: "https://picsum.photos/seed/energy-vitality/600/400",
    imageAlt: "Curso de Alimentação para Energia",
    dataAiHint: "healthy energy",
  },
  {
    id: "curso-bem-estar-emocional",
    triggerTitle: "Bem-Estar Emocional",
    title: "Nutrição para o Bem-Estar Emocional e Equilíbrio",
    icon: <Smile size={32} className="text-primary" />,
    description:
      "Descubra como a sua alimentação impacta diretamente suas emoções e aprenda estratégias nutricionais para promover o equilíbrio emocional e o bem-estar.",
    ctaText: "Cultive o Bem-Estar",
    imageSrc: "https://picsum.photos/seed/emotional-wellbeing/600/400",
    imageAlt: "Curso de Nutrição e Bem-Estar Emocional",
    dataAiHint: "emotional wellbeing",
  },
  {
    id: "curso-suplementacao",
    triggerTitle: "Suplementação Inteligente",
    title: "Guia de Suplementação Nutricional Inteligente",
    icon: <BookOpen size={32} className="text-primary" />,
    description:
      "Entenda quando e como utilizar suplementos alimentares de forma segura e eficaz, otimizando sua saúde e performance com base em evidências científicas.",
    ctaText: "Aprenda a Suplementar",
    imageSrc: "https://picsum.photos/seed/smart-supplementation/600/400",
    imageAlt: "Curso de Suplementação Inteligente",
    dataAiHint: "nutrition supplements",
  },
  {
    id: "curso-nutricao-avancada",
    triggerTitle: "Tópicos Avançados",
    title: "Tópicos Avançados em Nutrição e Metabolismo",
    icon: <GraduationCap size={32} className="text-primary" />,
    description:
      "Para profissionais e estudantes avançados: explore temas complexos como nutrigenômica, crononutrição e o futuro da ciência da nutrição.",
    ctaText: "Aprofunde-se",
    imageSrc: "https://picsum.photos/seed/advanced-topics-nutrition/600/400",
    imageAlt: "Curso de Tópicos Avançados em Nutrição",
    dataAiHint: "science research",
  },
];
