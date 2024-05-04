import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} id={id} number={number} />
      ))}
    </div>
  );
};

export default ContactList;
