import contact from '../../images/home/contact.jpg';
import contact2 from '../../images/home/contact@2x.jpg';
import contactW from '../../images/home/contact.webp';
import contact2W from '../../images/home/contact@2x.webp';
import { ContactForm } from './Form';

export const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <picture className="contact__img--wrapper">
        <source srcSet={`${contactW} 1x, ${contact2W} 2x`} type="image/webp" />
        <source srcSet={`${contact} 1x, ${contact2} 2x`} type="image/jpeg" />
        <img src={contact} alt="contact" className="contact__img" />
      </picture>
      <div className="contact_form--wrapper container--padding">
        <h2 className="contact__heading">Request Callback</h2>
        <ContactForm />
      </div>
    </section>
  );
};
