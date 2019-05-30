import React from 'react';

// styles
import UcheNwosu from '../../../resources/img/uche_nwosu.jpg';
import BabajideSanwoolu from '../../../resources/img/babajide-sanwoolu.jpg';
import IfeanyiUgwu from '../../../resources/img/ifeanyi-ugwu.jpg';
import Jonathan from '../../../resources/img/jonathan.jpg';
import PeterObi from '../../../resources/img/peter-obi.jpg';
import Osinbajo from '../../../resources/img/osinbajo.jpg';
import Bello from '../../../resources/img/bello.jpg';
import Atiku from '../../../resources/img/atiku-abubakar.jpg';
import Oby from '../../../resources/img/oby.jpg';
import Moghalu from '../../../resources/img/kingsley-moghalu.jpg';
import Saraki from '../../../resources/img/saraki.jpg';
import Ohakim from '../../../resources/img/ohakim.jpg';
import Tinubu from '../../../resources/img/tinubu.jpg';
import Buhari from '../../../resources/img/buhari.jpg';

const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src={UcheNwosu} alt="Gallery image 1" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src={Atiku} alt="Gallery image 2" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img
          src={BabajideSanwoolu}
          alt="Gallery image 3"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src={IfeanyiUgwu} alt="Gallery image 4" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img src={Buhari} alt="Gallery image 5" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img src={Tinubu} alt="Gallery image 6" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img src={Ohakim} alt="Gallery image 7" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img src={Saraki} alt="Gallery image 8" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img src={Moghalu} alt="Gallery image 9" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img src={Oby} alt="Gallery image 10" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img src={Bello} alt="Gallery image 11" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img src={Osinbajo} alt="Gallery image 12" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img src={PeterObi} alt="Gallery image 13" className="gallery__img" />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img src={Jonathan} alt="Gallery image 14" className="gallery__img" />
      </figure>
    </section>
  );
};

export default Gallery;
