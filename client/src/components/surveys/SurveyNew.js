// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <div style={{height:'500px', width:'800px', margin:'0 auto'}}>
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
      </div>
    );
  }

  render() {
    return (
      <div style={{height: "600px", backgroundColor: '#D3D3D3'}}>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);