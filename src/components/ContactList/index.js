import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {
  AddBtn,
  ContactListContainer,
  ContactListWrapper,
  Title,
  TitleWrapper,
} from "./Styled";
import ContactItem from "./ContactItem";
import ContactPreview from "./ContactPreview";
import { ReactComponent as AddIcon } from "../../img/add.svg";
import { useHistory } from "react-router-dom";
import { getData } from "../../service";
import { Wrapper } from "../../GlobalStyled";
import Search from "./Search";

const INITIAL_LIST = require("../../data.json");

function ContactList() {
  const history = useHistory();
  const [selected, setSelected] = useState();
  const [search, setSearch] = useState("");
  const [contactList, setContactList] = useState([]);
  const [originalContactList, setOriginalContactList] = useState([]);

  useEffect(() => {
    const localData = window.localStorage.getItem("contact");
    if (!localData) {
      window.localStorage.setItem("contact", JSON.stringify(INITIAL_LIST));
      setContactList(INITIAL_LIST);
      setOriginalContactList(INITIAL_LIST);
    } else {
      setContactList(JSON.parse(localData));
      setOriginalContactList(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      const localData = JSON.parse(getData());
      setContactList(localData);
      setOriginalContactList(localData);

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

  useEffect(() => {
    if (search && search !== "") {
      const filtered = originalContactList.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(search.toLowerCase())
      );
      setContactList(filtered);
    } else {
      setContactList(originalContactList);
    }
  }, [search, originalContactList]);

  return (
    <AnimateSharedLayout type="crossfade">
      <TitleWrapper>
        <Wrapper>
          <Title>Contacts</Title>
          <Search search={search} setSearch={setSearch} />
        </Wrapper>
      </TitleWrapper>

      <ContactListContainer>
        <Wrapper>
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
        </Wrapper>
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
