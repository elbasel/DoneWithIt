import { createRef } from "react";

export const navigationRef = createRef();

const navigate = (name, params) => {
  console.log({ currentRef: navigationRef.current });
  navigationRef.current?.navigate(name, params);
};

export default {
  navigate,
};
