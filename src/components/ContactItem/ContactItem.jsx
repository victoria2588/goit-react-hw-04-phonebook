import {
  ButtonDeleteContact,
  ContactItemName,
  ContactItemNumber,
} from './ContactItem.styled';

export const ContactItem = ({ item: { id, name, number }, onDelete }) => {
  return (
    <>
      <div>
        <ContactItemName>{name}:</ContactItemName>
        <ContactItemNumber> {number}</ContactItemNumber>
      </div>
      <ButtonDeleteContact onClick={() => onDelete(id)}>
        Delete
      </ButtonDeleteContact>
    </>
  );
};
