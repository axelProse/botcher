import React from 'react';
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
  const [value, setValue] = React.useState(1);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <AppBar>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Character Creator" className={classes.tabs} component={Link} to='/character-creator' />
        <Tab label="Skill Rolling" className={classes.tabs} component={Link} to='/skill-rolling' />
        <Tab label="Advancement" className={classes.tabs} component={Link} to='/advancement' />
      </Tabs>
    </AppBar>
  );
}))
