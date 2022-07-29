import { Accordion, AccordionItem } from "monday-ui-react-core";
import styles from "./dataAccordion.module.css";

const DataAccordion = () => {
  return (
    <Accordion
      className="monday-storybook-accordion_small-wrapepr"
      defaultIndex={[1]}
    >
      <AccordionItem title="Notifications" />
    </Accordion>
  );
};

export default DataAccordion;
