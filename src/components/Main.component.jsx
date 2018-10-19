import React from 'react';

// components
import Header from './Header.component';
import LoanDetails from './LoanDetails.component';


const Main = () => {
  return (
    <main className="main-container">
      <Header />
      <LoanDetails />
    </main>
  );
};

export default Main;
