import { useCallback } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Flex } from "monday-ui-react-core";

import {
  Form,
  FormTextField,
  FormSubmitButton,
} from "../../../Components/forms";
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
      onSubmit={(values) => onLoginUser(values)}
    >
      <Flex gap={Flex.gaps.SMALL} direction={Flex.directions.COLUMN}>
        <FormTextField field="email" placeholder="Email" autoFocus />
        <FormTextField field="password" placeholder="Password" />
        <FormSubmitButton label="Submit" />
      </Flex>
    </Form>
  );
};

export default LoginForm;
