import React, { useEffect, useState } from "react";
// import { Spring } from "react-spring";
import styles from "./fixedIncomesBar.module.scss";
import { LinearProgressBar, Flex } from "monday-ui-react-core";
// import { useSelector, useDispatch } from "react-redux";

const FixedIncomesBar = () => {
	// const [progress, setProgress] = useState(0);

	useEffect(() => {
		// dispatch(fetchAllFixedEvents("1"));
		// 	// setInterval(() => {
		// 	// 	setProgress(
		// 	// 		(prevProgress) =>
		// 	// 			(prevProgress + Math.floor(Math.random() * 20) + 1) % 100
		// 	// 	);
		// 	// }, 1000);
	}, []);

	return (
		// <Flex>
		<LinearProgressBar
			className="linear-progress-bar_small-wrapper"
			value={50}
			indicateProgress
			valueSecondary={65}
			size={LinearProgressBar.sizes.LARGE}
		/>
		// {/* </Flex> */}
	);
};

export default FixedIncomesBar;
