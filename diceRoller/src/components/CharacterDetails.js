import React from 'react';

export const CharacterDetails = props => (

  // {...useCharacterInfo} = this.props,
  <>
    <div>Name: {props.characterName}</div>
    <div>Wounds: {props.wounds} 
    {/* <button onClick={() => props.setWounds(props.wounds+1)}>Click me to update wounds.</button>*/}
    </div>
    <div>Rank: {props.rank}</div>
    <div>Experience: {props.experience}</div>
    <div>Bennies: {props.bennies}</div>
  </>
    //   <button onClick={() => setCount(count+1)}>
    //   {count}
    // </button>
);

// export const CharacterDetails = ({characterName, wounds, rank, experience, bennies}) => (

//   // {...useCharacterInfo} = this.props,
//   <>
//     <div>Name: {characterName}</div>
//     <div>Wounds: {wounds} 
//     {/* <button onClick={() => props.setWounds(props.wounds+1)}>Click me to update wounds.</button>*/}
//     </div>
//     <div>Rank: {rank}</div>
//     <div>Experience: {experience}</div>
//     <div>Bennies: {bennies}</div>
//   </>
//     //   <button onClick={() => setCount(count+1)}>
//     //   {count}
//     // </button>
// );

