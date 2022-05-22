import React, { useState } from 'react';
import { galleryImg } from '../../../constants/GalleryImgConstatnts';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


const Gallery = () => {

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <div className="gallery_container">
      {/* <h1 className='title'>Image Gallery</h1> */ }
      <div className={ model ? 'model open' : 'model' } >
        <img src={ tempImgSrc } alt="" />
        <CloseIcon onClick={ () => setModel(false) } />
      </div>

      
        <div className="see_more">
        <Link to='/images'>SEE MORE</Link>
        </div>
  


      <div className="gallery" data-aos='fade-up'>
        {
          galleryImg.map((item, index) => {
            return (
              <div className="gallery_pics" key={ index } onClick={ () => getImg(item.imgSrc) }>
                <img className="gallery_img img-fluid" src={ item.imgSrc } alt="IMG" />
                <div className="bottom-left"><h3>{ item.title }</h3></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Gallery;