import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }


  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="row" style={{ width:'800px', margin:'0 auto'}}>
          <div class="col s12">
            <div className="card darken-1" key={survey._id}>
              <div className="card-content">
                <span className="card-title">{survey.title}</span>
                <p>
                  {survey.body}
                </p>
                <p className="right">
                  Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <a>Like: {survey.yes}</a>
                <a>Don't Like: {survey.no}</a>
              </div>
            </div>
          </div>
      </div>

      );
    });
  }

  render() {
    return (
      <div style={{backgroundColor: '#D3D3D3'}}>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);