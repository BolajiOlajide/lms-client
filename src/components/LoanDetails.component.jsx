import React, { PureComponent } from 'react';

// components
import LoanList from './LoanList.component';
import Timeline from './Timeline.component';


class LoanDetails extends PureComponent {
  render() {
    return (
      <section className="loandetails-container">
        <LoanList />
        <Timeline />
      </section>
    )
  }
}

export default LoanDetails;
