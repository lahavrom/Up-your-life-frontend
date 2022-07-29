import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Flex } from "monday-ui-react-core";

import {
  Form,
  FormTextField,
  FormSubmitButton,
} from "../../../components/form";
import { loginUser } from "../../../redux/users/actions/loginUser";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required").label("Email"),
  password: Yup.string().min(4).required("Required").label("Password"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(({ usersState }) => usersState.isLoading);

  const onLoginUser = useCallback(
    (values) => {
      dispatch(loginUser(values));
    },
    [dispatch]
  );

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onLoginUser}
    >
      <Flex gap={Flex.gaps.SMALL} direction={Flex.directions.COLUMN}>
        <FormTextField field="email" placeholder="Email" autoFocus />
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

export default LoginForm;
