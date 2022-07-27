import "./RadioButtonWrapper.css";
import { RadioButton, Tooltip, Icon } from "monday-ui-react-core";

const RadioButtonWrapper = ({ icon, name, onClick }) => {
  return (
    <Tooltip content={name}>
      <RadioButton name="radio-buttons-group-4" onSelect={onClick}>
        <Icon icon={icon} />
        {name}
      </RadioButton>
    </Tooltip>
  );
};

export default RadioButtonWrapper;
