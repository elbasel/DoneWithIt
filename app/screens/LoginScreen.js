import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
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
          </>
        )}
      </Formik>
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
