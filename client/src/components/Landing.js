import React from 'react'
import Background from './materials/background.jpg';
import { Link } from 'react-router-dom'
const Landing = () => {

var sectionStyle = {
  width: "100%",
  height: "800px",
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  overflow: 'hidden'
};
	return( 
		<section style={ sectionStyle }>
		<div>
		<div style = {{ textAlign: 'center', color: "white"}}>
			<Link to="/surveys" className="btn-flat waves-teal white-text">
	            Connect Your Customers
	        </Link>
		</div>
		</div>
		</section>
	);
};


export default Landing;