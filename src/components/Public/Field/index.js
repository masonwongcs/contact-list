import React from "react";
import { FieldWrapper, FieldLabel, FieldInput } from "./Styled";

function Field({ label, value, setValue, type = "text"}) {
  return (
    <FieldWrapper>
      <FieldLabel>{label}</FieldLabel>
      <FieldInput type={type} value={value} onChange={setValue} />
    </FieldWrapper>
  );
}

export default Field;
