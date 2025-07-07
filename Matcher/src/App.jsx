import React from 'react';
import { useState } from 'react';
import './App.css';
import { 
  FcAlarmClock, 
  FcBinoculars,
  FcCellPhone,
  FcCloseUpMode,
  FcCamcorderPro,
  FcInTransit,
  FcLinux,
  FcHome,
} from "react-icons/fc";

function MemoryField(props) {
  const [ivisible, setVisible] = useState(props.visible);

  const toggleVisibility = () => {
    setVisible(!ivisible);
  };

  return (
    <div onClick={toggleVisibility}>
      {ivisible ? props.iconname : 'X'}
    </div>
  );
}

function App() {
  // Массив иконок
  const icons = [
    <FcAlarmClock />,
    <FcBinoculars />,
    <FcCellPhone />,
    <FcCloseUpMode />,
    <FcCamcorderPro />,
    <FcInTransit />,
    <FcLinux />,
    <FcHome />,
  ];

  function shuffle(array) {
    const arr = array.slice(); 
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const icons16 = shuffle([...icons, ...icons]).slice(0, 16);

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
        maxWidth: '400px',
        margin: '20px auto',
        fontSize: '40px',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      {icons16.map((icon, index) => (
         <MemoryField
             iconname={icon}
             key={index}
             visible={Math.random() < 0.5}
          />
      ))}
    </div>
  );
}

export default App;

