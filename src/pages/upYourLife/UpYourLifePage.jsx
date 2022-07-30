import Dashboard from "../../components/Dashboard";
import TopBar from "../../components/topBar/TopBar";

import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
	return (
		<div className={styles.container}>
			<TopBar />
			<Dashboard />
		</div>
	);
};

export default UpYourLifePage;
