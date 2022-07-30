import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Checkbox,
  TextField,
  Dropdown,
  Button,
} from "monday-ui-react-core";
import { Formik } from "formik";
import _ from "lodash";
import * as Yup from "yup";

import { CATEGORIES, DAYS_OF_MONTH } from "../../helpers/constants";
import { submitAccountEvent } from "../../redux/accountEvents/actions/submitAccountEvent";
import { submitFixedEvent } from "../../redux/fixedEvents/actions/submitFixedEvent";
import { generateEffectiveDate, getDayOfMonth } from "../../helpers/utils";
import styles from "./transactionForm.module.css";

const initialValues = {
  isFixed: false,
  category: "",
  description: "",
  value: "",
  dayOfMonth: "",
  effectiveDate: "",
};

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Required").label("Category"),
  description: Yup.string().required("Required").label("Description"),
  value: Yup.number().min(1).required("Required").label("Value"),
  dayOfMonth: Yup.number()
    .min(1)
    .max(31)
    .required("Required")
    .label("Day of month"),
  effectiveDate: Yup.string().required("Required").label("Date"),
});

const TransactionForm = ({ type }) => {
  const dispatch = useDispatch();

  const fixedIsLoading = useSelector(
    ({ fixedEventsState }) => fixedEventsState.isLoading
  );
  const accountIsLoading = useSelector(
    ({ accountEventsState }) => accountEventsState.isLoading
  );

  const onSubmitTransaction = useCallback(
    (values) => {
      const event = {
        type,
        ..._.pick(values, ["category", "description", "value"]),
      };
      const { dayOfMonth, effectiveDate } = values;
      values.isFixed
        ? dispatch(submitFixedEvent({ ...event, dayOfMonth }))
        : dispatch(submitAccountEvent({ ...event, effectiveDate }));
    },
    [dispatch, type]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitTransaction}
    >
      {({
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <Flex gap={Flex.gaps.SMALL} direction={Flex.directions.COLUMN}>
            {/** is fixed */}
            <Checkbox
              className={styles.checkbox}
              label="Fixed"
              checked={values.isFixed}
              onChange={({ target }) => {
                setFieldValue("isFixed", target.checked);
                setFieldValue("dayOfMonth", "");
                setFieldValue("effectiveDate", "");
              }}
            />
            {/** category */}
            <>
              <span style={{ width: 200 }}>
                <Dropdown
                  id="category"
                  placeholder="Category"
                  options={Object.values(CATEGORIES).map((category) => ({
                    label: category,
                    value: category,
                  }))}
                  onChange={(selectedOption) =>
                    selectedOption?.value &&
                    setFieldValue("category", selectedOption.value)
                  }
                  onClear={() => setFieldValue("category", "")}
                />
              </span>
              {errors.category && touched.category && (
                <span className={styles.errorMessage}>{errors.category}</span>
              )}
            </>
            {/** description */}
            <>
              <TextField
                id="description"
                placeholder="Description"
                size={TextField.sizes.MEDIUM}
                value={values.description}
                onChange={handleChange("description")}
              />
              {errors.description && touched.description && (
                <span className={styles.errorMessage}>
                  {errors.description}
                </span>
              )}
            </>
            {/** value */}
            <>
              <TextField
                id="value"
                placeholder="Value"
                size={TextField.sizes.MEDIUM}
                value={values.value}
                onChange={handleChange("value")}
              />
              {errors.value && touched.value && (
                <span className={styles.errorMessage}>{errors.value}</span>
              )}
            </>
            {/** day of month / effective date */}
            {values.isFixed ? (
              <>
                <span style={{ width: 200 }}>
                  <Dropdown
                    id="dayOfMonth"
                    placeholder="Day of month"
                    options={DAYS_OF_MONTH.map((day) => ({
                      label: day,
                      value: day,
                    }))}
                    onChange={(selectedOption) => {
                      if (selectedOption?.value) {
                        setFieldValue("dayOfMonth", selectedOption.value);
                        setFieldValue("effectiveDate", generateEffectiveDate());
                      }
                    }}
                    onBlur={handleBlur("dayOfMonth")}
                    onClear={() => setFieldValue("dayOfMonth", "")}
                  />
                </span>
                {errors.dayOfMonth && touched.dayOfMonth && (
                  <span className={styles.errorMessage}>
                    {errors.dayOfMonth}
                  </span>
                )}
              </>
            ) : (
              <>
                <TextField
                  id="effectiveDate"
                  size={TextField.sizes.MEDIUM}
                  type={TextField.types.DATE}
                  value={values.effectiveDate}
                  onChange={(selectedDate) => {
                    setFieldValue("effectiveDate", selectedDate);
                    setFieldValue("dayOfMonth", getDayOfMonth());
                  }}
                  onBlur={handleBlur("effectiveDate")}
                />
                {errors.effectiveDate && touched.effectiveDate && (
                  <span className={styles.errorMessage}>
                    {errors.effectiveDate}
                  </span>
                )}
              </>
            )}
            {/** submit */}
            <Button
              className={styles.submitButton}
              type={Button.inputTags.SUBMIT}
              loading={fixedIsLoading || accountIsLoading}
            >
              Submit
            </Button>
          </Flex>
        </form>
      )}
    </Formik>
  );
};

export default TransactionForm;
