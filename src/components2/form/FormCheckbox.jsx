import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { Checkbox } from "monday-ui-react-core";

const FormCheckBox = ({ field, label }) => {
  const { values, handleChange } = useFormikContext();

  return (
    <Checkbox
      id={field}
      label={label}
      checked={values[field]}
      onChange={handleChange(field)}
    />
  );
};

export default FormCheckBox;

FormCheckBox.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
};
