import { FaBookOpen } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { navigation } from './navigation';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMob = window.matchMedia(
        '(min-width: 320px) and (max-width: 767px'
      );
      const isTab = window.matchMedia('(min-width: 768px');

      if (isMob && window.scrollY > 120) {
        setIsScrolled(true);
      }
      if (isTab && window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const headerClasses = isScrolled
    ? 'header container--padding headerScrolled'
    : 'header container--padding';

  const handleSectionClick = item => {
    if (item === 'Home') {
      window.scrollTo({
        top: 70,
        behavior: 'smooth',
      });
      return;
    }
    document.getElementById(`${item}`).scrollIntoView({
      alignTop: true,
      behavior: 'smooth',
    });
  };

  return (
    <section id="Home">
      <header className={headerClasses}>
        <a href="/" className="logo ">
          <FaBookOpen className="logo__icon" />
          <span className="logo__text--primiary">Finance</span>
          <span className="logo__text--secondary"> Ledger</span>
        </a>
        <nav>
          <ul className="nav__list">
            {navigation.map(item => {
              return (
                <li key={item} className="">
                  <span
                    className="nav__item nav__item--text"
                    onClick={() => handleSectionClick(item)}
                  >
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </section>
  );
};
