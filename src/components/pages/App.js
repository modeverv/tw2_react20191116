import React from 'react';
import TitleAppBar from '../parts/Header'
import MyCard from '../parts/Card'
import { makeStyles } from "@material-ui/core/styles";
import {
  readFavos,
  readTags
} from '../../actions'
import {connect} from 'react-redux'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({
  mm: {
    marginTop: "40px",
  },
}));
class App extends React.Component {
  constructor(props) {
    super(props);
    props = {...props, offset: 0 }
    console.log(props.offset)
  }

  componentDidMount() {
    this.props.readFavos({offset:0})
    this.props.readTags()
    const _this = this
    window.addEventListener('scroll', function (event) {
      var scrollTop = window.pageYOffset
      var height = Math.max.apply(null, [document.body.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight]) - 1000
      if (scrollTop >= height) {
        _this.nextFavos()
      }
    })
  }

  nextFavos(){
    console.log(this.props)
    this.props.readFavos({tag: this.props.tag ,offset: this.props.favos.offset + 10})
  }

  renderFavos() {
    return <React.Fragment>
    {
      _.map(this.props.favos.favos, (favo,index) => (
        <MyCard key={favo.id + "-" + index} text={favo.txt}/>
      ))
    }
    </React.Fragment>
  }

  render () {
    const marginTop = {
      marginTop: "80px",
    }
    return <div className="App">
      <TitleAppBar title='A' tags={this.props.favos.tags}/>
      <div style={marginTop}>
      {
        this.renderFavos()
      }
      </div>
    </div>
  }
}
const mapStateToProps = state => ({favos: state.favos})
const mapDispatchToProps = ({readTags,readFavos})
export default connect(mapStateToProps,mapDispatchToProps)(App);
