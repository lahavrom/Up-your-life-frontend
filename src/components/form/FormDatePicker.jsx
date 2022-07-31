import { useFormikContext } from "formik";
import { TextField } from "monday-ui-react-core";

const FormDatePicker = ({
  field,
  size = TextField.sizes.MEDIUM,
  type = TextField.types.DATE,
}) => {
  const { values, handleChange, errors, touched } = useFormikContext();

  return (
    <TextField
      id={field}
      size={size}
      type={type}
      value={values[field]}
      onChange={handleChange(field)}
      validation={
        errors[field] &&
        touched[field] && { status: "error", text: errors[field] }
      }
    />
  );
};

export default FormDatePicker;
