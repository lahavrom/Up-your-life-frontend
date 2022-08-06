import { Heading } from "monday-ui-react-core";

import only_title from "../../assets/only_title.png";
import arrow_only from "../../assets/arrow_only.png";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <img src={only_title} alt="" className={styles.logo} />
      <img src={arrow_only} alt="" className={styles.arrow} />
      <Heading
        type={Heading.types.h2}
        value="Loading.."
        size="small"
        className={styles.loading}
      />
    </div>
  );
};

export default Loader;
