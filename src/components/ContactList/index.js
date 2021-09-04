import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import {
  AddBtn,
  ContactListContainer,
  ContactListWrapper,
  Title,
} from "./Styled";
import ContactItem from "./ContactItem";
import ContactPreview from "./ContactPreview";
import { ReactComponent as AddIcon } from "../../img/add.svg";
import { useHistory } from "react-router-dom";
import { getData } from "../../service";

const INITIAL_LIST = require("../../data.json");

function ContactList() {
  const history = useHistory();
  const [selected, setSelected] = useState();
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("contact");
    if (!localData) {
      localStorage.setItem("contact", JSON.stringify(INITIAL_LIST));
      setContactList(INITIAL_LIST);
    } else {
      setContactList(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      const localData = JSON.parse(getData());
      setContactList(localData);

      if (selected) {
        const updatedSelected = localData.find(
          (item) => item.uuid === selected.uuid
        );

        setSelected(updatedSelected);
      }
    });
    return function cleanup() {
      unlisten();
    };
  }, [selected]);

  return (
    <AnimateSharedLayout type="crossfade">
      <ContactListContainer>
        <Title>Contact List</Title>
        <ContactListWrapper>
          {contactList.length !== 0 &&
            contactList
              .sort((a, b) => {
                return a.firstName
                  .toLowerCase()
                  .localeCompare(b.firstName.toLowerCase());
              })
              .map((contact) => {
                return (
                  <ContactItem
                    key={contact.uuid}
                    contact={contact}
                    setSelected={setSelected}
                  />
                );
              })}
        </ContactListWrapper>
      </ContactListContainer>
      <AnimatePresence>
        {selected && (
          <ContactPreview contact={selected} setSelected={setSelected} />
        )}
      </AnimatePresence>
      <AddBtn to="/add">
        <AddIcon />
      </AddBtn>
    </AnimateSharedLayout>
  );
}

export default ContactList;
