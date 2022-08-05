import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Flex } from "monday-ui-react-core";

import {
  Form,
  FormTextField,
  FormSubmitButton,
} from "../../../components/form";
import { selectIsLoading } from "../../../redux/user/selectors";
import { registerUser } from "../../../redux/user/actions/registerUser";
import { toUpperCaseFirstChar } from "../../../helpers/utils";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required").label("First name"),
  lastName: Yup.string().required("Required").label("Last name"),
  email: Yup.string().email().required("Required").label("Email"),
  password: Yup.string().min(4).required("Required").label("Password"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const onRegisterUser = useCallback(
    (values) => {
      const firstName = toUpperCaseFirstChar(values.firstName);
      const lastName = toUpperCaseFirstChar(values.lastName);
      dispatch(registerUser({ ...values, firstName, lastName }));
    },
    [dispatch]
  );

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onRegisterUser}
    >
      <Flex gap={Flex.gaps.SMALL} direction={Flex.directions.COLUMN}>
        <FormTextField field="firstName" placeholder="First name" autoFocus />
        <FormTextField field="lastName" placeholder="Last name" />
        <FormTextField field="email" placeholder="Email" />
        <FormTextField
          field="password"
          placeholder="Password"
          type="password"
        />
        <FormSubmitButton label="Register" isLoading={isLoading} />
      </Flex>
    </Form>
  );
};

export default RegisterForm;
