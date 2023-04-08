import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import type { NextPage } from "next";
import styles from "./styles.module.scss";

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.page_container}>
        <Header />
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
