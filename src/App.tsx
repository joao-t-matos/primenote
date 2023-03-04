import React, {FC, useState} from 'react';
import './App.css';
import Home from './pages/Home';

enum navigationScreens {
  HOME = "HOME",
  ABOUT = "ABOUT"
}

const App: FC = () => {
  const [navigation, setNavigation] = useState<String>();
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
