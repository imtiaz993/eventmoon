import classNames from 'classnames/bind';

// styles
import styles from './BlogsContent.module.scss';

// components
import { Footer } from 'components';
import { BlogsList, Hero } from '../BlogDetailsContent/components';

const cx = classNames.bind(styles);

const BlogsContent = ({ blogsList }) => {
  return (
    <div className={cx('blog-content')}>
      <Hero />
      <BlogsList blogsList={blogsList} />
      <Footer />
    </div>
  );
};

export default BlogsContent;
