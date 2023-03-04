import { Switch } from "@mui/material";
import React, {FC} from "react";
import { NavigationScreens } from "../App";

interface MenuProps {
  toggleMenu: (value: boolean) => void ;
  navigateHandler: (screenName: NavigationScreens) => void;
  toggleDarkMode: () => void;
  darkMode: boolean;
};

const Menu: FC<MenuProps> = ({toggleMenu, navigateHandler, toggleDarkMode, darkMode}) => {

  const placeholder = "placeholder"
  return (
      <div className={`menu ${darkMode? 'menu-dark': 'menu-light'}`} >
      <div className="menu-button-container">
        <button  className="menu-close" onClick={() => {toggleMenu(false)}}>X</button>
      </div>
      <button onClick={() => {navigateHandler(NavigationScreens.HOME)}}>Home</button>
      <button onClick={() => {navigateHandler(NavigationScreens.ABOUT)}}>About</button>
      <Switch defaultChecked onChange={() => {toggleDarkMode()}}color="secondary" />
      </div>
  )
};

export default Menu;