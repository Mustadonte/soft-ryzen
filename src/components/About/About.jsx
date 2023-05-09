import people from '../../images/home/people.jpg';
import people2 from '../../images/home/people@2x.jpg';
import peopleW from '../../images/home/people.webp';
import people2W from '../../images/home/people@2x.webp';

export const About = () => {
  return (
    <section id="About">
      <div className="about">
        <picture className="about__img--wrapper">
          <source srcSet={`${peopleW} 1x, ${people2W} 2x`} type="image/webp" />
          <source srcSet={`${people} 1x, ${people2} 2x`} type="image/jpeg" />

          <img src={people} alt="people" className="about__img" />
        </picture>

        <div className="about__exp container--padding ">
          <p className="about__text">What you are looking for</p>
          <h2 className="about__heading">We provide bespoke solutions</h2>
          <p className="about__par">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button className="about__button">Read more</button>
        </div>
      </div>
    </section>
  );
};
