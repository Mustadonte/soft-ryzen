import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { businessCasesImg } from './business_cases_img';

export function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <LightGallery
      onInit={onInit}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="cases__list container--padding"
      data-source={true}
      data-width={true}
    >
      {businessCasesImg.map(item => {
        return (
          <a href={item.img1J} key={item.id}>
            <picture>
              <source
                srcSet={`${item.img1W} 1x, ${item.img2W} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${item.img1J} 1x, ${item.img2J} 2x`}
                type="image/jpeg"
              />
              <img src={item.img1J} alt="some case" />
            </picture>
          </a>
        );
      })}
    </LightGallery>
  );
}
