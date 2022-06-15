import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import NavBar from '../Shared/NavBar/NavBar/NavBar'
import Footer from '../Shared/Footer/Footer';
import { ImageGalleryConstant } from '../../constants/GalleryImgConstatnts';
import { ImageList, ImageListItemBar,ImageListItem } from '@material-ui/core';

const ImageGallery = () => {
  const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   fetch('')
  //     .then(response => response.json())
  //     .then(data => setPhotos(data))
  // }, [])

  return (
    <div>
      <NavBar />
      <Helmet>
        <title>ORD Gallery</title>
      </Helmet>
      <div className="imgDiv">
        <ImageList rowHeight={ 375 } cols={3}>
          {
            ImageGalleryConstant.map((img, index) => {
              return (
                <ImageListItem
                  style={ { flexGrow: '1' } }
                  cols={img.cols || 1}
                  key={ index }
                >
                  <img src={ img.imgSrc } alt="" />
                  <ImageListItemBar title={ img.captions } subtitle={ img.subtitle } />
                </ImageListItem>
              )
            })
          }
        </ImageList>
      </div>
      <Footer />
    </div>
  );
};

export default ImageGallery;