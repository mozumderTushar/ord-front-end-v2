import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import tax from '../../../images/img/documents/tax.png';
import tax2 from '../../../images/img/documents/tax2.png';
import tax3 from '../../../images/img/documents/tax3.png';
import tax4 from '../../../images/img/documents/tax4.png';

import trade from '../../../images/img/documents/tread_lycense.png';
import trade2 from '../../../images/img/documents/trade2.png';
import drug from '../../../images/img/documents/drug.png';

import importImg from '../../../images/img/documents/import.png';
import importImg2 from '../../../images/img/documents/import2.png';

import membership from '../../../images/img/documents/membership.png';
import membership2 from '../../../images/img/documents/membership2.png';

import work from '../../../images/img/documents/work.png';
import work2 from '../../../images/img/documents/work2.png';
import work3 from '../../../images/img/documents/work3.png';
import work4 from '../../../images/img/documents/work4.png';
import work5 from '../../../images/img/documents/work5.png';
import work6 from '../../../images/img/documents/work6.png';
import work7 from '../../../images/img/documents/work7.png';
import work8 from '../../../images/img/documents/work8.png';
import work9 from '../../../images/img/documents/work9.png';
import work10 from '../../../images/img/documents/work10.png';
import work11 from '../../../images/img/documents/work11.png';
import work12 from '../../../images/img/documents/work12.png';


const AboutGallery = () => {

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  const handleClick = (e) => {

    e.preventDefault();

    const buttons = document.querySelectorAll('.btnGallery');
    const storeImages = document.querySelectorAll('.store-item');

    buttons.forEach((button, index) => {
      button.addEventListener('click', (e) => {

        const filter = e.target.dataset.filter;

        storeImages.forEach((item, index) => {
          if (filter === 'all') {
            item.style.display = 'block';
          } else {
            if (item.classList.contains(filter)) {
              item.style.display = 'block'
            } else {
              item.style.display = 'none'
            }
          }
        })
      })
    })

  }

  return (
    <div className="container">
      <h1>COMPANY'S DOCUMENTS</h1>

      <div className={ model ? 'model open' : 'model' } >
        <img src={ tempImgSrc } alt="" />
        <CloseIcon onClick={ () => setModel(false) } />
      </div>

      <div className="menu" onClick={ handleClick }>
        <a href="" className="btnGallery" data-filter="all">ALL</a>
        <a href="" className="btnGallery" data-filter="tax">TAX</a>
        <a href="" className="btnGallery" data-filter="trade">TRADE LICENSE</a>
        <a href="" className="btnGallery" data-filter="import">IMPORT REGISTRATION</a>
        <a href="" className="btnGallery" data-filter="membership">MEMBERSHIP</a>
        <a href="" className="btnGallery" data-filter="work">WORK</a>
      </div>


      <div className="box" id="store-items">

        <div className="store-item tax " onClick={ () => getImg(tax) }>
          <img src={ tax } alt="" className="store-img" />
        </div>
        <div className="store-item tax" onClick={ () => getImg(tax2) }>
          <img src={ tax2 } alt="" className="store-img" />
        </div>
        <div className="store-item tax" onClick={ () => getImg(tax3) }>
          <img src={ tax3 } alt="" className="store-img" />
        </div>
        <div className="store-item tax" onClick={ () => getImg(tax4) }>
          <img src={ tax4 } alt="" className="store-img" />
        </div>

        <div className="store-item trade" onClick={ () => getImg(trade) }>
          <img src={ trade } alt="" className="store-img" />
        </div>
        <div className="store-item trade" onClick={ () => getImg(trade2) }>
          <img src={ trade2 } alt="" className="store-img" />
        </div>
        <div className="store-item trade" onClick={ () => getImg(drug) }>
          <img src={ drug } alt="" className="store-img" />
        </div>

        <div className="store-item import" onClick={ () => getImg(importImg) }>
          <img src={ importImg } alt="" className="store-img" />
        </div>
        <div className="store-item import" onClick={ () => getImg(importImg2) }>
          <img src={ importImg2 } alt="" className="store-img" />
        </div>

        <div className="store-item membership" onClick={ () => getImg(membership) }>
          <img src={ membership } alt="" className="store-img" />
        </div>
        <div className="store-item membership" onClick={ () => getImg(membership2) }>
          <img src={ membership2 } alt="" className="store-img" />
        </div>

        <div className="store-item work" onClick={ () => getImg(work) }>
          <img src={ work } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work2) }>
          <img src={ work2 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work3) }>
          <img src={ work3 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work4) }>
          <img src={ work4 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work5) }>
          <img src={ work5 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work5) }>
          <img src={ work5 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work6) }>
          <img src={ work6 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work7) }>
          <img src={ work7 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work8) }>
          <img src={ work8 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work9) }>
          <img src={ work9 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work10) }>
          <img src={ work10 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work11) }>
          <img src={ work11 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work12) }>
          <img src={ work12 } alt="" className="store-img" />
        </div>
      </div>

    </div>
  );
};

export default AboutGallery;