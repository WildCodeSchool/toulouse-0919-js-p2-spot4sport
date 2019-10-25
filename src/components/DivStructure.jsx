import React from 'react';
import SportsByFirstChar from './SportsByFirstChar';
import './DivStructure.css';

function DivStructure() {
  const ulArr = [];
  for (let i = 0; i < 26; i += 1) {
    ulArr.push(String.fromCharCode(65 + i));
  }
  return ulArr.map(letter => (
    <div>
      <h4>{letter}</h4>
      <hr />
      <SportsByFirstChar letter={letter} />
    </div>
  ));
}

export default DivStructure;