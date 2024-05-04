import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaUserFriends, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactWrapper}>
      <li>
        <p className={css.userInfo}>
          <FaUserFriends />
          {name}
        </p>
        <p className={css.userInfo}>
          <FaPhoneAlt />
          {number}
        </p>
      </li>

      <button className={css.button} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
