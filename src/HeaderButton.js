import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const themeContext = React.useContext(ThemeContext)
  const [button, setButton] = useState(themeContext)
  
  const buttonColor = () => {
    if(button === themeContext.black) {
      setButton(themeContext.blue)
    } else {
      setButton(themeContext.black)
    }
    return button
  }

  return (
    <div>
      <button onClick={buttonColor} style={button}>Press me to change Color!</button>
    </div>
  );
}

export default HeaderButton;
