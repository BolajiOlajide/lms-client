import React, { PureComponent } from 'react';

import Button from './Button.component';
import MenuLink from './MenuLink.component';


class Sidebar extends PureComponent {
  renderLogo = () => (
    <section className="logo-section">
      <span className="logo-text">Logo</span>
    </section>
  );

  render() {
    return (
      <aside className="sidebar-container">
        {this.renderLogo()}
        <MenuLink />
        <Button
          type="primary"
          className="add-loan-btn"
          name="Add new loan"
        />
      </aside>
    );
  }
}

export default Sidebar;
