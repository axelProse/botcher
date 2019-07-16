import { createMuiTheme } from "@material-ui/core/styles";
import {cyan, lime, amber, yellow} from '@material-ui/core/colors'

export default createMuiTheme({  
  palette: {
    primary: {
      main: cyan[600],
      light: cyan[200],
      dark: cyan[800],
    },
    secondary: {
      main: lime[500],
      light: lime[200],
      dark: amber[700]  // Right now, I'm using this so that on rollover it changes color.  However, I'm sure there's a better way to do this.  
    },
    error: amber,
    background: yellow,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: cyan[600],
      secondary: {
        main: lime[700],
        light: lime[300],
        dark: lime[900],
      }
    },
    //type: 'dark'
  }, 
  spacing:
    8,
});

// const oldTheme = createMuiTheme({
// //export const createMuiTheme ({

//   palette: {
//     primary: cyan,
//     secondary: lime,
//     error: amber,
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   }
//   // overrides: {
//   //   MuiButton: {
//   //     root: {
//   //       fontWeight: "bold",
//   //       backgroundColor: "orange",
//   //       margin: "10px",
//   //       "&:hover": {
//   //         backgroundColor: "white"
//   //       }
//   //     }
//   //   }
//   // }
// });
// //export default oldTheme;
