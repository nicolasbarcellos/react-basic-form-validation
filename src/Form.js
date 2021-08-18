import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

export default function Form() {
  const [submitStatus, setSubmitStatus] = useState(false);

  function handleSubmitSuccess(submitStatus) {
    setSubmitStatus(submitStatus);
  }

  return (
    <div>
      {submitStatus ? (
        <FormSuccess />
      ) : (
        <FormSignup onSubmitIsSuccess={handleSubmitSuccess} />
      )}
    </div>
  );
}
