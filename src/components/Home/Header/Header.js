import React from 'react';
import img from '../../../images/img/about/book.png'

const Header = () => {
  return (
    <div className="content">
      <div className="left">
        <h1>ORD</h1>
        <h1>INTERNATIONAL</h1>
        <br />
        <p> Elevator, Generator and Substation  Manufacturer, Importer & Supplier</p>
        <br />
        <p>
          The vision of ORD International. is to become a diversified, leading supplier in the healthcare industry countrywide, by designing & delivering the most innovative specialty products in the healthcare field that it is active in.</p>
      </div>
      <div className="right">
        <div className="box">
          <img src={ img } alt="" className="director" />
        </div>
      </div>
    </div>
  );
};

export default Header;