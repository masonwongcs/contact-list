import React, { useState } from "react";
import {
  ButtonWrapper,
  ContactPreviewContainer,
  ContactPreviewWrapper,
  Button,
} from "./Styled";
import { motion } from "framer-motion";
import { getAvatar } from "../../../util/avatar";
import generateBackground from "../../../util/background";
import { deleteData } from "../../../service";
import { ReactComponent as EditIcon } from "../../../img/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../img/trash.svg";
import Alert from "../../Public/Alert";

function ContactPreview({ contact, setSelected }) {
  const { uuid, firstName, lastName, phoneNumber, emailAddress } = contact;
  const [showAlert, setShowAlert] = useState(false);
  const avatar = getAvatar(`${firstName}-${lastName}`);
  const background = generateBackground(`${firstName}-${lastName}`);

  const deleteContact = (e) => {
    e.stopPropagation();
    setShowAlert(!showAlert)
    // deleteData(contact);
  };

  return (
    <ContactPreviewWrapper onClick={() => setSelected(undefined)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      />
      <motion.div layoutId={uuid}>
        <ContactPreviewContainer>
          <motion.img
            initial={{ opacity: 0, transform: "scale(0)", y: 40 }}
            animate={{ opacity: 1, transform: "scale(1)", y: 0 }}
            exit={{
              opacity: 0,
              y: 40,
              transform: "scale(0)",
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.2, delay: 0.25 }}
            style={{ pointerEvents: "auto", backgroundColor: background }}
            className="profile-picture"
            src={avatar}
          />
          <h3 className="name">
            {firstName} {lastName}
          </h3>
          <ButtonWrapper>
            <Button to={`/edit/${uuid}`} onClick={(e) => e.stopPropagation()}>
              <EditIcon />
            </Button>
            <Button to={`/`} onClick={deleteContact}>
              <DeleteIcon />
            </Button>
          </ButtonWrapper>

          <p className="email">{emailAddress}</p>
          <h1 className="phone">{phoneNumber}</h1>
        </ContactPreviewContainer>
      </motion.div>
      {showAlert && <Alert />}
    </ContactPreviewWrapper>
  );
}

export default ContactPreview;
