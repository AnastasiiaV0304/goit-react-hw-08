import { useDispatch } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import { FaUserFriends, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        dispatch(fetchContacts());
      });
  };

  return (
    <div className={css.contactWrapper}>
      <p className={css.userInfo}>
        <FaUserFriends />
        {contact.name}
      </p>
      <p className={css.userInfo}>
        <FaPhoneAlt />
        {contact.number}
      </p>

      <button
        onClick={() => handleDelete(contact.id)}
        className={css.button}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
