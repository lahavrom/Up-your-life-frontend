import { Button } from "monday-ui-react-core";

const FormSubmitButton = ({ label, icon }) => {
  return (
    <Button type={Button.inputTags.SUBMIT} leftIcon={icon}>
      {label}
    </Button>
  );
};

export default FormSubmitButton;
