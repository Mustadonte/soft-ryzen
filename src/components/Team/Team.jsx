import { teamImg } from './team_img';
import { Facebook, Twitter, YouTube, LinkedIn } from './svg-icons';

export const Team = () => {
  return (
    <section id="Team">
      <p className="team__text">Who we are? </p>
      <h2 className="team__heading">Our Professional Team</h2>
      <p className="team__text--bot">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className="team__list container--padding">
        {teamImg.map(item => {
          return (
            <li key={item.name} className="team__listItem">
              <div className="team__img--wrapper">
                <picture>
                  <source
                    srcSet={`${item.img1W} 1x, ${item.img2W} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${item.img1J} 1x, ${item.img2J} 2x`}
                    type="image/jpeg"
                  />
                  <img
                    src={item.img1J}
                    alt={item.position}
                    className="team__list--img"
                  />
                </picture>

                <div className="team__socialsList">
                  <Facebook />
                  <Twitter />
                  <YouTube />
                  <LinkedIn />
                </div>
              </div>
              <div className="team__info">
                <p className="team__name">{item.name}</p>
                <p className="team_position">{item.position}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
