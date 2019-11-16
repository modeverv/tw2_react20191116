import React from 'react';
import TitleAppBar from '../parts/Header'
import MyCard from '../parts/Card'
import {
  readFavos,
  readTags
} from '../../actions'
import {connect} from 'react-redux'
import _ from 'lodash'

class App extends React.Component {

  componentDidMount() {
    this.props.readFavos({})
    this.props.readTags()
  }

  renderFavos() {
    return _.map(this.props.favos.favos, favo => (
      <MyCard key={favo.id} text={favo.txt}/>
    ));
  }

  render () {
    console.log(this.props.favos)
    return <div className="App">
      <TitleAppBar title='A' tags={this.props.favos.tags}/>
      {
        this.renderFavos()
      }
    </div>
  }
}
const mapStateToProps = state => ({favos: state.favos})
const mapDispatchToProps = ({readTags,readFavos})
export default connect(mapStateToProps,mapDispatchToProps)(App);
