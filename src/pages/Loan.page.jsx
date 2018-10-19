import React, { PureComponent } from 'react';

import Sidebar from '../components/Sidebar.component';
import Main from '../components/Main.component';

class LoanPage extends PureComponent {
  render() {
    return (
      <div className="loanpage-container">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default LoanPage;
