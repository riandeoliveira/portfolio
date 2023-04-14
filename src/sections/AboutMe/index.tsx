import Image from "next/image";
import styles from "./styles.module.scss";
import zzz from "./zzz.gif";

export const AboutMe = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Sobre Mim 🙋‍♂️</h3>
      <p className={styles.content}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam
        natus est, exercitationem earum sapiente consectetur alias quo fugit
        deserunt nihil quod repellendus quos voluptate impedit assumenda autem
        soluta fuga. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Quia atque sapiente ratione voluptas odio qui ex quae inventore aut!
        Veniam voluptas cumque amet odio commodi obcaecati sunt modi porro
        quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Culpa commodi iste provident voluptates expedita numquam laborum ab
        aperiam excepturi porro adipisci quam quasi vitae non aut, quos beatae
        omnis molestiae.
      </p>
      <Image src={zzz} alt="" width={500} height={280} className={styles.image} />
    </section>
  );
};
