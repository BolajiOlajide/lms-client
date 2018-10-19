import React from 'react';

// svgs
import Menu from '../svg/Menu.svg';
import Info from '../svg/Info.svg';
import Contact from '../svg/Contact.svg';
import Bank from '../svg/Bank.svg';
import Attachment from '../svg/Attachment.svg';
import Archive from '../svg/Archive.svg';
import Delete from '../svg/Delete.svg';


const MenuLink = () => {
  return (
    <section className="menu-link">
      <div>
        <img src={Menu} alt="menu" />
        <span>Main list</span>
      </div>

      <div>
        <img src={Info} alt="info" />
        <span>Loan details</span>
      </div>

      <div>
        <img src={Contact} alt="contact" />
        <span>Contacts</span>
      </div>

      <div>
        <img src={Bank} alt="bank" />
        <span>Bank names</span>
      </div>

      <div>
        <img src={Attachment} alt="attachment" />
        <span>Attachments</span>
      </div>

      <div>
        <img src={Archive} alt="archive" />
        <span>Archived Loans</span>
      </div>

      <div>
        <img src={Delete} alt="delete" />
        <span>Deleted Loans</span>
      </div>
    </section>
  );
};

export default MenuLink;
