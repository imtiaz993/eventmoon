import BlogsContent from "contents/BlogsContent";
import { fetchBlogsList } from "hooks";
import { simplifyBlog } from "utils/helper";

const Blogs = ({ blogsList }) => {
  
  return <BlogsContent blogsList={blogsList} />;
};

export const getStaticProps = async () => {
  let blogs = [];
  try {
    blogs = await fetchBlogsList();
  } catch (error) {
    console.log("/blogs", error);
  }

  return {
    props: {
      blogsList: blogs.map((blog) => simplifyBlog(blog)),
    },
    revalidate: 60,
  };
};

export default Blogs;
