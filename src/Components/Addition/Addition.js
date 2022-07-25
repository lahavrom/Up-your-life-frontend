import { Button } from "monday-ui-react-core";
import { Add } from "monday-ui-react-core/dist/allIcons";
import "./Addition.css";

function Addition() {
	return (
		<Button ariaLabel="Add" className="addBtn">
			<Add />
		</Button>
	);
}

export default Addition;
