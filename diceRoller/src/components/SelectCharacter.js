import React from 'react'
import { Button, Typography } from '@material-ui/core'

export default (props) => {
  return(
    <>
      <br /><br /><br /><br />
      <Typography variant="h3">
        Please select a character.  
      </Typography>
      <Button>{props.character.characterName}</Button>


    </>
  )}