import React, {FC} from "react";
import { NavigationScreens } from "../App";

interface MenuProps {
  toggleMenu: (value: boolean) => void ;
  navigateHandler: (screenName: NavigationScreens) => void;
};

const Menu: FC<MenuProps> = ({toggleMenu, navigateHandler}) => {

  const placeholder = "placeholder"
  return (
      <div className="menu">
        <button onClick={() => {toggleMenu(false)}}>X</button>
      <button onClick={() => {navigateHandler(NavigationScreens.HOME)}}>Home</button>
      <button onClick={() => {navigateHandler(NavigationScreens.ABOUT)}}>About</button>
      </div>
  )
};

export default Menu;