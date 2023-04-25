import Image from "next/image";
import styles from "./styles.module.scss";
import zzz from "./zzz.gif";

export const AboutMe = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Image
        src={zzz}
        alt=""
        width={500}
        height={280}
        className={styles.image}
      />
      <h3 className={styles.title}>Sobre Mim 🙋‍♂️</h3>
      <h3>Minha História como Dev</h3>
      <p className={styles.content}>
        Em 2020 eu concluiria meu último ano do ensino médio. Ainda estava
        indeciso sobre qual faculdade fazer, mas eu tinha ideia de que pudesse
        ser algo relacionado a tecnologia. No início daquele ano decidi
        pesquisar pela internet por cursos e carreiras em TI, então, acabei
        encontrando a área de programação. Sem nenhuma base e sem saber por onde
        começar, dei início nas minhas pesquisas sobre o assunto.
        <br />
        <br />
        Procurando por cursos que abordassem o tema de forma prática, encontrei
        a Khan Academy, uma plataforma online e gratuita para aprender sobre
        diversos assuntos, incluindo programação. Eu finalmente havia encontrado
        um guia passo-a-passo de como iniciar na área do zero. Foi lá que
        escrevi minhas primeiras linhas de código e algoritmos, meu primeiro
        programa foi um desenho 2D de uma pokebola utilizando JavaScript, minha
        primeira linguagem de programação.
        <br />
        <br />
        O meu primeiro contato com programação havia sido muito mais do que eu
        imaginava. A sensação de ver o computador responder a todos os meus
        comandos era quase mágica, um playground para mim que sempre gostei de
        construir coisas novas usando toda minha criatividade. Naquele dia, em
        fevereiro de 2020, me senti criança novamente, um garoto que acabará de
        ganhar o melhor brinquedo do mundo.
        <br />
        <br />
        Mas havia um problema. Desde o início eu estava acompanhando as aulas e
        programando pelo navegador do celular, pois eu não possuía nenhum
        computador na época ou condições de comprar um. O meu ânimo estava
        começando a cair e eu sentia que não valia a pena seguir a diante por
        conta das limitações de não ter um PC. Então, me coloquei o objetivo de
        conseguir comprar um computador até o final do ano para continuar
        estudando, até lá eu iria esperar. Dito e feito, em dezembro de 2020 eu
        consegui meu computador e imediatamente voltei a estudar.
        <br />
        <br />
        Em janeiro de 2021, com o fim do meu ensino médio e ainda em casa de
        quarentena por conta da pandemia de COVID-19, eu decidi intensificar
        meus estudos em programação. Segui no curso da Khan Academy, assistindo
        as aulas, fazendo os exercícios e programando o que era solicitado.
        Porém, mais uma vez meu ânimo começou a cair, eu não sentia mais
        progresso em fazer desenhos através de códigos, eu senti que precisava
        de algo mais.
        <br />
        <br />
        Acabei abandonando o curso e decidi procurar outro que também fosse
        gratuito. De um em um fui desistindo por achar muito complicado de
        entender, eu precisava de aulas didáticas e bem explicativas para mim
        que ainda era muito leigo no assunto. Frustrado por não conseguir
        aprender, comecei a pensar que aquilo não era pra mim, que era difícil
        demais para alguém como eu. Quando eu estava prestes a desistir da área,
        recebi uma recomendação do Youtube de um vídeo do canal
        <a
          href="https://www.youtube.com/@CursoemVideo"
          rel="external"
          target="_blank"
          className={styles.link}
        >
          {" "}
          Curso em Vídeo{" "}
        </a>
        do professor Gustavo Guanabara. O vídeo era o primeiro do curso de HTML
        e CSS, linguagens das quais eu já tinha ouvido falar mas nunca pesquisei
        sobre. Depois de quase desistir da área, eu finalmente havia me
        encontrado. Pela primeira vez, me senti no caminho certo, seguindo um
        curso que equilibrava muito bem teoria com prática e uma excelente
        didática.
        <br />
        <br />
        Com minha opinião já formada sobre qual faculdade fazer, em março de
        2021 iniciei meu bacharelado em Ciência da Computação, mesmo tendo mente
        que o curso não abordaria somente programação. Em paralelo, continuei
        estudando pelo Curso em Vídeo, visando uma vaga na área futuramente.
        <br />
        <br />
        Com o passar do tempo, fui fazendo outros cursos do Gustavo Guanabara.
        <br />
        <br />
        Juntei HTML, CSS e JavaScript para fazer minhas primeiras páginas
        estáticas na web. Git e GitHub, para versionar e armazenar meus
        primeiros projetos pessoais.
        <br />
        <br />
        Em novembro de 2022, depois de uma longa busca, finalmente consegui
        minha primeira oportunidade na área, um estágio como Desenvolvedor Web.
        Desde então, continuo estudando ...
      </p>
    </section>
  );
};
