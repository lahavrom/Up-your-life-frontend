import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Flex } from "monday-ui-react-core";

import {
  Form,
  FormTextField,
  FormSubmitButton,
} from "../../../components/form";
import { registerUser } from "../../../redux/users/actions/registerUser";

const initialValues = {
  accountId: 1,
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

  const isLoading = useSelector(({ usersState }) => usersState.isLoading);

  const onRegisterUser = useCallback(
    (values) => {
      dispatch(registerUser(values));
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
        <FormSubmitButton label="Submit" isLoading={isLoading} />
      </Flex>
    </Form>
  );
};

export default RegisterForm;
