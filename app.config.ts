export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "GymFollow",
  description: "Um aplicativo de auxílio e desenvolvimento de treino.",
  emoji: "🏋️",
  accent: "#ea580c",
  upcomingFeatures: [
    {
      title: "Montar rotina de treino",
      description:
        "Crie divisões ABC com exercícios, séries e repetições para cada dia.",
    },
    {
      title: "Registrar séries e cargas",
      description:
        "Anote o peso e as repetições de cada série durante o treino.",
    },
    {
      title: "Histórico por exercício",
      description:
        "Veja a última carga usada e a progressão de cada exercício.",
    },
    {
      title: "Sequência de treinos",
      description:
        "Acompanhe os dias seguidos treinando para manter a constância.",
    },
    {
      title: "Biblioteca de exercícios",
      description: "Consulte exercícios organizados por grupo muscular.",
    },
    {
      title: "Gerador de treino ABC",
      description:
        "Gere uma rotina inicial de acordo com seu nível e objetivo.",
    },
  ] satisfies Feature[],
};
