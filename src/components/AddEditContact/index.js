import React, { useEffect, useReducer, useState } from "react";
import {
  AddEditContactWrapper,
  Title,
  ButtonWrapper,
  Button,
  PrimaryButton,
} from "./Styled";
import Field from "../Public/Field";
import { getData, saveData, updateData } from "../../service";
import { useHistory, useParams } from "react-router-dom";

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

  const cancel = (e) => {
    e.preventDefault();
    setValue(INITIAL_STATE);
    history.push("/");
  };

  const save = (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, emailAddress } = value;
    if (
      firstName === "" ||
      lastName === "" ||
      phoneNumber === "" ||
      emailAddress === ""
    ) {
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

  useEffect(() => {
    const localData = JSON.parse(getData());
    const editData = localData.find((item) => item.uuid === uuid);
    setValue(editData);
  }, [uuid]);

  return (
    <AddEditContactWrapper>
      <Title>Add New Contact</Title>
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
        setValue={(e) => {
          setValue({
            phoneNumber: e.target.value,
          });
        }}
      />
      <Field
        label="Email Address"
        type="email"
        value={value.emailAddress}
        setValue={(e) => {
          setValue({
            emailAddress: e.target.value,
          });
        }}
      />
      <ButtonWrapper>
        <Button onClick={cancel}>Cancel</Button>
        <PrimaryButton onClick={save} disabled={fetching}>
          {uuid ? "Save" : "Add"}
        </PrimaryButton>
      </ButtonWrapper>
    </AddEditContactWrapper>
  );
}

export default AddEditContact;
