import React, {FC, useState} from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './components/Menu'; 

export enum NavigationScreens {
  HOME = "HOME",
  ABOUT = "ABOUT"
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
    <div className="App">
      <button onClick={() => {toggleMenu(true)}}>Menu</button>
      {
         isMenuOpen && (
          <Menu 
          toggleMenu={toggleMenu}
          navigateHandler={navigateHandler}
          />
        )
      }
      {
        navigation === NavigationScreens.HOME && (
          <Home/>
        )
      }
      {
        navigation === NavigationScreens.ABOUT && (
          <About/>
        )
      }
    </div>
  );
}

export default App;
