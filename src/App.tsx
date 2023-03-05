import React, { FC, useState } from "react";
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
  const navigateHandler = (screenName: NavigationScreens) => {
    setNavigation(screenName);
  };
  const toggleMenu = (value: boolean) => {
    setIsMenuOpen(value);
  };

  return (
    <StateMachineProvider>
      <div className="App">
        <button
          className="menu-button"
          onClick={() => {
            toggleMenu(true);
          }}
        >
          <DensityMediumIcon />
        </button>
        {isMenuOpen && (
          <Menu toggleMenu={toggleMenu} navigateHandler={navigateHandler} />
        )}
        {navigation === NavigationScreens.HOME && <Home />}
        {navigation === NavigationScreens.ABOUT && <About />}
      </div>
    </StateMachineProvider>
  );
};

export default App;
