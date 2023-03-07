import React, { FC, useState , useRef, useEffect} from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import "./App.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu";

createStore({
  darkMode: false,
});

export enum NavigationScreens {
  HOME = "HOME",
  ABOUT = "ABOUT",
}

const App: FC = () => {
  const [navigation, setNavigation] = useState<string>(NavigationScreens.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const navigateHandler = (screenName: NavigationScreens) => {
    setNavigation(screenName);
  };
  const toggleMenu = (value: boolean) => {
    setIsMenuOpen(value);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if(menuRef.current !== null){
      menuRef.current.style.width= isMenuOpen ? '20%': '0';
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);
  
  return (
    <StateMachineProvider>
      <div>
      <button className={`menu-button ${darkMode? 'button-dark' : 'button-light'}`}
      onClick={() => {toggleMenu(true)}}><DensityMediumIcon/></button>
          <Menu 
          toggleMenu={toggleMenu}
          navigateHandler={navigateHandler}
          toggleDarkMode={toggleDarkMode}
          menuRef={menuRef}
          darkMode={darkMode}
          />
      {
        navigation === NavigationScreens.HOME && (
          <Home
          darkMode={darkMode}
          />
        )
      }
      {
        navigation === NavigationScreens.ABOUT && (
          <About/>
        )
      }
    </div>
    </StateMachineProvider>
  );
};

export default App;
