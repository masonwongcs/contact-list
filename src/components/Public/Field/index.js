import React from "react";
import { FieldWrapper, FieldLabel, FieldInput, ErrorMessage } from "./Styled";

function Field({
  label,
  value,
  setValue,
  type = "text",
  error,
  errorMessage,
  onBlur,
}) {
  return (
    <FieldWrapper className={error ? "error" : ""}>
      <FieldLabel>{label}</FieldLabel>
      <FieldInput
        type={type}
        value={value}
        onChange={setValue}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FieldWrapper>
  );
}

export default Field;
