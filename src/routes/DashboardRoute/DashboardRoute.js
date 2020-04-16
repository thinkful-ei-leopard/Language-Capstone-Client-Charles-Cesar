import React, { Component } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import LanguageContext from '../../contexts/LanguageContext'

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <section>
        <Dashboard />
      </section>
    );
  }
}

export default DashboardRoute
