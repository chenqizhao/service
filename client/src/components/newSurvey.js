import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as actions from '../actions'
class NewSurvey extends Component {
	render() {
		//debugger;
		return (
				<div >
        			<Link to="/surveys/new" className="btn-flat btn-large white-text">
          			<i className="material-icons">add</i>
       				</Link>
      			</div>
		);
	}
}

export default connect(null, actions) (NewSurvey);