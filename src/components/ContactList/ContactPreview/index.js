import React, { useState } from "react";
import {
  ButtonWrapper,
  ContactButton,
  ContactButtonWrapper,
  ContactPreviewContainer,
  ContactPreviewWrapper,
  CloseButton,
  Button,
} from "./Styled";
import { motion } from "framer-motion";
import { getAvatar } from "../../../util/avatar";
import generateBackground from "../../../util/background";
import { deleteData } from "../../../service";
import { ReactComponent as CloseIcon } from "../../../img/add.svg";
import { ReactComponent as EditIcon } from "../../../img/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../img/trash.svg";
import { ReactComponent as PhoneIcon } from "../../../img/phone-call.svg";
import { ReactComponent as EmailIcon } from "../../../img/email.svg";
import Alert from "../../Public/Alert";
import { useHistory } from "react-router-dom";

function ContactPreview({ contact, setSelected }) {
  const history = useHistory();
  const { uuid, firstName, lastName, phoneNumber, emailAddress } = contact;
  const [showAlert, setShowAlert] = useState(false);
  const avatar = getAvatar(`${firstName}-${lastName}`);
  const background = generateBackground(`${firstName}-${lastName}`);

  const deleteContact = (e) => {
    e.stopPropagation();
    deleteData(contact);
    setShowAlert(false);
    history.push("/");
  };

  const showDeleteConfirm = (e) => {
    e.stopPropagation();
    setShowAlert(true);
  };

  const hideDeleteConfirm = (e) => {
    e.stopPropagation();
    setShowAlert(false);
  };

  const close = () => {
    setSelected(undefined);
  };

  return (
    <ContactPreviewWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        onClick={close}
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
          <p className="email">{emailAddress}</p>
          <h1 className="phone">{phoneNumber}</h1>
          <ContactButtonWrapper>
            {phoneNumber && (
              <ContactButton href={`tel:${phoneNumber}`}>
                <PhoneIcon />
              </ContactButton>
            )}
            {emailAddress && (
              <ContactButton href={`mailto:${emailAddress}`}>
                <EmailIcon />
              </ContactButton>
            )}
          </ContactButtonWrapper>
          <ButtonWrapper>
            <Button to={`/edit/${uuid}`} onClick={(e) => e.stopPropagation()}>
              <EditIcon />
            </Button>
            <Button to={`/`} onClick={showDeleteConfirm}>
              <DeleteIcon />
            </Button>
          </ButtonWrapper>
          <CloseButton onClick={close}>
            <CloseIcon />
          </CloseButton>
        </ContactPreviewContainer>
      </motion.div>
      {showAlert && (
        <Alert
          text={
            <>
              Are you sure you want to delete{" "}
              <span>
                {firstName} {lastName}
              </span>
            </>
          }
          onCancel={hideDeleteConfirm}
          onAccept={deleteContact}
        />
      )}
    </ContactPreviewWrapper>
  );
}

export default ContactPreview;
