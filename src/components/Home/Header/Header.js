import React from 'react';
import img from '../../../images/img/about/book.png'

const Header = () => {
  return (
    <div className="content">
      <div className="left">
        <h1><span className="Ostyle">O</span><span className="RDstyle">RD</span></h1>
        <h1>INTERNATIONAL LTD</h1>
        <br />
        <p> Elevator, Generator and Substation  Manufacturer, Medical Equipment, fisheries, Agro, Importer & Supplier</p>
        <br />
        <p>
          The vision of ORD International LTD is to become a diversified, leading supplier in the engineering industry countrywide, by designing & delivering the most innovative specialty products in the engineering field that it is active in.</p>
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