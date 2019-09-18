import React, { Component } from 'react'
import Lists from '../lists/Lists'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { lists } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <Lists lists={lists} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.list.lists
  }
}

export default connect(mapStateToProps)(Dashboard)