import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Payments extends Component {
	render() {
		//debugger;
		return (
			<StripeCheckout
				name='Customer Connection'
				description = 'NO REAL CREDIT CARDS'
				amount = {500} // cents
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn-flat btn-large white-text">
					Add Points
				</button>
			</StripeCheckout>
		);
	}
}

export default connect(null, actions) (Payments);