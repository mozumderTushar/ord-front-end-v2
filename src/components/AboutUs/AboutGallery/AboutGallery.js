import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import tax from '../../../images/img/documents/tax.jpg';
import tax1 from '../../../images/img/documents/tax1.jpg';
import tax2 from '../../../images/img/documents/tax2.jpg';



import trade from '../../../images/img/documents/trade.jpg';
import trade1 from '../../../images/img/documents/trade1.jpg';
import trade2 from '../../../images/img/documents/trade3.jpg';
import trade3 from '../../../images/img/documents/trade4.jpg';

import importImg from '../../../images/img/documents/importImg.jpg';


// import membership from '../../../images/img/documents/membership.png';
// import membership2 from '../../../images/img/documents/membership2.png';

import business from '../../../images/img/documents/business.jpg';
import business1 from '../../../images/img/documents/business1.jpg';


import business2 from '../../../images/img/documents/business2.jpg';
import business3 from '../../../images/img/documents/business3.jpg';
import business4 from '../../../images/img/documents/business4.jpg';
import business5 from '../../../images/img/documents/business5.jpg';
import business6 from '../../../images/img/documents/business6.jpg';
import business7 from '../../../images/img/documents/business7.jpg';
import business8 from '../../../images/img/documents/business8.jpg';
import business9 from '../../../images/img/documents/business9.jpg';
import business10 from '../../../images/img/documents/business10.jpg';
import business11 from '../../../images/img/documents/business11.jpg';
import business12 from '../../../images/img/documents/business12.jpg';
import business13 from '../../../images/img/documents/business13.jpg';
import business14 from '../../../images/img/documents/business14.jpg';


import work from '../../../images/img/documents/work.PNG';
import work2 from '../../../images/img/documents/work1.PNG';
import work3 from '../../../images/img/documents/work3.PNG';
import work4 from '../../../images/img/documents/work4.PNG';
import work5 from '../../../images/img/documents/work5.PNG';
import work6 from '../../../images/img/documents/work6.PNG';
import work7 from '../../../images/img/documents/work7.PNG';
import work8 from '../../../images/img/documents/work8.PNG';
import work9 from '../../../images/img/documents/work9.PNG';


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
    <div className="containers">
      <h1>DOCUMENTS</h1>

      <div className={ model ? 'model open' : 'model' } >
        <img src={ tempImgSrc } alt="" />
        <CloseIcon onClick={ () => setModel(false) } />
      </div>

      <div className="menu" onClick={ handleClick }>
        <a href="" className="btnGallery" data-filter="all">ALL</a>
        <a href="" className="btnGallery" data-filter="tax">TAX</a>
        <a href="" className="btnGallery" data-filter="trade">TRADE LICENSE</a>
        <a href="" className="btnGallery" data-filter="import">IMPORT REGISTRATION</a>
        <a href="" className="btnGallery" data-filter="business">BUSINESS CERTIFICATES</a>
        {/* <a href="" className="btnGallery" data-filter="membership">MEMBERSHIP</a> */}
        <a href="" className="btnGallery" data-filter="work">PROJECTS</a>
      </div>


      <div className="box" id="store-items">

        <div className="store-item tax " onClick={ () => getImg(tax) }>
          <img src={ tax } alt="" className="store-img" />
        </div>
        <div className="store-item tax" onClick={ () => getImg(tax1) }>
          <img src={ tax1 } alt="" className="store-img" />
        </div>
        <div className="store-item tax" onClick={ () => getImg(tax2) }>
          <img src={ tax2 } alt="" className="store-img" />
        </div>


        <div className="store-item trade" onClick={ () => getImg(trade) }>
          <img src={ trade } alt="" className="store-img" />
        </div>
        <div className="store-item trade" onClick={ () => getImg(trade1) }>
          <img src={ trade1 } alt="" className="store-img" />
        </div>
        <div className="store-item trade" onClick={ () => getImg(trade2) }>
          <img src={ trade2 } alt="" className="store-img" />
        </div>
        <div className="store-item trade" onClick={ () => getImg(trade3) }>
          <img src={ trade3 } alt="" className="store-img" />
        </div>

        <div className="store-item import" onClick={ () => getImg(importImg) }>
          <img src={ importImg } alt="" className="store-img" />
        </div>


        {/* <div className="store-item membership" onClick={ () => getImg(membership) }>
          <img src={ membership } alt="" className="store-img" />
        </div>
        <div className="store-item membership" onClick={ () => getImg(membership2) }>
          <img src={ membership2 } alt="" className="store-img" />
        </div> */}

        <div className="store-item business" onClick={ () => getImg(business) }>
          <img src={ business } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business1) }>
          <img src={ business1 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business2) }>
          <img src={ business2 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business3) }>
          <img src={ business3 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business4) }>
          <img src={ business4 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business5) }>
          <img src={ business5} alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business6) }>
          <img src={ business6 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business7) }>
          <img src={ business7 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business8) }>
          <img src={ business8 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business9) }>
          <img src={ business9 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business10) }>
          <img src={ business10 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business11) }>
          <img src={ business11 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business12) }>
          <img src={ business12 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business13) }>
          <img src={ business13 } alt="" className="store-img" />
        </div>
        <div className="store-item business" onClick={ () => getImg(business14) }>
          <img src={ business14 } alt="" className="store-img" />
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
        {/* <div className="store-item work" onClick={ () => getImg(work10) }>
          <img src={ work10 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work11) }>
          <img src={ work11 } alt="" className="store-img" />
        </div>
        <div className="store-item work" onClick={ () => getImg(work12) }>
          <img src={ work12 } alt="" className="store-img" />
        </div> */}
      </div>

    </div>
  );
};

export default AboutGallery;