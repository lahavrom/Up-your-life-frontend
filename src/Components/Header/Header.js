import { Tab, Steps, Divider } from "monday-ui-react-core";
import { PersonRound } from "monday-ui-react-core/dist/allIcons";
import "./Header.css";

function Header() {
  return (
    <div className="topBar">
      <div>Logo</div>
      <Divider direction={Divider.directions.VERTICAL} />
      <Steps
        activeStepIndex={2}
        steps={[<Tab>Aug 2022</Tab>, <Tab>Sept 2022</Tab>]}
      />
      <Divider direction={Divider.directions.VERTICAL} />
      <Tab>
        <PersonRound />
      </Tab>
    </div>
  );
}

export default Header;
