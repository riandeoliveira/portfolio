import { TechnologyType } from "types";
import { v4 as uuidv4 } from "uuid";
import bashLogo from "../../public/assets/icons/bash-logo.svg";
import bootstrapLogo from "../../public/assets/icons/bootstrap-logo.svg";
import cLogo from "../../public/assets/icons/c-logo.svg";
import charpLogo from "../../public/assets/icons/csharp-logo.svg";
import cssLogo from "../../public/assets/icons/css-logo.svg";
import dockerLogo from "../../public/assets/icons/docker-logo.svg";
import dotnetLogo from "../../public/assets/icons/dotnet-logo.svg";
import expressjsLogo from "../../public/assets/icons/expressjs-logo.svg";
import figmaLogo from "../../public/assets/icons/figma-logo.svg";
import firebaseLogo from "../../public/assets/icons/firebase-logo.svg";
import gitLogo from "../../public/assets/icons/git-logo.svg";
import githubLogo from "../../public/assets/icons/github-logo.svg";
import herokuLogo from "../../public/assets/icons/heroku-logo.svg";
import htmlLogo from "../../public/assets/icons/html-logo.svg";
import javascriptLogo from "../../public/assets/icons/javascript-logo.svg";
import jestLogo from "../../public/assets/icons/jest-logo.svg";
import laravelLogo from "../../public/assets/icons/laravel-logo.svg";
import markdownLogo from "../../public/assets/icons/markdown-logo.svg";
import materialUILogo from "../../public/assets/icons/materialui-logo.svg";
import mongodbLogo from "../../public/assets/icons/mongodb-logo.svg";
import mysqlLogo from "../../public/assets/icons/mysql-logo.svg";
import nextjsLogo from "../../public/assets/icons/nextjs-logo.svg";
import nodejsLogo from "../../public/assets/icons/nodejs-logo.svg";
import phpLogo from "../../public/assets/icons/php-logo.svg";
import postgresqlLogo from "../../public/assets/icons/postgresql-logo.svg";
import prismaLogo from "../../public/assets/icons/prisma-logo.svg";
import pythonLogo from "../../public/assets/icons/python-logo.svg";
import reactLogo from "../../public/assets/icons/react-logo.svg";
import reduxLogo from "../../public/assets/icons/redux-logo.svg";
import sassLogo from "../../public/assets/icons/sass-logo.svg";
import sequelizeLogo from "../../public/assets/icons/sequelize-logo.svg";
import sqliteLogo from "../../public/assets/icons/sqlite-logo.svg";
import styledcomponentsLogo from "../../public/assets/icons/styled-components-logo.svg";
import tailwindcssLogo from "../../public/assets/icons/tailwindcss-logo.svg";
import threejsLogo from "../../public/assets/icons/threejs-logo.svg";
import typescriptLogo from "../../public/assets/icons/typescript-logo.svg";
import vercelLogo from "../../public/assets/icons/vercel-logo.svg";
import viteLogo from "../../public/assets/icons/vite-logo.svg";
import vscodeLogo from "../../public/assets/icons/vscode-logo.svg";
import vuejsLogo from "../../public/assets/icons/vuejs-logo.svg";
import webpackLogo from "../../public/assets/icons/webpack-logo.svg";

// TODO: Revisar todas as descrições.

