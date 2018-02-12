import React, { Component } from 'react';


class Footer extends Component {

  render() {
    return (
        <footer className="blue page-footer">

          <div className="container body">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Customer Connections</h5>
              </div>
              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-3" href="www.linkedin.com/in/chenqizhao">About me</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/chenqizhao">More on Github</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Chenqi Zhao, All right reserved
            </div>
          </div>
        </footer>
      )
  }
}
export default Footer;