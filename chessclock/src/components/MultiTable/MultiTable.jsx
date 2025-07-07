import React from 'react';

function MultiTable(size) {
  let arr = []
  size = 5
  for(let i =1;i<=size;i++)
  {
    arr.push(<ol>{i*i}</ol>)
  }
  return <ul>{arr}</ul>;
}

export default MultiTable;
