import React, { useState } from 'react'

function Tableau(props) {
  const [tbl_time, setTime] = useState(new Date().toLocaleTimeString())
  const [textColor, setTextColor] = useState(props.digit_color)

  const changeMyTime = () => setTime(new Date().toLocaleTimeString())
  const changeColor = () => {
    setTextColor(prevColor => (prevColor === 'red' ? 'green' : 'red'))
  }

  const tab_style = {
    color: textColor,
    backgroundColor: "aqua"
  }

  return (
    <h1
      style={tab_style}
      onClick={() => {
        changeMyTime()
        changeColor()
      }}>
      {tbl_time}
    </h1>
  )
}

export default Tableau


