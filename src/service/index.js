import uuid from "../util/uuid";

export function getData() {
  return window.localStorage.getItem("contact");
}

export function saveData(contact) {
  const localData = JSON.parse(getData());
  const newData = [
    {
      uuid: uuid(),
      ...contact,
    },
    ...localData,
  ];
  window.localStorage.setItem("contact", JSON.stringify(newData));
}

export function updateData(contact) {
  const { uuid } = contact;
  const localData = JSON.parse(getData());
  const filteredData = localData.filter((item) => item.uuid !== uuid);
  const editData = [contact, ...filteredData];
  window.localStorage.setItem("contact", JSON.stringify(editData));
}

export function deleteData(contact) {
  const { uuid } = contact;
  const localData = JSON.parse(getData());
  const filteredData = localData.filter((item) => item.uuid !== uuid);
  window.localStorage.setItem("contact", JSON.stringify(filteredData));
}
