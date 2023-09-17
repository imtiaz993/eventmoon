import React from 'react';
import classNames from 'classnames/bind';

// styles
import styles from './BlogDetailsContent.module.scss';

// components
import { BlogSeo, Footer } from 'components';
import { Hero, DetailsSection, ShareSection, RelatedBlogs } from './components';

const cx = classNames.bind(styles);

const BlogDetailsContent = ({ blogDetails, blogsList }) => {
  return (
    <div className={cx('blog-detail-content')}>
      <BlogSeo data={blogDetails} />
      <Hero data={blogDetails} />
      <div className={cx('wrapper')}>
        <DetailsSection blogData={blogDetails} />
        <ShareSection blogData={blogDetails} />
        <RelatedBlogs blogsList={blogsList} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailsContent;