export const technologies: TechnologyType[][] = [
  [
    {
      id: uuidv4(),
      name: "firebase",
      title: "Firebase",
      category: "BackEnd como Serviço",
      about:
        "Criado em 2012 com o objetivo de oferecer uma solução completa e integrada para desenvolvedores que desejam criar aplicativos móveis e web de alta qualidade com rapidez e facilidade. Atualmente, inclui uma série de serviços adicionais, como hospedagem de aplicativos, banco de dados em tempo real, mensagens em nuvem, análise de usuários, testes de aplicativos, entre outros.",
      description:
        "Esse serviço da Google não era o Back-End que eu procurava, mas era o que eu precisava. O Firebase me atendeu em todas necessidades no desenvolvimento de aplicações web escaláveis graças a sua abstração do Back-End e seu banco de dados não relacional dedicado, o Firestore.",
      descoveryDate: "Abril de 2023",
      icon: firebaseLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "csharp",
      title: "C#",
      category: "Linguagem de Programação",
      about:
        "Pronuncia-se 'CSharp'. Criada em 2000 com a finalidade de fornecer uma linguagem de programação moderna, orientada a objetos, eficiente e fácil de usar para o desenvolvimento de aplicações desktop, web, jogos e aplicativos móveis. Além disso, o C# é utilizado em todo ecossistema Microsoft através da plataforma .NET.",
      description:
        "Aprender a linguagem C despertou minha curiosidade para conhecer outras linguagens semelhantes. Comecei a estudar C# ao mesmo tempo que .NET e pude reaproveitar meu conhecimento adquirido em linguagens de programação anteriores.",
      descoveryDate: "Fevereiro de 2023",
      icon: charpLogo,
    },
    {
      id: uuidv4(),
      name: "dotnet",
      title: ".NET",
      category: "Framework Multiplataforma",
      about:
        "Pronuncia-se 'DotNet'. Criado em 2002 e reformulado em 2016 com nome de .NET Core. Projetada com a intenção de fornecer uma estrutura de desenvolvimento unificada para criar aplicações desktop, web e mobile. O .NET é amplamente utilizado com a linguagem C#.",
      description:
        "Assim como Laravel, aprender .NET não estava nos meus planos, mas durante meu estágio tive a oportunidade de conhecer mais sobre esse framework. Sua versatilidade e escalabilidade chamaram minha atenção, tornando o .NET uma das minhas opções para a construção de APIs em projetos pessoais.",
      descoveryDate: "Fevereiro de 2023",
      icon: dotnetLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "postgresql",
      title: "PostgreSQL",
      category: "Banco de Dados Relacional",
      about:
        "Criado em 1996 com a finalidade de prover um banco de dados robusto, confiável e com recursos avançados para aplicações de missão crítica. Fornece diversos extensões e recursos adicionais, como suporte a transações, concorrência de acesso, integridade de dados, entre outros.",
      description:
        "Aprendi a utilizar o PostgreSQL durante o meu estágio como desenvolvedor web e o que chamou mais a atenção foi a sua capacidade de lidar com grandes volumes de dados, além da facilidade de uso e configuração.",
      descoveryDate: "Fevereiro de 2023",
      icon: postgresqlLogo,
    },
    {
      id: uuidv4(),
      name: "laravel",
      title: "Laravel",
      category: "Framework PHP",
      about:
        "Criado em 2011 com o objetivo de simplificar o desenvolvimento de aplicações web robustas e elegantes, o Laravel segue os princípios do paradigma Model-View-Controller (MVC) e oferece recursos avançados como roteamento, migrações de banco de dados, sistema de autenticação, cache, entre outros.",
      description:
        "Embora eu nunca tenha considerado o Laravel como uma opção para meus projetos pessoais, eu tive a oportunidade de trabalhar com ele durante meu estágio e fiquei impressionado com sua robustez e facilidade de uso.",
      descoveryDate: "Janeiro de 2023",
      icon: laravelLogo,
    },
    {
      id: uuidv4(),
      name: "materialui",
      title: "MaterialUI",
      category: "Framework CSS",
      about:
        "Criado em 2014 com o intuito de prover uma biblioteca de componentes de interface de usuário para React baseada no Material Design do Google. O Material UI fornece uma ampla gama de componentes pré-construídos, como botões, caixas de diálogo, formulários, tabelas, gráficos e muito mais.",
      description:
        "Durante meu estágio, utilizei bastante o Material UI para estilizar componentes no React. A sua ótima integração com bibliotecas CSS-in-JS como o Styled Components o diferencia de outros Frameworks CSS, como o Bootstrap.",
      descoveryDate: "Janeiro de 2023",
      icon: materialUILogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "threejs",
      title: "ThreeJS",
      category: "Biblioteca JavaScript",
      about:
        "Criada em 2010 para facilitar o desenvolvimento e renderização de gráficos 3D interativos em navegadores web. O ThreeJS é baseado na linguagem JavaScript e utiliza o WebGL, uma API de renderização de gráficos 3D nativa do navegador, para renderizar os gráficos 3D.",
      description:
        "Comecei a aprender essa biblioteca por curiosidade e me surpreendi com a facilidade que ela proporciona para o desenvolvimento de gráficos 3D de alta qualidade, utilizando de recursos avançados como suporte para sombras, iluminação e texturas.",
      descoveryDate: "Janeiro de 2023",
      icon: threejsLogo,
    },
    {
      id: uuidv4(),
      name: "redux",
      title: "Redux",
      category: "Biblioteca JavaScript",
      about:
        "Criada em 2015 para gerenciar os estados de uma aplicação web e facilitar o compartilhamento e manipulação de estados complexos entre componentes em uma aplicação React de forma centralizada e previsível.",
      description:
        "Conforme as aplicações feitas através de bibliotecas como o React escalam, gerenciar estados acaba se tornando desafiador. O Redux me ajudou a resolver este problema e a sua versão mais recente, o Redux Toolkit, simplificou sua solução.",
      descoveryDate: "Janeiro de 2023",
      icon: reduxLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "c",
      title: "C",
      category: "Linguagem de Programação",
      about:
        "Criada em 1972 com o objetivo de escrever de maneira mais eficiente e portável o sistema operacional Unix, que se tornou um dos sistemas operacionais mais populares da história.",
      description:
        "Durante minhas férias de verão, decidi estudar por hobby a 'mãe de todas as linguagens de programação modernas', a linguagem C. Pude compreender conceitos importantes, como ponteiros e alocação de memória, e entender um pouco mais sobre como as linguagens atuais funcionam por de baixo dos panos.",
      descoveryDate: "Janeiro de 2023",
      icon: cLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "bash",
      title: "Bash",
      category: "Linguagem de Programação",
      about:
        "Bourne-Again SHell. Criada em 1989 para oferecer uma interface de linha de comando (CLI) mais poderosa e fácil de usar em sistemas Unix e Linux. Possui recursos avançados, como controle de fluxo de programas, substituição de variáveis, expansão de globos e suporte a funções de script.",
      description:
        "Aprender o básico de Bash foi essencial para mim descobrir como automatizar tarefas específicas no meu computador. Também fiz uso dessa linguagem na criação de boilerplates para meus projetos pessoais com suas tecnologias correspondentes.",
      descoveryDate: "Outubro de 2022",
      icon: bashLogo,
    },
    {
      id: uuidv4(),
      name: "docker",
      title: "Docker",
      category: "Plataforma de Conteinerização",
      about:
        "Criada em 2013 com o intuito de encapsular aplicações e suas dependências em um único pacote portátil e leve, simplificando o processo de criação, implantação e gerenciamento de aplicativos em ambientes de desenvolvimento e produção.",
      description:
        "Minha experiência com Docker foi breve. Aprendi somente o básico e ainda não o utilizo nos meus projetos, mas pretendo me aprofundar mais futuramente.",
      descoveryDate: "Novembro de 2022",
      icon: dockerLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "jest",
      title: "Jest",
      category: "Framework JavaScript",
      about:
        "Criado em 2011 com o propósito de facilitar o desenvolvimento de testes automatizados para aplicações em JavaScript. O Jest oferece recursos avançados, como suporte para testes em paralelo, cobertura de código, dentre outros.",
      description:
        "Desenvolver, documentar e hospedar uma aplicação não é o bastante, é preciso testá-la constantemente. Já passei por problemas em meus projetos que poderiam ser resolvidos facilmente com testes unitários. Foi por isso que escolhi o Jest.",
      descoveryDate: "Julho de 2022",
      icon: jestLogo,
    },
    {
      id: uuidv4(),
      name: "vuejs",
      title: "VueJS",
      category: "Framework JavaScript",
      about:
        "Criado em 2014 como uma terceira via no desenvolvimento web front-end, em relação ao React e Angular. Implementa o conceito de 'componentização', assim como seus concorrentes, porém, de maneira simplista, mas tão poderosa quanto.",
      description:
        "Minha primeira experiência com VueJS ocorreu durante minha faculdade de Ciência da Computação. Antes dele eu não havia pensando em experimentar uma alternativa ao React. Somente utilizando o Framework que pude perceber sua flexibilidade e simplicidade na criação de componentes.",
      descoveryDate: "Outubro de 2022",
      icon: vuejsLogo,
    },
    {
      id: uuidv4(),
      name: "tailwindcss",
      title: "TailwindCSS",
      category: "Framework CSS",
      about:
        "Criado em 2017 para simplificar e acelerar o processo de desenvolvimento de interfaces de usuário em aplicações web. Ao contrário dos frameworks CSS tradicionais, o TailwindCSS fornece uma série de classes utilitárias que podem ser combinadas para criar estilos personalizados de forma rápida e fácil.",
      description:
        "Após um tempo alternando entre SASS e Styled Components, decidi experimentar outra opção. O TailwindCSS me chamou a atenção devido a sua praticidade e velocidade na estilização imediata de componentes, gerando uma produtividade incomparável.",
      descoveryDate: "Setembro de 2022",
      icon: tailwindcssLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "nextjs",
      title: "NextJS",
      category: "Framework React",
      about:
        "Criado em 2016 para simplificar o desenvolvimento de aplicações web com React através de recursos avançados, como, renderização do lado do servidor, roteamento dinâmico, pré-renderização estática e muito mais.",
      description:
        "O NextJS mudou a forma como eu desenvolvia meus projetos, me permitindo criar aplicações web de alto desempenho e escaláveis com mais facilidade. Atualmente, busco sempre fazer uso dele quando estou utilizando React.",
      descoveryDate: "Julho de 2022",
      icon: nextjsLogo,
    },
    {
      id: uuidv4(),
      name: "vercel",
      title: "Vercel",
      category: "Plataforma de Hospedagem de Aplicações Web",
      about:
        "Criada em 2015 para permitir que os desenvolvedores criem e implantem aplicações web em escala global de maneira rápida e fácil. Oferece suporte para diversas tecnologias na hospedagem tanto de Front-End, quanto de Back-End.",
      description:
        "Com o serviço de hospedagem gratuito da Vercel, pude levar meus projetos para a internet de forma ilimitada, para que pudessem ser acessados de qualquer lugar do mundo a qualquer momento.",
      descoveryDate: "Julho de 2022",
      icon: vercelLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "prisma",
      title: "Prisma",
      category: "ORM NodeJS",
      about:
        "Criado em 2017 com o propósito de ser um ORM de próxima geração para NodeJS e TypeScript. É compatível com diversos tipos de bancos de dados, sejam eles relacionais ou não, como MySQL, PostgreSQL, SQLite, MongoDB, entre outros.",
      description:
        "Lidar com bancos de dados nunca foi tão simples quando conheci o Prisma. Utilizei ele em vários projetos na construção de APIs, integrado ao serviço em nuvem do MongoDB Atlas.",
      descoveryDate: "Maio de 2022",
      icon: prismaLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "vite",
      title: "Vite",
      category: "Ferramenta de Compilação JavaScript",
      about:
        "Criada em 2020 com o objetivo de aprimorar a experiência de desenvolvimento de aplicações web, oferecendo uma compilação mais rápida e um tempo de resposta mais ágil. Possui uma interface de linha de comando (CLI) para iniciar projetos pré-configurados em tecnologias como React, Angular, VueJS, Svelte, entre outras.",
      description:
        "Anteriormente, a maneira mais comum de iniciar um projeto React era com a CLI do Create React App (CRA). Hoje em dia, o Vite é amplamente utilizado como uma alternativa mais rápida ao Webpack, o que me levou a começar utilizá-lo.",
      descoveryDate: "Maio de 2022",
      icon: viteLogo,
    },
    {
      id: uuidv4(),
      name: "styledcomponents",
      title: "Styled Components",
      category: "Biblioteca React",
      about:
        "Criada em 2016 como uma alternativa ao CSS padrão e pré-processadores como SASS e LESS. Possibilita a criação de componentes próprios para estilização, fazendo uso da técnica CSS-in-JS no React, onde todo CSS é gerado pelo JavaScript, assim como o HTML.",
      description:
        "Se no React o HTML fica dentro do JavaScript, por que o CSS também não poderia? Essa é a proposta das bibliotecas CSS-in-JS como o Styled Components. Migrei do SASS para esta biblioteca e pude notar sua alta versatilidade na criação de componentes específicos para estilização.",
      descoveryDate: "Abril de 2022",
      icon: styledcomponentsLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "heroku",
      title: "Heroku",
      category: "Plataforma de Hospedagem de Aplicações Web",
      about:
        "Criada em 2009 com o objetivo de simplificar a hospedagem e gerenciamento de aplicações web na nuvem, permitindo que os desenvolvedores se concentrem no desenvolvimento de suas aplicações sem ter que lidar com a complexidade da infraestrutura subjacente.",
      description:
        "O serviço GitHub Pages permitia hospedar projetos gratuitamente, mas apenas com Front-End. A Heroku me atendeu bem na hospedagem de aplicações Full-Stack quando ainda possuía seu plano gratuito. Através dela também pude hospedar minha primeira API e consumi-la na internet.",
      descoveryDate: "Maio de 2022",
      icon: herokuLogo,
    },
    {
      id: uuidv4(),
      name: "typescript",
      title: "TypeScript",
      category: "Linguagem de Programação",
      about:
        "Criada em 2012 com o objetivo de oferecer uma alternativa mais robusta para o desenvolvimento de aplicações JavaScript em larga escala. Anteriormente, era apenas um superset do JS, mas atualmente é uma linguagem de programação por si só.",
      description:
        "O TypeScript aprimorou minha compreensão em conceitos como orientação a objetos, tipagem forte, tipagem estática e padrões de projeto. Fiz bom uso dele tanto no Front-End, com React, quanto no Back-End, com NodeJS e ExpressJS. Atualmente, é a minha linguagem de programação mais utilizada.",
      descoveryDate: "Março de 2022",
      icon: typescriptLogo,
    },
    {
      id: uuidv4(),
      name: "sass",
      title: "SASS",
      category: "Pré-Processador CSS",
      about:
        "Criado em 2006 com a intenção de tornar a estilização de aplicações web mais eficiente e flexível, o SASS adiciona diversos recursos com características de linguagem de programação ao CSS, como variáveis, condicionais, funções, estruturas de repetição, entre outros.",
      description:
        "Considerado o 'CSS com superpoderes', o SASS aumentou muito minha flexibilidade na estilização de componentes React. Quando usado através de módulos no formato SCSS, permite manter o escopo dos estilos para evitar conflitos, algo indispensável atualmente.",
      descoveryDate: "Julho de 2022",
      icon: sassLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "mongodb",
      title: "MongoDB",
      category: "Banco de Dados Não Relacional",
      about:
        "Criado em 2009 como uma alternativa aos Bancos de Dados Relacionais que pudesse ser escalável, flexível e capaz de lidar com grandes volumes de dados não estruturados ou semiestruturados.",
      description:
        "Decidi migrar do MySQL para o MongoDB devido a sua excelente integração com NodeJS. Tempos depois, comecei a utilizá-lo em todos os meus projetos através do MongoDB Atlas, um serviço baseado em nuvem.",
      descoveryDate: "Janeiro de 2022",
      icon: mongodbLogo,
    },
    {
      id: uuidv4(),
      name: "sqlite",
      title: "SQLite",
      category: "Banco de Dados Relacional",
      about:
        "Criado em 2000 com o intuito de fornecer uma biblioteca de banco de dados embutida, rápida e leve, que pudesse ser incorporada facilmente a outras aplicações sem a necessidade de instalar um software de banco de dados separado.",
      description:
        "Nem sempre um banco de dados precisa ser complexo, às vezes ele só precisa ser leve e prático. O SQLite é exatamente isso e me possibilitou criar CRUDs rapidamente e a avançar em projetos cujo foco era apenas praticar uma determinada tecnologia Back-End.",
      descoveryDate: "Maio de 2022",
      icon: sqliteLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "react",
      title: "React",
      category: "Biblioteca JavaScript",
      about:
        "Criada em 2013 para facilitar a construção de aplicações web através do conceito de 'componentização', que consiste em dividir a interface do usuário (UI) em partes menores, cada uma com sua responsabilidade. É uma das bibliotecas JS mais populares e usadas no mundo.",
      description:
        "Após um ano utilizando apenas HTML, CSS e JS, senti a necessidade de ter maior flexibilidade no Front-End. Decidi aprender React quando percebi que estava escrevendo funções JavaScript que retornavam HTML interpolado em strings, algo que a biblioteca já faz através de componentes, porém, de forma mais elegante, organizada e com melhor desempenho.",
      descoveryDate: "Janeiro de 2022",
      icon: reactLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "bootstrap",
      title: "Bootstrap",
      category: "Framework CSS",
      about:
        "Criado em 2011 para permitir o desenvolvimento de sites e aplicações responsivas de forma rápida e simples. Sua biblioteca fornece diversos elementos estilizados e funcionais prontos para uso, como campos de formulário, botões, menus de navegação, entre outros.",
      description:
        "Existem muitas ferramentas que auxiliam na estilização do Front-End, e o Bootstrap é uma das mais populares. Com ele, pude criar componentes visuais de forma rápida e versátil, principalmente quando eu não tinha um protótipo da interface à disposição.",
      descoveryDate: "Janeiro de 2022",
      icon: bootstrapLogo,
    },
    {
      id: uuidv4(),
      name: "webpack",
      title: "Webpack",
      category: "Empacotador de Módulos JavaScript",
      about:
        "Criado em 2012 com a finalidade de automatizar o processo de construção (build) de projetos web complexos. Ele permite que desenvolvedores gerenciem as dependências das aplicações de forma mais eficiente, permitindo a modularização do código e a geração de bundles (pacotes) otimizados para produção.",
      description:
        "Descobri sobre o Webpack enquanto aprendia React e pude perceber o seu nível de importância no desenvolvimento web moderno. Nos dias de hoje, dificilmente uma aplicação crescerá se não for modularizada.",
      descoveryDate: "Janeiro de 2022",
      icon: webpackLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "expressjs",
      title: "ExpressJS",
      category: "Framework NodeJS",
      about:
        "Criado em 2010 com a finalidade de permitir a construção de APIs e servidores web de forma simples e otimizada. É o framework mais popular do ecossistema NodeJS na atualidade, oferecendo uma grande variedade de recursos e plugins.",
      description:
        "Enquanto estudava NodeJS, descobri o ExpressJS rapidamente comecei a estudá-lo também. Por algum tempo, foi o framework que mais utilizei na construção de APIs dos meus projetos.",
      descoveryDate: "Janeiro de 2022",
      icon: expressjsLogo,
    },
    {
      id: uuidv4(),
      name: "nodejs",
      title: "NodeJS",
      category: "Ambiente de Execução JavaScript",
      about:
        "Criado em 2009 como uma solução às limitações do servidor web Apache do PHP. O NodeJS permite que desenvolvedores criem aplicações web escaláveis utilizando apenas JavaScript, tanto no lado do servidor quanto no do cliente. Com ele, se tornou possível executar JavaScript fora dos navegadores.",
      description:
        "Após aprender a base do desenvolvimento Back-End com PHP, decidi migrar para o NodeJS, fazendo do JavaScript a minha linguagem de programação principal para a construção de aplicações web.",
      descoveryDate: "Janeiro de 2022",
      icon: nodejsLogo,
    },
    {
      id: uuidv4(),
      name: "sequelize",
      title: "Sequelize",
      category: "ORM NodeJS",
      about:
        "Criado em 2011 como um mecanismo para abstrair os comandos de operações em bancos de dados SQL no ecossistema NodeJS. ORMs, como o Sequelize, são técnicas para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional.",
      description:
        "Com os conhecimentos necessários em construção de APIs, estava na hora de aprender uma tecnologia que abstraísse o banco de dados, de forma que não fosse mais necessário escrever comandos SQL manualmente. Utilizar o Sequelize foi essencial para mim e me permitiu conhecer outros ORMs tão poderosos quanto.",
      descoveryDate: "Janeiro de 2022",
      icon: sequelizeLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "php",
      title: "PHP",
      category: "Linguagem de Programação",
      about:
        "PHP: HyperText Preprocessor (Pré-processador de Hipertexto). Criada em 1994 como um conjunto de scripts para a criação de páginas web dinâmicas que evoluiu para uma linguagem de programação. Amplamente utilizada na construção de aplicações web em servidores, com destaque para seu framework Laravel.",
      description:
        "Embora eu tenha mais experiência em Front-End, decidi explorar o Back-End e escolhi o PHP como minha primeira linguagem nessa área. Através de PHP e MySQL, pude implementar na prática o conceito de CRUD, que consiste nas quatro operações básicas de uma aplicação com banco de dados.",
      descoveryDate: "Dezembro de 2021",
      icon: phpLogo,
    },
    {
      id: uuidv4(),
      name: "mysql",
      title: "MySQL",
      category: "Banco de Dados Relacional",
      about:
        "Criado em 1995 com a intenção de fornecer um sistema de gerenciamento de banco de dados relacional de código aberto que fosse rápido e confiável. É um dos bancos de dados mais usados no mundo, em pequenas e grandes empresas.",
      description:
        "Para expandir minhas habilidades como desenvolvedor, decidi aprender MySQL e incorporá-lo em minhas aplicações. Combinando meu conhecimento em PHP, fui capaz de construir um Back-End simples, com um CRUD e autenticação de usuários.",
      descoveryDate: "Dezembro de 2021",
      icon: mysqlLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "figma",
      title: "Figma",
      category: "Editor de Design Gráfico",
      about:
        "Criado em 2016 com a intenção de prover uma plataforma colaborativa para a construção de design de interfaces e protótipos. É uma ferramenta baseada em nuvem, o que permite que equipes trabalhem juntas em projetos de design em tempo real.",
      description:
        "Conheci o Figma durante a minha primeira NLW da Rocketseat, onde utilizei um protótipo para desenvolver o front-end do projeto na época. Atualmente, ainda utilizo essa ferramenta em projetos pessoais, tanto para buscar protótipos públicos na comunidade quanto para criar os meus próprios.",
      descoveryDate: "Novembro de 2021",
      icon: figmaLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "git",
      title: "Git",
      category: "Sistema de Controle de Versão",
      about:
        "Criado em 2005 com o intuito de gerenciar o código-fonte de projetos de software, permitindo rastrear as alterações feitas em arquivos ao longo do tempo, possibilitando trabalhar em equipe de forma colaborativa e segura.",
      description:
        "Quando comecei a desenvolver projetos pessoais mais complexos, percebi a necessidade de usar um sistema de controle de versão para manter o histórico de alterações de forma organizada. Foi assim que descobri o Git e, desde então, ele se tornou uma ferramenta indispensável para mim.",
      descoveryDate: "Julho de 2021",
      icon: gitLogo,
    },
    {
      id: uuidv4(),
      name: "python",
      title: "Python",
      category: "Linguagem de Programação",
      about:
        "Criada em 1991 com o objetivo de ser uma linguagem fácil de aprender, com sintaxe clara e expressiva. É uma das linguagens de programação mais populares do mundo e amplamente utilizada em diversos campos, como ciência de dados, análise de dados, automação, inteligência artificial e muitos outros.",
      description:
        "Comecei a me interessar por Python por conta da sua simplicidade e eficácia em lidar com dados. Ao estudar essa linguagem, descobri que ela oferecia muitas ferramentas poderosas, como o Selenium, que me permitiu automatizar tarefas na web de forma eficiente.",
      descoveryDate: "Agosto de 2021",
      icon: pythonLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "markdown",
      title: "Markdown",
      category: "Linguagem de Marcação",
      about:
        "Criada em 2004 para permitir a marcação de textos de forma simples, sem a necessidade de usar marcações complexas como o HTML.",
      description:
        "Não bastava apenas desenvolver projetos pessoais e colocá-los no GitHub, também era necessário documentá-los. Markdown foi e ainda é essencial para escrever os arquivos 'README' de todos os meus projetos.",
      descoveryDate: "Outubro de 2021",
      icon: markdownLogo,
    },
    {
      id: uuidv4(),
      name: "github",
      title: "GitHub",
      category: "Plataforma de Hospedagem de Código-fonte",
      about:
        "Criado em 2008 com o objetivo de hospedar gratuitamente código-fonte e arquivos com controle de versão usando o Git. O GitHub também permite que os desenvolvedores contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
      description:
        "Antigamente, eu salvava meus primeiros projetos no OneDrive da Microsoft. Com o passar do tempo, busquei uma solução mais dedicada para hospedar o código-fonte deles. Desde então, o meu perfil no GitHub tem sido o meu portfólio como desenvolvedor.",
      descoveryDate: "Junho de 2021",
      icon: githubLogo,
    },
    {
      id: uuidv4(),
      name: "vscode",
      title: "VSCode",
      category: "Editor de Texto",
      about:
        "Visual Studio Code. Criado em 2015 com o intuito de ser uma ferramenta simples e gratuita, porém poderosa. É um dos editores de código-fonte mais utilizados do mundo, possuindo diversos recursos, como destaque de sintaxe, depuração, controle de versão integrado, extensões personalizáveis, entre outros.",
      description:
        "Desde que comecei a escrever meus primeiros códigos, sempre utilizei o VSCode. Com diversas extensões, atalhos de teclado e outras ferramentas que agilizam o desenvolvimento, ele se tornou uma ferramenta essencial nos dias de hoje.",
      descoveryDate: "Janeiro de 2021",
      icon: vscodeLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "html",
      title: "HTML",
      category: "Linguagem de Marcação",
      about:
        "HyperText Markup Language (Linguagem de Marcação de Hipertexto). Criada em 1991 com o propósito de organizar e estruturar de forma semântica o conteúdo de websites, através de: títulos, parágrafos, links, imagens, vídeos, entre outros.",
      description:
        "Com HTML, aprendi a criar minhas primeiras páginas web estáticas, no início ainda sem qualquer estilização ou interatividade. Foi com essa linguagem que fiz meu primeiro 'Hello, World!'.",
      descoveryDate: "Janeiro de 2021",
      icon: htmlLogo,
    },
    {
      id: uuidv4(),
      name: "css",
      title: "CSS",
      category: "Linguagem de Folhas de Estilo",
      about:
        "Cascading Style Sheets (Folhas de Estilo em Cascata). Criada em 1996 com a finalidade de permitir a formatação e estilização de documentos HTML, ou páginas web, através de: cores, fontes de texto, posicionamentos, entre outros.",
      description:
        "Uma das razões por eu pessoalmente gostar mais de Front-End. Com CSS aprendi a estilizar minhas primeiras páginas e exercitar minha criatividade através de conceitos mais avançados da linguagem, como animações e efeitos 3D.",
      descoveryDate: "Janeiro de 2021",
      icon: cssLogo,
    },
  ],
  [
    {
      id: uuidv4(),
      name: "javascript",
      title: "JavaScript",
      category: "Linguagem de Programação",
      about:
        "Criada em 1995 para adicionar interatividade em websites. Atualmente é uma das linguagens de programação mais utilizadas no mundo, presente tanto no Front-End, como no Back-End através do NodeJS. Junto de HTML e CSS, formam a tríade do Desenvolvimento Web Front-End.",
      description:
        "JS foi a minha porta de entrada para o universo da programação, assim como para muitos iniciantes hoje em dia. Através dessa linguagem, eu tive minha primeira experiência com algoritmos, lógica de programação e estrutura de dados, o que despertou meu interesse e me incentivou a continuar estudando cada vez mais.",
      descoveryDate: "Janeiro de 2020",
      icon: javascriptLogo,
    },
  ],
];
