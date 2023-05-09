import { FaAngleRight } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container__hero--bg">
        <p className="hero__credo">The Sky Is The Limit</p>
        <h1 className="hero__heading">
          We provide world class financial assistance
        </h1>
        <button className="hero__button">
          <FaAngleRight className="hero_button-icon" /> Read more
        </button>
      </div>
    </section>
  );
};
