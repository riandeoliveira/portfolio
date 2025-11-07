import { images } from "@/assets/images";

export type Experience = {
  id: number;
  company: string;
  logo: string;
  linkedInUrl: string;
  siteUrl: string;
  info: {
    enUs: {
      title: string;
      description: string;
      period: string;
    };
    ptBr: {
      title: string;
      description: string;
      period: string;
    };
  };
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Rehagro",
    logo: images.rehagro,
    linkedInUrl: "https://www.linkedin.com/school/rehagro/about",
    siteUrl: "https://rehagro.com.br",
    info: {
      enUs: {
        title: "Human Resources in Agribusiness Ltd.",
        description:
          "I worked on improving web systems and APIs for a farm and crop management platform. I also helped develop an MVP for a mobile app aimed at agronomists, adding value to the company.",
        period: "Nov 2022 - Apr 2024",
      },
      ptBr: {
        title: "Recursos Humanos no Agronegócio S.A.",
        description:
          "Atuei no aprimoramento de sistemas web e APIs para uma plataforma de gerenciamento de fazendas e safras. Também ajudei a desenvolver um MVP de aplicativo mobile para consultores agrônomos, gerando valor para a empresa.",
        period: "Nov de 2022 - Abr de 2024",
      },
    },
  },
  {
    id: 2,
    company: "PagBrasil",
    logo: images.pagbrasil,
    linkedInUrl:
      "https://www.linkedin.com/company/pagbrasil-pagamentos-eletronicos-ltda/about",
    siteUrl: "https://www.pagbrasil.com",
    info: {
      enUs: {
        title: "Electronic Payments Ltd.",
        description:
          "I was responsible for the maintenance and improvement of APIs and web applications, focusing on PagStream, a subscription management platform. I worked on solutions that optimized the company's electronic payment experience.",
        period: "Sep 2024 - Oct 2025",
      },
      ptBr: {
        title: "Pagamentos Eletrônicos LTDA",
        description:
          "Fui responsável pela manutenção e melhorias de APIs e aplicações web, com foco no PagStream, plataforma de gestão de assinaturas. Trabalhei em soluções que otimizaram a experiência de pagamento eletrônico da empresa.",
        period: "Set de 2024 - Out de 2025",
      },
    },
  },
  {
    id: 3,
    company: "DB",
    logo: images.db,
    linkedInUrl: "https://www.linkedin.com/company/somosdb/about",
    siteUrl: "https://db.tec.br",
    info: {
      enUs: {
        title: "IT Consulting Ltd.",
        description:
          "Currently, I work for DB as a contractor on Unicred projects, such as UnicredPay. My focus is on creating and optimizing user interfaces to enhance the platform's experience and functionality.",
        period: "Oct 2025 - Present",
      },
      ptBr: {
        title: "Assessoria em Sistemas de Informação LTDA",
        description:
          "Hoje trabalho para a DB como terceirizado em projetos da Unicred, como o UnicredPay. Meu foco se concentra na criação e otimização de interfaces de usuário para melhorar a experiência e funcionalidade da plataforma.",
        period: "Out de 2025 - Atualmente",
      },
    },
  },
];
