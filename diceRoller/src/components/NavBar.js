import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'

export const NavBar = props => {
  //const classes = useStyles();
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
    <Paper > 
      {/* className={classes.root}> */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Character Creator" />
        <Tab label="Skill Rolling" />
        <Tab label="Advancements" />
      </Tabs>
    </Paper>
  );
}
