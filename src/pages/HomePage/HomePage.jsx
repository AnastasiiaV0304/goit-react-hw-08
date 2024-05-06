import DocumentTitle from "../../components/DocumentTitle";
import css from "../HomePage/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Welcome to your personal phonebook{" "}
          <span role="img" aria-label="Textbook">
            📒
          </span>
        </h1>
      </div>
    </>
  );
}
