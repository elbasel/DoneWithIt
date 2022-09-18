import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";

import Screen from "../components/Screen";

import {
  AppFormField,
  SubmitButton,
  AppForm,
  ErrorMessage,
} from "../components/forms";
import { useState } from "react";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const auth = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.login(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid username and/or password"
          visible={loginFailed}
        />
        <AppFormField
          name="email"
          autoCapitalize={false}
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          autoCapitalize={false}
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    alignSelf: "center",
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
  },
});
