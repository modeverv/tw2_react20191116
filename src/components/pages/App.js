import React from 'react';
import { Link } from "react-router-dom";
import TitleAppBar from '../parts/Header'
import MyCard from '../parts/Card'
import {
  readFavos,
  readTags
} from '../../actions'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.readFavos({})
    this.props.readTags()
  }

  render () {
    return <div className="App">
      <TitleAppBar title='A'/>
      <MyCard text="text1"/>
      <MyCard text="text2"/>
      <MyCard text="text3"/>      
    </div>
  }
}
const mapStateToProps = state => ({favos: state.favos })
const mapDispatchToProps = ({readTags,readFavos})
export default connect(mapStateToProps,mapDispatchToProps)(App);
