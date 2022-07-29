import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "monday-ui-react-core";
import * as Yup from "yup";

import { Form, FormTextField, FormDropdown, FormSubmitButton } from "./form";
import { CATEGORIES, DAYS_OF_MONTH } from "../helpers/constants";
import { submitFixedEvent } from "../redux/fixedEvents/actions/submitFixedEvent";

const initialValues = {
  category: "",
  description: "",
  value: "",
  dayOfMonth: "",
};

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Required").label("Category"),
  description: Yup.string(),
  value: Yup.number().required("Required").label("Value"),
  dayOfMonth: Yup.number().required("Required").label("Day"),
});

const FixedEventForm = ({ type }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    ({ fixedEventsState }) => fixedEventsState.isLoading
  );

  const onSubmitIncome = useCallback(
    (values) => {
      dispatch(submitFixedEvent({ type, ...values }));
    },
    [dispatch, type]
  );

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitIncome}
    >
      <Flex gap={Flex.gaps.SMALL} direction={Flex.directions.COLUMN}>
        <span style={{ width: 200 }}>
          <FormDropdown
            field="category"
            placeholder="Category"
            options={CATEGORIES.INCOMES}
          />
        </span>
        <FormTextField field="description" placeholder="Description" />
        <FormTextField field="value" placeholder="Value" />
        <span style={{ width: 200 }}>
          <FormDropdown
            field="dayOfMonth"
            placeholder="Day"
            options={DAYS_OF_MONTH}
          />
        </span>
        <FormSubmitButton label="Submit" isLoading={isLoading} />
      </Flex>
    </Form>
  );
};

export default FixedEventForm;
