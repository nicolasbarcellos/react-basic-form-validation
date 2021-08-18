export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      values.email
    )
  ) {
    errors.email = "Email address is invalid";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.confirmPassword) {
    errors.passwordConfirmation = "Password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password do not match";
  }

  return errors;
}
