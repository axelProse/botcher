import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link, withRouter } from 'react-router-dom'

const styles = theme => (
  {
    tabs: {
      color: theme.palette.text.secondary.light,
    },
  }
)

export default withRouter(withStyles(styles)(({classes}) => {
  const [indicator, setIndicator] = useState(1);
  function handleChange(event, newValue) {
    setIndicator(newValue);
  }

  return (
    <AppBar>
      <Tabs
        value={indicator}
        onChange={handleChange}
        centered
      >
        <Tab label="Character Creator" className={classes.tabs} component={Link} to='/character-creator' />
        <Tab label="Skill Rolling" className={classes.tabs} component={Link} to='/skill-roller' />
        <Tab label="Advancement" className={classes.tabs} component={Link} to='/advancement' />
      </Tabs>
    </AppBar>
  );
}))
