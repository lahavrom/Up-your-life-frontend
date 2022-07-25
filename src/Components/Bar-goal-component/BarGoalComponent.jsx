import React, { useEffect, useState } from "react";
import { Spring } from "react-spring";
import styles from "./BarGoalComponent.module.scss";
// import { LinearProgressBar } from "monday-ui-react-core";

const BarGoal = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setProgress(
				(prevProgress) =>
					(prevProgress + Math.floor(Math.random() * 20) + 1) % 100
			);
		}, 1000);
	}, []);

	return (
		<div className={styles.container}>
			{/* <LinearProgressBar
				className="linear-progress-bar_small-wrapper"
				value={50}
				indicateProgress
				valueSecondary={65}
				size={LinearProgressBar.sizes.LARGE}
			/> */}
			<Spring from={{ percent: 0 }} to={{ percent: progress }}>
				{({ percent }) => (
					<div className="progress vertical">
						<div style={{ height: `${percent}%` }} className="progress-bar">
							<span className="sr-only">{`${progress}%`}</span>
						</div>
					</div>
				)}
			</Spring>
		</div>
	);
};

export default BarGoal;
