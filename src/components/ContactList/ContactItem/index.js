import React from "react";
import { motion } from "framer-motion";
import { ContactItemWrapper } from "./Styled";
import { getAvatar } from "../../../util/avatar";
import generateBackground from "../../../util/background";

function ContactItem({ contact, setSelected }) {
  const { uuid, firstName, lastName, phoneNumber, emailAddress } = contact;
  const avatar = getAvatar(`${firstName}-${lastName}`);
  const background = generateBackground(`${firstName}-${lastName}`);

  return (
    <motion.div layoutId={uuid}>
      <ContactItemWrapper onClick={() => setSelected(contact)}>
        <img
          style={{ backgroundColor: background }}
          className="profile-picture"
          src={avatar}
          alt={`${firstName} ${lastName}`}
        />
        <span className="name-item">{firstName}</span>
        <span className="name-item">{lastName}</span>
      </ContactItemWrapper>
    </motion.div>
  );
}

export default ContactItem;
