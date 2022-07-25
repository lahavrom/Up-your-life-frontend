import PropTypes from "prop-types";
import { Button } from "monday-ui-react-core";

const FormSubmitButton = ({ label, icon, isLoading }) => {
  return (
    <Button type={Button.inputTags.SUBMIT} leftIcon={icon} loading={isLoading}>
      {label}
    </Button>
  );
};

export default FormSubmitButton;

FormSubmitButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
};
