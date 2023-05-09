import blog from '../../images/home/blog.jpg';
import blog2 from '../../images/home/blog@2x.jpg';
import blogW from '../../images/home/blog.webp';
import blog2W from '../../images/home/blog@2x.webp';

export const Blog = () => {
  return (
    <section id="Blog">
      <div className="container--padding blog">
        <picture className="blog__img--wrapper">
          <source srcSet={`${blogW} 1x, ${blog2W} 2x`} type="image/webp" />
          <source srcSet={`${blog} 1x, ${blog2} 2x`} type="image/jpeg" />

          <img src={blog} alt="blog" className="blog__img" />
        </picture>
        <div className="blog__info ">
          <span className="blog__date">April 16 2020</span>
          <h2 className="blog__heading">Blog Post One</h2>
          <p className="blog__par">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <button className="blog__button">Read Our Blog</button>
        </div>
      </div>
    </section>
  );
};
