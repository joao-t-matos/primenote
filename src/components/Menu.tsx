import { Switch } from "@mui/material";
import React, {FC, MutableRefObject} from "react";
import { NavigationScreens } from "../App";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ClearIcon from '@mui/icons-material/Clear';

interface MenuProps {
  toggleMenu: (value: boolean) => void ;
  navigateHandler: (screenName: NavigationScreens) => void;
  toggleDarkMode: () => void;
  menuRef: MutableRefObject<HTMLDivElement | null>; 
  darkMode: boolean;
};

const Menu: FC<MenuProps> = ({toggleMenu, navigateHandler, toggleDarkMode, menuRef, darkMode}) => {
  return (
      <div ref={menuRef} className={`menu ${darkMode? 'menu-dark': 'menu-light'}`} >
        <div className="menu-button-container">
          <button  className="menu-close" onClick={() => {toggleMenu(false)}}><ClearIcon fontSize="inherit"/></button>
        </div>
        <button className="menu-row" onClick={() => {navigateHandler(NavigationScreens.HOME)}}>Home</button>
        <button className="menu-row" onClick={() => {navigateHandler(NavigationScreens.ABOUT)}}>About</button>
        <div className="dark-mode-switch menu-row">
          <WbSunnyIcon/>
          <Switch defaultChecked onChange={() => {toggleDarkMode()}}color="secondary" />
          <DarkModeIcon/>
        </div>
      </div>
  )
};

export default Menu;