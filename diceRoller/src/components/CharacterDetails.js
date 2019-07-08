import React from 'react';
import { Paper, Typography } from '@material-ui/core'

export const CharacterDetails = props => (

  // {...useCharacterInfo} = this.props,
  <Paper>
    <Typography variant="h3"> 
      Name: {props.characterName}
    </Typography>
    <Typography variant="subtitle1">
      <h2>Wounds: {props.wounds}</h2>
      <h2>Rank: {props.rank}</h2>
      <h2>Experience: {props.experience}</h2>
      <h2>Bennies: {props.bennies}</h2>
    </Typography>
  </Paper>
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

