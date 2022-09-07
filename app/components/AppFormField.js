import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
