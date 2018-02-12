import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'
import NewSurvey from './newSurvey'

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return(
						<div className="preloader-wrapper small active">
				    		<div className="spinner-layer spinner-red-only">
				     		 <div className="circle-clipper left">
				        			<div className="circle"></div>
				      			</div><div className="gap-patch">
				       			 <div className="circle"></div>
				     			 </div><div className="circle-clipper right">
				       			 	<div className="circle"></div>
				     			</div>
				   			</div>
				  		</div>
					)
			case false:
				return <li><a href="/auth/google">Login</a></li>
			default:
				return [
						<li key = "4"><NewSurvey /></li>,
						<li key = "1"><Payments /></li>,
						<li key="3" style={{ margin: '0 10px' }}>
							POINTS: {this.props.auth.credits}
						</li>,
						<li key = "2"><a href="/api/logout">logout</a></li>

						]
		}
	}
	render() {
		console.log(this.props);
		return (
			<nav className="blue">
				<div className ="nave-wrapper">
					<Link to={this.props.auth ? 'surveys' : '/'}
						className ="left brand-logo"
					>
						Customer Connection
					</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
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