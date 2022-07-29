import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "monday-ui-react-core";
import * as Yup from "yup";

import {
  Form,
  FormTextField,
  FormDropdown,
  FormDatePicker,
  FormSubmitButton,
} from "./form";
import { CATEGORIES } from "../helpers/constants";
import { submitAccountEvent } from "../redux/accountEvents/actions/submitAccountEvent";

const initialValues = {
  category: "",
  description: "",
  value: "",
  effectiveDate: "",
};

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Required").label("Category"),
  description: Yup.string(),
  value: Yup.number().required("Required").label("Value"),
  effectiveDate: Yup.string().required("Required").label("Date"),
});

const AccountEventForm = ({ type }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    ({ accountEventsState }) => accountEventsState.isLoading
  );

  const onSubmitIncome = useCallback(
    (values) => {
      dispatch(submitAccountEvent({ type, ...values }));
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
        <FormDatePicker field="effectiveDate" />
        <FormSubmitButton label="Submit" isLoading={isLoading} />
      </Flex>
    </Form>
  );
};

export default AccountEventForm;
