import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import DocumentTitle from "../../components/DocumentTitle";
import css from "../ContactsPage/ContactsPage.module.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
