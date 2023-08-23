import { ContactItem } from 'components/ContactItem/ContactItem';
import { ItemContact } from './ContactList.styled';

export const ContactList = ({ items, onDeleteContact }) => {
  return (
    <ul>
      {items.map(item => (
        <ItemContact key={item.id} name={item.name} number={item.number}>
          <ContactItem item={item} onDelete={onDeleteContact} />
        </ItemContact>
      ))}
    </ul>
  );
};
