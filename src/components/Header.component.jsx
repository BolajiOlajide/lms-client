import React from 'react';

// components
import { Avatar, Input } from 'antd';

import Filter from '../svg/Filter.svg';


const Search = Input.Search;

const Header = () => {
  return (
    <nav className="header">
      <section className="filter-section">
        <Search />
        <span>Filter Search</span>
        <img src={Filter} alt="filter" />
      </section>

      <section className="avatar-section">
        <span>Alonso</span>
        <Avatar
          size={64}
          icon="user" alt="user-image"
        />
      </section>
    </nav>
  );
};

export default Header;
