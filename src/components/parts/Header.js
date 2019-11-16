import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import {
  readFavos,
} from '../../actions'
import {connect} from 'react-redux'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: "0 auto",
    minWidth: "98%",
    color: "#FFF"
  },
}));

function TitleAppBar(props) {
  const classes = useStyles();
  const [selectValue,setSelectValue] = React.useState("");
  const handleChange = event => {
    setSelectValue(event.target.value);
    console.log(event.target.value);
    console.log(props);
    props.readFavos({tag: event.target.value});
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Select
            value={selectValue}
            onChange={handleChange}
            className={classes.formControl}
          >
          <MenuItem key="::::NULL::::" value="::::NULL::::">未設定</MenuItem>
          {
            _.map(props.tags, tag => (
              <MenuItem key={tag} value={tag}>{tag}</MenuItem>
            ))
          }
          </Select>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapDispatchToProps = ({readFavos})
export default connect(null,mapDispatchToProps)(TitleAppBar);

