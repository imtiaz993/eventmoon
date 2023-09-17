import React from 'react';
import Head from 'next/head';

/**
 * @param {object} props
 * @param {object} props.data
 * @returns {JSX.Element}
 */

const BlogSeo = ({ data }) => {
  return (
    <Head>
      <title>{data.BlogTitle}</title>
      <link rel='canonical' href='https://www.eventmoon.com' key='canonical' />
      <meta name='description' content={data.SimpleDescription} />
      <meta property='og:title' content={data.BlogTitle} />
      <meta property='og:type' content='article' />
      <meta
        property='og:image'
        content={'/assets/images/placeholder-blog.png'.src}
      />
      <meta property='og:url' content={`/${data.BlogLink}`} />
      <meta property='og:description' content={data.SimpleDescription} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:site_name' content='Event Moon' />
    </Head>
  );
};

export default BlogSeo;
