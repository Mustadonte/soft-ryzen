import { Facebook, Twitter, YouTube, LinkedIn } from './svg-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <Facebook />
        <Twitter />
        <YouTube />
        <LinkedIn />
      </div>
      <p className="footer__text">Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
};
