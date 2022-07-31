import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { Dropdown } from "monday-ui-react-core";

const FormDropdown = ({ field, placeholder, options }) => {
  const { setFieldValue, errors, touched } = useFormikContext();

  return (
    <>
      <Dropdown
        id={field}
        onChange={(selectedOption) =>
          selectedOption?.value && setFieldValue(field, selectedOption.value)
        }
        onClear={() => setFieldValue(field, "")}
        options={Object.values(options).map((option) => ({
          label: option,
          value: option,
        }))}
        placeholder={placeholder}
      />
      {errors[field] && touched[field] && errors[field]}
    </>
  );
};

export default FormDropdown;

FormDropdown.propTypes = {
  field: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.object,
};
