import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector((state) => state.contacts.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
