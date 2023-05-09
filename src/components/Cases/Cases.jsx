import { businessCasesImg } from './business_cases_img';
import { Gallery } from './gallery';

export const Cases = () => {
  const isMob = window.matchMedia('(min-width: 320px) and (max-width: 767px');
  console.log(isMob);
  return (
    <section id="Cases">
      <p className="cases__text">This is what we do</p>
      <h2 className="cases__heading">Business Cases</h2>
      <p className="cases__par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>

      {isMob.matches ? (
        <ul className="cases__list container--padding">
          {businessCasesImg.map(item => {
            return (
              <li key={item.id}>
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
              </li>
            );
          })}
        </ul>
      ) : (
        <Gallery />
      )}
    </section>
  );
};
