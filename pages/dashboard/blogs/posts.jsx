import { AdminGuard } from "components";
import { SidebarLayout } from "layouts";
import { Posts as Content } from "contents/Dashboard";

function Posts() {
  return <Content />;
}

Posts.getLayout = function getLayout(page) {
  return (
    <AdminGuard>
      <SidebarLayout>{page}</SidebarLayout>
    </AdminGuard>
  );
};

export default Posts;
