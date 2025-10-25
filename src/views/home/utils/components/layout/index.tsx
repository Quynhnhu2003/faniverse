// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { Outlet } from "react-router-dom";
import HeaderHome from "../header";
import { useDispatch } from "react-redux";
import { handleShowMenubar } from "../../../store/headerStore";

export default function LayoutHome() {
  // ** Hook
  const dispatch = useDispatch();

  // ** function
  const showSideBar =() => {
    console.log('click menu bar')
    dispatch(handleShowMenubar(true))
  }

  return (
    <div className={styles.layoutContainer}>
      <HeaderHome onClickSideBar={() => showSideBar()}  />
      <Outlet />
    </div>
  );
}
