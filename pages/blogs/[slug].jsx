import BlogDetailsContent from "contents/BlogDetailsContent";
import { fetchBlogsList } from "hooks";
import { simplifyBlog, simplifyDescription } from "utils/helper";

const BlogDetails = ({ blogDetails, blogsList }) => {
  return <BlogDetailsContent blogDetails={blogDetails} blogsList={blogsList} />;
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  let blogs = [];
  let blogDetails = [];
  let blogsList = [];
  try {
    blogs = await fetchBlogsList();
  } catch (err) {
    console.log("[slug].jsx getStaticProps", err);
  }

  if (blogs.length) {
    blogDetails = blogs.find((item) => item.BlogLink === slug);

    blogDetails.SimpleDescription = simplifyDescription(
      blogDetails.BlogDescription
    );

    blogsList = blogs.slice(0, 4).map((blog) => simplifyBlog(blog));
  }
  return {
    props: {
      blogDetails,
      blogsList,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  let blogs = [];
  try {
    blogs = await fetchBlogsList();
  } catch (err) {
    console.log("[slug].jsx getStaticPaths", err);
    blogs = [];
  }

  const paths = blogs.map((blog) => ({
    params: { slug: blog.BlogLink },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetails;
