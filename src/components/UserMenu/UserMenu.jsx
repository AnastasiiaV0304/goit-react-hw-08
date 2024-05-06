import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapperUserMenu}>
      <p>
        Welcome, <span>{user.name}!</span>
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
};
