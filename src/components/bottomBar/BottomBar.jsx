import { Heading } from "monday-ui-react-core";

import styles from "./bottomBar.module.css";

const BottomBar = () => {
  return (
    <div className={styles.container}>
      <Heading
        type={Heading.types.h4}
        className={styles.Heading}
        value="Home"
      />
      <Heading
        type={Heading.types.h4}
        className={styles.Heading}
        value="About"
      />
      <Heading
        type={Heading.types.h4}
        className={styles.Heading}
        value="Careers"
      />
      <Heading
        type={Heading.types.h4}
        className={styles.Heading}
        value="Associates"
      />
      <Heading
        type={Heading.types.h4}
        className={styles.Heading}
        value="Packages"
      />
      <Heading
        type={Heading.types.h4}
        className={styles.Heading}
        value="Terms"
      />
      <Heading
        type={Heading.types.h4}
        className={styles.Heading}
        value="Contact"
      />
      <Heading
        type={Heading.types.h4}
        className={styles.Heading}
        value="Help"
      />
    </div>
  );
};

export default BottomBar;
