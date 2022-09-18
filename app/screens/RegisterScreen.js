import { StyleSheet } from "react-native";
import * as Yup from "yup";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import usersApi from "../api/users";

import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import { useState } from "react";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Passwords"),
});

export default function RegisterScreen() {
  const auth = useAuth();

  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);

  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        console.log(result);
        setError("an unexpected error has occurred");
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField name="name" placeholder="Name" icon="account" />
        <AppFormField name="email" placeholder="Email" icon="email" />
        <AppFormField name="password" placeholder="Password" icon="lock" />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
