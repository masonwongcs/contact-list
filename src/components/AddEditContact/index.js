import React, { useEffect, useReducer, useState } from "react";
import { AddEditContactWrapper, Title, ButtonWrapper } from "./Styled";
import { Button, PrimaryButton } from "../Public/Styled";
import Field from "../Public/Field";
import { getData, saveData, updateData } from "../../service";
import { useHistory, useParams } from "react-router-dom";
import { validateEmail, validatePhone } from "../../util/validate";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  emailAddress: "",
};

function AddEditContact() {
  let history = useHistory();
  const params = useParams();
  const { uuid } = params;

  const [value, setValue] = useReducer(
    (prevState, updatedProperty) => ({
      ...prevState,
      ...updatedProperty,
    }),
    INITIAL_STATE
  );
  const [fetching, setFetching] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const cancel = (e) => {
    e.preventDefault();
    setValue(INITIAL_STATE);
    history.push("/");
  };

  const save = (e) => {
    e.preventDefault();
    if (!(isCompleted && validate())) {
      return;
    }
    setFetching(true);

    if (uuid) {
      updateData(value);
    } else {
      saveData(value);
    }

    history.push("/");
    setFetching(false);
  };

  const validate = () => {
    const isValidEmail = validateEmail(value.emailAddress);
    setEmailError(!isValidEmail);

    const isValidPhone = validatePhone(value.phoneNumber);
    setPhoneError(!isValidPhone);

    return isValidEmail && isValidPhone;
  };

  useEffect(() => {
    const localData = JSON.parse(getData());
    const editData = localData.find((item) => item.uuid === uuid);
    setValue(editData);
  }, [uuid]);

  useEffect(() => {
    const { firstName, lastName, phoneNumber, emailAddress } = value;

    setIsCompleted(
      firstName !== "" &&
        lastName !== "" &&
        phoneNumber !== "" &&
        emailAddress !== ""
    );
  }, [value]);

  return (
    <AddEditContactWrapper>
      <Title>{uuid ? "Edit" : "New"} Contact</Title>
      <Field
        label="First Name"
        value={value.firstName}
        setValue={(e) => {
          setValue({
            firstName: e.target.value,
          });
        }}
      />
      <Field
        label="Last Name"
        value={value.lastName}
        setValue={(e) => {
          setValue({
            lastName: e.target.value,
          });
        }}
      />
      <Field
        label="Phone Number"
        type="tel"
        value={value.phoneNumber}
        error={phoneError}
        errorMessage="Invalid Phone number format"
        setValue={(e) => {
          setValue({
            phoneNumber: e.target.value,
          });
        }}
        onBlur={() => setPhoneError(!validatePhone(value.phoneNumber))}
      />
      <Field
        label="Email Address"
        type="email"
        value={value.emailAddress}
        error={emailError}
        errorMessage="Invalid Email format"
        setValue={(e) => {
          setValue({
            emailAddress: e.target.value,
          });
        }}
        onBlur={() => setEmailError(!validateEmail(value.emailAddress))}
      />
      <ButtonWrapper>
        <Button onClick={cancel}>Cancel</Button>
        <PrimaryButton onClick={save} disabled={fetching || !isCompleted}>
          {uuid ? "Save" : "Add"}
        </PrimaryButton>
      </ButtonWrapper>
    </AddEditContactWrapper>
  );
}

export default AddEditContact;
