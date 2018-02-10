import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'still deciding'
			case false:
				return <li><a href="/auth/google">login with google</a></li>
			default:
				return [
						<li key = "1"><Payments /></li>,
						<li key="3" style={{ margin: '0 10px' }}>
							Credits: {this.props.auth.credits}
						</li>,
						<li key = "2"><a href="/api/logout">logout</a></li>
						]
		}
	}
	render() {
		console.log(this.props);
		return (
			<nav>
				<div className ="nave-wrapper">
					<Link to={this.props.auth ? 'surveys' : '/'}
						className ="left brand-logo"
					>
						Job Finder
					</Link>
					<ul className = "right"> 
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

/*function mapStateToProps({ state }) {
	return {
		auth : state.auth
	};
}
*/

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps) (Header);