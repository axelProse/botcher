import React from 'react';
import { Paper, Typography } from '@material-ui/core'

export const CharacterDetails = props => (

  // {...useCharacterInfo} = this.props,
  <Paper>
    <Typography variant="h3"> 
      Name: {props.characterName}
    </Typography>
    <Typography variant="h4">
      <div>Wounds: {props.wounds}</div>
      <div>Rank: {props.rank}</div>
      <div>Experience: {props.experience}</div>
      <div>Bennies: {props.bennies}</div>
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

