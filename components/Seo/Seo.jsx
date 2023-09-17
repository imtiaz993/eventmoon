import React from "react";
import Head from "next/head";

/**
 * @param {object} props
 * @param {string} props.title
 * @returns {JSX.Element}
 */

const Seo = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href="https://www.eventmoon.com" key="canonical" />
      <meta
        name="description"
        content="Welcome to no. 1 events provider company -  Event Moon is the leading events provider in US. Be with us to get latest events information"
      />
    </Head>
  );
};
export default Seo;
