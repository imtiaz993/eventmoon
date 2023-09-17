import { AdminGuard } from "components";
import { SidebarLayout } from "layouts";
import { Post as Content } from "contents/Dashboard";

function PostPage() {
  return <Content />;
}

PostPage.getLayout = function getLayout(page) {
  return (
    <AdminGuard>
      <SidebarLayout>{page}</SidebarLayout>
    </AdminGuard>
  );
};

export default PostPage;
