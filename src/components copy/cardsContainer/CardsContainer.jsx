import styles from "./cardsContainer.module.css";

const CardsContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CardsContainer;
