import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { getThemeProps } from '@material-ui/styles';

const styles = theme => (
  {
    tabs: {
      color: theme.palette.text.secondary.light,
    },
  }
)

export default withStyles(styles)(({classes}) => {
  const [value, setValue] = React.useState(1);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  // It appears that in order to really hook different pages up to each tab, I will need to utilize a Switch and react-router.  
  // This basically assigns a URL to each page, and you link the tabs to those URLs.  The switch knows how to route things based on the path passed in from the tab.  I think?
  // Here's a small sample I found:
//   <BrowserRouter>
//  <div className={classes.root}>
//   <AppBar position="static" color="default">
//     <Tabs
//       value={this.state.value}
//       onChange={this.handleChange}
//     >
//       <Tab label="Item One" component={Link} to="/one" />
//       <Tab label="Item Two" component={Link} to="/two" />
//     </Tabs>
//   </AppBar>

//   <Switch>
//     <Route path="/one" component={PageShell(ItemOne)} />
//     <Route path="/two" component={PageShell(ItemTwo)} />
//   </Switch>
// </div>

  return (
    <AppBar>
       {/* classes={{ paper: classes.paper }}> */}
       {/* style={style.paper}>  */}
      {/* className={classes.root}> */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Character Creator" className={classes.tabs} />
        <Tab label="Skill Rolling" className={classes.tabs} />
        <Tab label="Advancements" className={classes.tabs} />
      </Tabs>
    </AppBar>
  );
})
