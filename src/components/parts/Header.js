import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    color: "#FFF"
  },
}));

function TitleAppBar(props) {
  const classes = useStyles();
  const [age,setAge] = React.useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Select
            value={age}
            onChange={handleChange}
            className={classes.formControl}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TitleAppBar;
